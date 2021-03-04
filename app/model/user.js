//用户的所有信息(字段)
//username password email mobile...

module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const UserSchema = new Schema({
        username: {
            type: String,
        },
        password: {
            type: String
        }

    })
    return mongoose.model('User', UserSchema)
}