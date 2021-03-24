const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema ({

    bikeName: {
        type: String,
        require:true,
    },
    bikeType:{
        type: String,
        require:true,
    },
    rentPrice:{
        type: String,
        require:true,
    },
});

const RentedPostSchema = new Schema ({

    bikeName: {
        type: String,
        require:true,
    },
    bikeType:{
        type: String,
        require:true,
    },
    rentPrice:{
        type: String,
        require:true,
    },
});

module.exports ={
    RentedPost: mongoose.model ("rentedposts", RentedPostSchema),
    Post: mongoose.model ("posts", PostSchema),
}