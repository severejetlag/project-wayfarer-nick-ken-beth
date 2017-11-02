const db = require('../models')

let show = (req,res) => {
	let query = db.City.find({});
	query.exec((err, cities) => {
     	if(err){
            console.log(err);
            return; 
        }
        res.json(cities);
    })
}

let index = (req,res) => {
	let id = req.params.id; 
	db.City.findOne({_id: id}, (err, foundCity) =>{
		if(err){
			console.log(err)
			return;
		}
		if(foundCity){
			db.Post.find({_cityId: foundCity._id})
				.populate('_userId')
				.exec((err, posts)=>{
					if(err){
	                    res.status(500).send(err);
	                    return;
	                }
	                res.json({
	                	city: foundCity,
	                	posts: posts
	                })
				})
		}else{
			res.send("no city found");
		}
	})
}

module.exports = {
	show,
	index
}