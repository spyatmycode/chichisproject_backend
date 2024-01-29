const mongoose = require('mongoose');


const artworkSchema = mongoose.Schema({
 
    price:{
        type: Number,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required:true
    },
    artistEmail:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
},{
    timestamps: true
})


artistSchema.statics.addArtwork = async function(artwork){
    const {price, title, description, artist} = artwork;

    if(!price || !title || !description || !artist || !image ) throw Error("Please enter all the art details");

    const newArtwork = {
        price, description, image, title 
    }

    await this.artworks.push(newArtwork);

    const savedArtWork = await this.save();

    console.log(`Done saving ${savedArtWork}`);

}

artistSchema.statics.getArtWorksForOne = async function(email){
    if(!email) throw Error("No email!");

    const artworks = await this.find({artistEmail: email});

    return artworks;
}


artistSchema.statics.getAllArtworks = async function(){
    
    const artworks = await this.find({});

    return artworks

}




const Artwork = mongoose.model('Artwork', artworkSchema)

module.exports = Artwork