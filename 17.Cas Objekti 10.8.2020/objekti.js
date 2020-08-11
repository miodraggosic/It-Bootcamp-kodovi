let blog = {
    title: "Moj blog",
    content: "Sadrzaj mog prvog bloga",
    author: "Petar Peric",
};
console.log(blog);
console.log (typeof blog);


let blog2 = {
    title: "Moj blog",
    content: "Sadrzaj mog drugog bloga",
    author: "Mika Antic",
    likes: 58,
    dislikes: 2,
};

console.log (blog2);

console.log (blog.title);
console.log (blog.content);

blog2.title = "Ovo je novi naslov bloga";
console.log (blog2);


let user = {
    userName: "Petar Mitic",
    age: 45,
    blogs: ["Moj verni prijatelj", "Moja prva ljubav", "Nesto o sebi"], 
};

let user2 = {
    userName: "Mitar Miric",
    age: 27,
    blogs: ["Moj najbolji prijatelj", "Moja najveca ljubav", "Godine lutanja"],
    login: function (lang)  {
        let u = this.userName
        if (lang === true) {
            console.log (`you are logged in ${u} `)
        } else {
            console.log (`Ulogovani ste ${u}`)
        }
    },
    ispis: function () {
        let blozi = this.blogs;
        blozi.forEach (blog => {
            console.log (blog);
        })
        console.log (this.blogs);
    },
};

user2.ispis();



let user3 = {
    userName: "Nikola Radjen",
    age: 63,
    blogs: ["Zivot u bazenu", "Godine reprezentacije", "Profesionalni sport"],
    login: function() {
        console.log (this);
        console.log ("Ulogovani ste " + this.userName);
    },
    logout: function () {
        console.log (this);
        console.log ("Izlogovani ste " + this.userName)
    },
    ispis: function () {
        let blozi = this.blogs;
        blozi.forEach (blog => {
            console.log (blog);
        })
        console.log (this.blogs);
    },
};

user3.login();
user3.logout();
user3.ispis();

console.log (this);

console.log (user);
console.log (user2);
console.log (user3);


// Zadatak 3

let dan = {
    datum: "2012/08/22",
    kisa: false,
    sunce: true,
    oblacno: false,
    temper: [9, 11, 13, 19, 20, 23, 25, 26, 26, 24, 17, 15],
    prosek: function () {
        let suma = 0;
        let broj = 0;
        for (i = 0; i < this.temper.length; i++) {
            suma += this.temper[i];
            broj++;
        } return suma / broj;
    },

    viseOd: function () {
        let broj = 0;
        let vise = this.temper;

        vise.forEach(vred => {
            if (vred > this.prosek()) {
                broj++;
            }
        })
        return broj;
    },

    maxTemp: function () {
        let max = this.temper[0];
        let broj = 0;
        let temp = this.temper;
        for (i = 0; i < this.temper.length; i++) {
            if (this.temper[i] > max) {
                max = this.temper[i];
            }
        }
        temp.forEach(t => {
            if (t >= max) {
                broj++;
            }
        })
        return broj;
    },

    izmedju: function () {
        let t1 = 15;
        let t2 = 23;
        let temp = this.temper;
        let br = 0;

        temp.forEach (t => {
            if (t >= t1 && t <= t2) {
                br++;
            }
        });  return br;
    },

    veciDeo: function () {
        let veca = 0;
        let manja = 0;
        let temp = this.temper;

        temp.forEach (t => {
            if (t >= this.prosek()) {
                veca++;
                
            } else {
                manja++;
            }
        });
        
        if (veca > manja) {
            console.log ("Temperaratura je veci deo dana iznad proseka");
        } else if (veca < manja) {
            console.log ("Temperaratura je veci deo dana ispod proseka");
        } else {
            console.log ("Temperaratura je je konstantna veci deo dana");
        }
    },

    leden: function () {
        let temp = this.temper;
        let rez = true;
        temp.forEach (t => {
            if (t >= 0) {
                rez = false;
            }
        }); return rez;
    }
};


console.log (dan.prosek());
console.log (dan.viseOd());
console.log (dan.maxTemp());
console.log (dan.izmedju());
dan.veciDeo();

console.log (dan.leden());




