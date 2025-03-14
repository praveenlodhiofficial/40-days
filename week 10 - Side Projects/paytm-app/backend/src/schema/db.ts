import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId
// ------------------------------------------------>

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        minLength: 5,
        maxLength: 50
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

const AccountSchema = new Schema({
    userId: {
        type: ObjectId,
        ref: 'users',
        required: true,
    },
    balances: {
        type: Number,
        required: true
    },
})

// ------------------------------------------------>

const UserModel = mongoose.model('users', UserSchema)
const AccountModel = mongoose.model('accounts', AccountSchema)

// ------------------------------------------------>

export { UserModel, AccountModel }