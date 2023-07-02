import mongoose from "mongoose";

const postSchema=mongoose.Schema(
    {
        userId:{
            type:String,
            required:true,
        },
        firstName:{
            type:String,
            required:true,
        },
        lastName:{
            type:String,
            required:true,
        },
        location:String,
        description:String,
        picturePath:String,
        userPicturePath:String,
        likes:{
            type:Map, //using a Map over an array to store the ids of the ppl who liked is more efficient
            of:Boolean,
        },
        comments:{
            type:Array,
            default:[],
        },
    },
        {timestamps:true}
);

const Post=mongoose.model("Post",postSchema);

export default Post;