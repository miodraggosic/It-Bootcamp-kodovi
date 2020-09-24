export class ChatUI {
    constructor (lP) {
        this.listMsg = lP;
    }

    set listMsg (u) {
        this._listMsg = u; 
    }
    get listMsg () {
        return this._listMsg;
    }

    formatDate(date){        
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();
        let h = date.getHours();
        let min = date.getMinutes();

        //Dodavanje 0 ispred jednocifrenih vrednosti
        d = String(d).padStart(2,"0");
        m = String(m).padStart(2,"0");
        h = String(h).padStart(2,"0");
        min = String(min).padStart(2, "0");

        let strDate = d + "." + m + "." + y + ". - " + h + ":" + min;

        return strDate;
    }

    dateToday = (date) => {
        let dateNow = new Date();
        let strDate = this.formatDate(dateNow);
        let newDate = strDate.slice(0, 11);
        console.log (newDate);
        if(newDate == date.slice(0, 11)) {
            return date.slice(-5);
        } else {
            return date;
        }
    }

    templateLi (doc) {
        let date = doc.created_at.toDate();
        let li = document.createElement('li');
        let user = document.createElement('span');
        user.classList.add('user');
        let msg = document.createElement('span');
        msg.classList.add('msg');
        let time = document.createElement('p');
        let dateStr = this.formatDate(date);
        let dateFinal = this.dateToday(dateStr);
        
        user.textContent =`${doc.username} :`;
        msg.textContent = ` ${doc.message}`;
        time.textContent = dateFinal;

        li.appendChild(user);
        li.appendChild(msg);
        li.appendChild(time);
        this.listMsg.appendChild(li);
    }
}