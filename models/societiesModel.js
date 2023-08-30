import mongoose from "mongoose"
const societySchema = new mongoose.Schema({
    title: { type: String, unique: true },
    introduction:String,
    coverPic:String,
    developedBy:String,
    devpic:String,
    nocDetails:String,
    nocpic:String,
    locationDetails:String,
    mapPic:String,
    url:String,
    date:String,
    seoDetails:String,
    city:String,
})
module.exports=  mongoose.models.societiesModel || mongoose.model('societiesModel',societySchema)
