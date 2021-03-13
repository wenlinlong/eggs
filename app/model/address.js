module.exports=app=>{
    let mongoose=app.mongoose
    let Schema=mongoose.Schema
    const AddressSchema=new Schema({
        Name:{
            type:String,
        },
        address:{
            type:String
        },
        detailedAddress:{
            type:String
        },
        phone:{
            type:Number
        }
    })
    return mongoose.model('Address',AddressSchema)
}