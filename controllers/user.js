const User = require("../models/User")

// // TEMP HTTP POST - User Create
// exports.user_create_post = (req, res) => {
//     let user = new User(req.body)
    
//     user.save()
//     .then(user => {
//         res.json({user})
//     })
//     .catch(err => {
//         console.log(err)
//         console.log('Cannot Create User')
//     })
// }

// HTTP GET - User Details
exports.user_details_get = (req,res) => {
    User.findById(req.body._id)
    .then(user => {
        res.json({user})
    })
    .catch(err => {
        console.log(err)
        console.log('Cannot Get User Details')
    })
}

// HTTP PUT - User Update
exports.user_update_put = (req,res) => {
    User.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then(user => {
        res.json({user})
    })
    .catch(err => {
        console.log(err)
        console.log('Cannot Update User')
    })
}

// HTTP DELETE - User Delete
exports.user_drop_delete = (req,res) => {
    User.findByIdAndDelete(req.body._id)
    .then(user => {
        res.json({user})
    })
    .catch(err => {
        console.log(err)
        console.log('Cannot Delete User')
    })
}