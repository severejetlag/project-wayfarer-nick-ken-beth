const db = require('../models')

let index = (req,res) => {
    let id = req.params.id;
    db.User.findOne({_id: id}, (err, foundUser) => {
        if (err) {
            console.log(err);
            return;
        }
        if(foundUser){  
            db.Post.find({_userId: foundUser._id})
                .populate('_userId')
                .exec((err, posts) => {
                    if(err){
                        res.status(500).send(err);
                        return;
                    }
                    res.json({
                        user: foundUser, 
                        posts: posts
                    });
                })
        }else{
            res.send('user not found');
        }
    });
}

// PUT Saves the updated information from the edit page. 
let postEdit = (req,res) => {
    // let username = req.params.username;
    // db.User.findOne({username: username}, (err, foundUser) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     foundUser.jobTitle = req.body.jobTitle;
    //     foundUser.jobField = req.body.jobField;
    //     foundUser.blurb = req.body.blurb;
    //     foundUser.save((err, saved) => {
    //         console.log('Updated ', foundUser.username);
    //         res.redirect(`/users/${foundUser.username}`);
    //     });
    // });
}

module.exports = {
    index,
    postEdit
}