import mongoose from "mongoose";

const postSchema  = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
     
    },
    username: {
        type: String,
        required: true,
    }   

}, {timestamps: true})

export default mongoose?.models?.post || mongoose.model("post", postSchema )
// export default mongoose.model("post", postSchema);