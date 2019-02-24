const moogoose = require("mongoose");
const Schema = moogoose.Schema;


const postSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
});

module.exports = Post = moogoose.model('posts', postSchema);