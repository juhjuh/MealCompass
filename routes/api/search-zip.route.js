const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const FoodBank = mongoose.model("FoodBank")

//creating FoodBanks
router.post('/createbanks', (req, res) => {

    const { id, name, street, city, county, zip, phone, hours, type, description } = req.body
    if(!name || !street || !city || !county || !zip || !phone || !hours || !type || !description ){
        res.status(422).json({message:"no loan is being requested for"})

        const bank = new FoodBank({
            name, 
            street, 
            city, 
            county, 
            zip, 
            phone,
            hours,
            type,
            description
        })
        bank.save()
        .then(result => {
            res.json(result)
        }).catch(err => {
            console.log(err);
        })
    }
})

//getting all the FoodBanks
router.post('/allbanks', (req, res) => {

    const {zip} = req.body

    // console.log(zip);

    //searching a specific field in document
    FoodBank.createIndexes({zip:"text"})

    //searching for the related document
    FoodBank.find({zip:{  
      $regex: new RegExp(zip)
      }}).limit(500)
    .then(banks => {
        res.json({banks})
        // console.log(banks);
    }).catch(err => {
        console.log(err);
    })

})

module.exports = router