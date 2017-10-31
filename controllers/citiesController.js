const db = require('../models')

let show = (req,res) => {
	let query = db.City.find({})
	;
	query.exec((err, cities) => {
     	if(err){
            console.log(err);
            return; 
        }
        res.json(cities);
    })
}

module.exports = {
	show
}