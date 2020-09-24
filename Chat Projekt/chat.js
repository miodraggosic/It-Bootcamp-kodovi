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
        let date = new Date();
        let doc = {
            message: msg,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(date),
        };
        let response = await this.chats.add(doc).then(() => {
            console.log('Message succesfully added');
        }).catch(error => {
            console.log(`Cannot add message: ${error}`);
        });
        return response;
    }

    getChats (callback) {
        this.unsub = this.chats.where('room', '==', this.room)
        .orderBy('created_at')
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                let type = change.type;
                if(type == 'added') {
                    callback(change.doc.data());
                } else if (type == 'removed') {
                    console.log('document deleted');
                    callback(change.doc.data());
                }
            });
        })
    }

    updateUsername (newUser) {
        this.username = newUser;
        localStorage.setItem('userName', newUser);
    }

    updateRoom (roomName) {
        this.room = roomName;
        if(this.unsub) {
            this.unsub();
        }
        
    }
}