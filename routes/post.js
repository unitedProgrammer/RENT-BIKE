const router = require ("express").Router();
const {Post} = require ("../models/Post");
const {RentedPost} = require ("../models/Post");

router.post ("/add", (req,res) => {
    const post = new Post (req.body);
    post.save((err)=>{
        if(err) return res.status(400).json ({ success:false, err});
        return res.status(200).json ({success:true});
    });
});

router.post ("/add2", (req,res) => {
    const post = new RentedPost (req.body);
    post.save((err)=>{
        if(err) return res.status(400).json ({ success:false, err});
        return res.status(200).json ({success:true});
    });
});



router.get("/", (req, res) => {
    Post.find().exec ((err, posts)=> {
        if(err) return res.status(400).json ({ success:false, err});
        return res.status(200).json ({success:true, posts: posts});
    });
});

router.get("/rented", (req, res) => {
    RentedPost.find().exec ((err, posts)=> {
        if(err) return res.status(400).json ({ success:false, err});
        return res.status(200).json ({success:true, posts: posts});
    });
});


router.get("/detail/:id", (req, res) =>{
    let id = req.params.id;

    Post.findById ( id, function (err, post ){
        if ( err ) return res.json ({success: false, error: err})
        return res.json ({ success: true, post});
    })
})

router.put("/update/:id", (req, res) =>{
    Post.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err, post) => {
            if(err) return res.status(400).json ({ success:false, err});
            return res.status(200).json ({success:true });
        }
    )
});

router.delete("/delete/:id", (req, res)=> {
    Post.findByIdAndRemove(req.params.id).exec((err, deleteItem)=>{
        if(err){
            res.send(err);
        }
        return res.json (deleteItem);
    });
})

router.delete("/delete2/:id", (req, res)=> {
    RentedPost.findByIdAndRemove(req.params.id).exec((err, deleteItem)=>{
        if(err){
            res.send(err);
        }
        return res.json (deleteItem);
    });
})


module.exports = router;