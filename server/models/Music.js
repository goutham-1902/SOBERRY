import mongoose from "mongoose";

const MusicSchema = new mongoose.Schema(
    {
        key: String,
        seq: Number,
        src: String,
        img: String,
        title: String,
        artist: String,
        artistkey: [String],
        genre: String,
        album: String,
    }, { timestamps: true }
);

const Music = mongoose.model('Music', MusicSchema);
export default Music;