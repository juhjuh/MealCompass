const mongoose = require('mongoose');

/*
Provider / Food Distributor / Food Bank Account type

Fields:
   
*/
const foodBankSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    street: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    county: {
        type: String,
        require: true
    },
    zip: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    hours: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    longitude: {
        type: String,
        require: true,
    },
    latitude: {
        type: String,
        require: true,
    }
});
mongoose.model("FoodBank", foodBankSchema)




// collection name needs foodbank..mongodb adds "s" to end
// ---------- this was a tough one to discover, don't ever forget.

// module.exports = FoodBank = mongoose.model('FoodBank', FoodBankSchema);

// module.exports = FoodBank = mongoose.model('banks', FoodBankSchema);

// password: {
//     type: String,
//     require: 
// },