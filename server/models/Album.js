import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    sq:Number,
    title:String,
    src: String,
    img: String
});

const AlbumSchema = new mongoose.Schema(
    {
        key: String,
        title: String,
        Artist: String,
        artistkey: [String],
        img: String,
        songs: [songSchema],

    }, { timestamps: true }
);

const Album = mongoose.model('Album', AlbumSchema);
export default Album;