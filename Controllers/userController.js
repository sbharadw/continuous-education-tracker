const db = require("../Models");
// Defining methods for the User
module.exports = {
findAll: function(req, res) {
    db.User
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
findById: function(req, res) {
    db.User
        .findById(req.params.employeeId)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
create: function(req, res) {
    db.User
        .create(req.body)
        .then(console.log(`User created ${JSON.stringify(req.body)}`))
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
update: function(req, res) {
    db.User
        .findOneAndUpdate({ _subId: req.params.employeeId }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
remove: function(req, res) {
    db.User
        .findById({ _subId: req.params.employeeId })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};