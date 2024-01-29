const mongoose = require('mongoose');
const bcrypt = require("bcrypt")

const artistSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    bio:{
        type: String,
        required: true
    },
    artworks:{
        type: [mongoose.Schema.Types.Mixed],
        default:[]
    }

},{
    timestamps: true
})


const Artist = mongoose.model('Artist', artistSchema)

module.exports = Artist