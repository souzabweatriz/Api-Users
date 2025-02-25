const Post = require("../models/Post");
const PostList = require("../models/PostList");
const list = new PostList();

list.addPost(new Post("@isaj333j6", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZvDylk6WR7Gh4vhp9FagwVAiE__wRqOF8A&s", "Ain que gatinho fofooo!!!!", 2));
list.addPost(new Post("@souzabweatriz_", "https://pa1.aminoapps.com/6342/e504c89f0d2b7196c7ce3001cdd2dc6ac68bb036_hq.gif", "Amo Hello Kittyyyyyyy", 7 ));

const router = {
    getAllPosts: (req, res) =>{
        res.json(list.getAllPosts());
    },
    getPostById: (req, res) =>{
        try {
            res.json(list.getPostById(req.params.id));
        } catch (error) {
            res.status(404).json({ message: "Post não encontrado", error});
        }
    },
    addPost: (req, res) =>{
        try {
            const {user, url, description, likes} = req.body;
            if (!user || !url  == undefined){
                throw new Error("Esses campos são obrigatórios");
            }
            const newPost = new Post(user, url, description, likes);
            list.addPost(newPost);
            res.status(201).json(newPost);
        } catch (error) {
            res.status(400).json({ message: error.message, error});
        }
    },
    updatePost: (req, res) =>{
        try {
            res.json(list.updatePost(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({message: "Erro ao atualizar Post", error});
        }
    },
    deletePost: (req, res) =>{
        list.deletePost(req.params.id);
        res.status(200).json({ message: "Post deletado com sucesso", IdDeletado: req.params.id})
    }
};

module.exports = router