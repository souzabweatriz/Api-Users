const { v4: uuid4 } = require("uuid");

class Post{
    constructor(user, url, description, likes){
        this.id = uuid4();
        this.user = user;
        this.url = url;
        this.description = description;
        this.likes = likes;
    }
    likes(){
        this.likes += 1;
    }
}

module.exports = Post;