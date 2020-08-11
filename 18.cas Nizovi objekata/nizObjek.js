let blog1 = {
    title: "Akvarel",
    likes: 70, 
    dislikes: 7, 
};

let blog2 = {
    title: "Ulje na platnu!",
    likes: 74, 
    dislikes: 52, 
};

let blog3 = {
    title: "Grafika!",
    likes: 62, 
    dislikes: 66, 
};

let arrBlogs = [blog1, blog2, blog3];
console.log (arrBlogs);

arrBlogs.forEach (blog => {
    console.log (blog.title);
});

console.log (arrBlogs[0].likes);

arrBlogs[0].title = "Akvarel vodenim bojama";

console.log (arrBlogs[0].title);

let sumLikes = niz => {
    let suma = 0;
    niz.forEach(blog => {
        suma += blog.likes;
    });
    return suma
};

console.log (sumLikes(arrBlogs));

let prosekLikes = niz => {
    let prosek = sumLikes(niz) / niz.length;

    return prosek;
};

console.log (prosekLikes(arrBlogs));


let visePozLikes = niz => {
    niz.forEach (blog => {
        if (blog.likes > blog.dislikes) {
            console.log (blog.title);
        }
    }); 
};

visePozLikes(arrBlogs);


let visePozDuploLikes = niz => {
    niz.forEach (blog => {
        if (blog.likes / 2 > blog.dislikes) {
            console.log (blog.title);
        }
    }); 
};

visePozDuploLikes (arrBlogs);



let uzvik = niz => {
    niz.forEach (blog => {
        if (blog.title[blog.title.length - 1] === `!`) {
            console.log (blog.title);
        }
    });
};

uzvik(arrBlogs);


let user1 = {
    name: "Jelena",
    age: 25,
    blogs: [blog1],
};

let user2 = {
    name: "Stefan",
    age: 13,
    blogs: [blog2, blog3],
};

let users = [user1, user2];


users.forEach ( user => {
    if (user.age < 18) {
        console.log (user.name)
    }
});

users.forEach (user => {
    let userBlogs = user.blogs;
    userBlogs.forEach(blog => {
       if(blog.likes > 50) {
           console.log (blog.title);
       }
    });
});


let stefan = niz => {
    niz.forEach(user => {
        if (user.name == "Stefan") {
            let b = user.blogs;
            b.forEach (blog => {
                console.log (blog.title);
            });
        }
    });
};

stefan(users);


users.forEach (user => {
    let sum = 0;
    let b = user.blogs;
    b.forEach(blog => {
        sum += blog.likes;
    }); if (sum >= 100){
        console.log (user.name);
    }
});


let suma = 0;
let br = 0;

users.forEach(user => {
    let b = user.blogs;
    b.forEach (blogs => {
        suma += blogs.likes;
        br++;
    });
});

let prosek = suma / br;

users.forEach (user => {
    let b = user.blogs;
    b.forEach (blog => {
        if(blog.likes > prosek) {
            console.log (user.name);
        }
    });
});



let dan1 = {
    datum: "2020/08/10",
    kisha: true,
    sunce: true,
    oblaci: true,
    temp: [18, 20, 26, 29, 30, 32, 25],
    avgTemp: function () {
        let sum = 0;
        this.temp.forEach(t => {
            sum += t;
        });
        return sum / this.temp.length;
    },
};

let dan2 = {
    datum: "2020/08/11",
    kisha: false,
    sunce: true,
    oblaci: false,
    temp: [20, 25, 29, 29, 32, 25],
    avgTemp: function () {
        let sum = 0;
        this.temp.forEach(t => {
            sum += t;
        });
        return sum / this.temp.length;
    },
};

let dan3 = {
    datum: "2020/08/12",
    kisha: false,
    sunce: true,
    oblaci: true,
    temp: [22, 35, 25],
    avgTemp: function () {
        let sum = 0;
        this.temp.forEach(t => {
            sum += t;
        });
        return sum / this.temp.length;
    },
};
let dan4 = {
    datum: "2020/08/13",
    kisha: true,
    sunce: false,
    oblaci: true,
    temp: [18, 20, 26, 29, 30, 32, 25],
    avgTemp: function () {
        let sum = 0;
        this.temp.forEach(t => {
            sum += t;
        });
        return sum / this.temp.length;
    },
};

console.log(dan1.avgTemp());
console.log(dan2.avgTemp());
console.log(dan3.avgTemp());
console.log(dan4.avgTemp());
let dani = [dan1, dan2, dan3, dan4];



let maxMerenja = arr => {
    let max = arr[0].temp.length;
    let maxD = arr[0].datum;
    arr.forEach(dan => {
        if (dan.temp.length > max) {
            max = dan.temp.length;
            maxD = dan.datum;
        }
    }); return maxD;

}

console.log (maxMerenja(dani));

let maxMerenjaKraj = arr => {
    let max = arr[0].temp.length;
    let maxD = arr[0].datum;
    arr.forEach(dan => {
        if (dan.temp.length >= max) {
            max = dan.temp.length;
            maxD = dan.datum;
        }
    }); return maxD;

}

console.log (maxMerenjaKraj(dani));


let vreme = niz => {
    let kisni = 0;
    let oblacni = 0;
    let suncani = 0;
    niz.forEach (dan => {
        if (dan.kisha == true) {
            kisni++
        }
        if(dan.sunce == true) {
            suncani++;
        }
        if (dan.oblaci == true) {
            oblacni++;
        }
    }); console.log (kisni, suncani, oblacni);
}


vreme(dani);


let avgTotal = arr => {
    let sum = 0;
    let br = 0;
    arr.forEach ( dan => {
        let temp = dan.temp;
        temp.forEach (t => {
            sum+= t;
            br++;
        });
    }); return sum / br;
};

console.log (avgTotal(dani));

let dayAvg = arr => {
    let avgtotal = avgTotal(arr);
    let br = 0;
    arr.forEach (dan => {
        if(dan.avgTemp() > avgtotal) {
            br++;
        }
    }); console.log (br);
};

dayAvg(dani);