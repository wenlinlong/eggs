module.exports=app=>{
    let mongoose=app.mongoose
    let Schema=mongoose.Schema
    const Goodschema=new Schema({
        // username:{
        //     type:String,
        // },
        // password:{
        //     type:String
        // }
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
        },
        banners:{
            type:Array
        }
     
    })
    return mongoose.model('Goods',Goodschema)
}