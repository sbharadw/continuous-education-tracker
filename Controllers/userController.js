const db = require("../Models");
// Defining methods for the User
module.exports = {

findAll: function(req, res) {
    db.User
        .find(req.query)
        .populate("info")
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

aggregate: function(req, res) {

        db.User
            .aggregate([
                {
                  $addFields: {
                    totalhours: {$sum: "$info.courseHours"},
                    totalburnhours:{$sum: "$info.burnHours"},
                  }
                },
              ]).then(dbData => {
                console.log(dbData)
                res.json(dbData);
              })
              .catch(err => res.status(422).json(err));
    

},

findById: function(req, res) {
    console.log('PARAMS *************************')
    console.log(req.params)

    db.User
        .findOne({subId: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

updateByUnit: function(req, res) {
    console.log('PARAMS *************************')
    console.log(req.params)
    console.log(req.body)
    
    db.User
        .updateMany({unit: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

findByUnit: function(req, res) {
    console.log('PARAMS *************************')
    console.log(req.params)
    //Populating info. for individual users 
    db.User
        .find({unit: req.params.id}, req.body)
        .populate("info")
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

create: function(req, res) {
    console.log(req.body)
    db.User
        .create(req.body)
        .then((dbModel) => {
            console.log(dbModel)
            
            return res.json(dbModel)    
        
        })
        .catch(err => res.status(422).json(err));
    },

update: function(req, res) {

    console.log('PARAMS %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
    console.log(req.params)

    db.User
        .findOneAndUpdate({ subId: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

remove: function(req, res) {
    db.User
        .findById({ subId: req.params.employeeId })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
   
};
