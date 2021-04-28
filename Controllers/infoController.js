const db = require("../Models");

// Defining methods for the info  

module.exports = {
    findAll: function(req, res) {
        db.Info
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findById: function(req, res) {
        db.Info
            .findOne({subId: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: function({ body }, res) {

        console.log(`Body ********************`)
        console.log(body)
        console.log(`Body ********************`)
        db.Info
            .create(body)
            .then(({ _id, subId }) => db.User.findOneAndUpdate({subId: subId}, { $push: { info: _id } }, { new: true }))
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Info
            .findOneAndUpdate({ subId: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Info
            .findById({ subId: req.params.subId })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}



