export class Chatroom {
    constructor (room, user) {
        this.room = room;
        this.username = user;
        this.chats = db.collection('chats');
        this.unsub;
    }

    set room (r) {
        this._room = r;
    }
    set username (uN) {
        this._username = uN;
    }
    get room () {
        return this._room;
    }
    get username () {
        return this._username;
    }

     async addChat (msg) {
         if (msg != '') {
             let date = new Date();
             let doc = {
                 message: msg,
                 username: this.username,
                 room: this.room,
                 created_at: firebase.firestore.Timestamp.fromDate(date),
             };
             let response = await this.chats.add(doc);
             return response;
         } else {
             alert ("You cant send empty message");
         }
    }

    getChats (callback) {
        this.unsub = this.chats.where('room', '==', this.room)
        .orderBy('created_at')
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                let type = change.type;
                if(type == 'added') {
                    callback(change.doc.data());
                } 
            });
        });
    }
    
    

    updateUsername (newUser) {
        if(newUser.length > 2 && newUser.length < 10 && !newUser.includes(' ') && !newUser.includes('   ')) {
            this.username = newUser;
            localStorage.setItem('userName', newUser);
        } else {
            alert('User name must be betwen 2 and 10 characters with no whitespace!');
        }
        
        
    }

    updateRoom (roomName) {
        this.room = roomName;
        localStorage.setItem('room', roomName);
        if(this.unsub) {
            this.unsub();
        }
        
    }
}