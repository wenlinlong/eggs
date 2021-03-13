module.exports=app=>{
    let mongoose=app.mongoose
    let Schema=mongoose.Schema
    const Hotgoodschema=new Schema({

        name:{
            type:String
        },
        img : {
            type : String
        },
        price : {
            type : Number
        },
        promotion:{
            type:String
        },
        classification:{
            type:String
        },
        brand:{
            type:String
        },
        hot:{
            type:Boolean
        },
        description:{
            type:String
        },
        cont:{
            type:Number
        }
    })
    return mongoose.model('Hotgoods',Hotgoodschema)
}