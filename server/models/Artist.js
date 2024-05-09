import mongoose from "mongoose";

const ArtistSchema = new mongoose.Schema(
    {
        key: String,
        img: String,
        name: String
    }, { timestamps: true }
);

const Artist = mongoose.model('Artist', ArtistSchema);
export default Artist;