const Joke = require("../models/joke.model")

module.exports.testRoute = (req, res) => {
    res.json({message: "hello from controller!"});
}

module.exports.getAll = (req, res) => {
    Joke.find({})
        .then(result => res.json(result))
        .catch(err => res.status(400).json({message : "did not work", err}))
}

module.exports.getOne = (req, res) => {
    Joke.findOne({_id : req.params._id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json({message : "did not work", err}))
}

module.exports.randomJoke = (req, res) => {
    Joke.aggregate().sample(1)
        .then(result => res.json(result))
        .catch(err => res.status(400).json({message : "did not work", err}))
}

module.exports.create = (req, res) => {
    Joke.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.status(400).json({message:"didnt work!", err}))
}

module.exports.updateOne = (req, res) => {
    Joke.updateOne({_id :req.params._id}, req.body, {runValidators:true})
        .then(result => res.json(result))
        .catch(err => res.status(400).json({message:"didnt work!", err}))
}

module.exports.deleteOne = (req, res) => {
    Joke.deleteOne({_id:req.params._id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json({message:"didnt work!", err}))
}