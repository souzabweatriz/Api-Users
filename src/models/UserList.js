class UserList{
    constructor(){
        this.users = [];
    }
    addUser(user){
        this.users.push(user);
    }
    getAllUsers(){
        return this.users;
    }
    getUserbyId(id){
        const user = this.users.find(user => user.id == id);
        if(!user) 
            throw new Error ("User not found!!!");
        return user;
    }
    updateUser(id, updateData){
        const user = this.getUserbyId(id);
        Object.assign(user, updateData);
        return user;
    }
    deleteUser(id){
        this.users = this.users.filter(user => user.id != id);
    }
}

module.exports = UserList;