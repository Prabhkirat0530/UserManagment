import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
    streetAddress: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 300
    },
    pincode: {
        type: String,
        required: false,
        minLength: 1,
        maxLength: 10
    },
    state: {
        type: String,
        required: false,
        minLength: 1,
        maxLength: 20
    },
    city: {
        type: String,
        required: false,
        minLength: 1,
        maxLength: 20
    },
    country: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 30
    }
})

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 300
    },
    custom_id: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 300
    },
    hobbies: [],
    address: addressSchema

})

export default mongoose.model('Users', userSchema);