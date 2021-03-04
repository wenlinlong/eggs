module.exports=app=>{
    let mongoose=app.mongoose
    let Schema=mongoose.Schema
    const UserSchema=new Schema({
        // username:{
        //     type:String,
        // },
        // password:{
        //     type:String
        // }
        arr:{
            type:Array
        }
    })
    return mongoose.model('Nav',UserSchema)
}