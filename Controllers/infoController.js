const db = require("../Models");

// Defining methods for the info  

module.exports = {
    findAll: function(req, res) {
        db.Info
            .find(req.query)
            .then(dbModel => res.json(dbModel))
    },
    findById: function(req, res) {
        db.Info
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Info
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Info
            .findOneAndUpdate({ _subId: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Info
            .findById({ _subId: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}