let index = (req,res) => {
    // let username = req.params.username;
    // db.User.findOne({username: username}, (err, foundUser) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     if(foundUser){  
    //         db.WorkspaceItem.find({_userId: foundUser._id})
    //             .populate('_userId')
    //             .populate('_softwareId')
    //             .exec((err, workspaceItems) => {
    //                 if(err){
    //                     res.status(500).send(err);
    //                     return;
    //                 }
    //                 // Check is user is viewing their own page or someone elses or not logged in at all
    //                 if(!currentUser || foundUser.username !== currentUser.username.toString()){
    //                     res.render(
    //                     'userProfile.ejs', 
    //                     {
    //                         message: req.flash('errorMessage'), 
    //                         user: foundUser, 
    //                         workspaceItems: workspaceItems
    //                     });
    //                 }else if(foundUser.username === currentUser.username.toString()){
    //                    res.render(
    //                     'currentUserUserProfile.ejs', 
    //                     {
    //                         message: req.flash('errorMessage'), 
    //                         user: foundUser, 
    //                         workspaceItems: workspaceItems
    //                     }); 
    //                 }
    //             });
    //     }else{
    //         res.send('user not found');
    //     }
    // });
}

// GET Displays form page for updating basic profile information 
let getEdit = (req,res) => {
    // let username = req.params.username;
    // if(username === currentUser.username.toString()){
    //     db.User.findOne({username: username}, (err, foundUser) => {
    //         if (err) {
    //             console.log(err);
    //             return;
    //         }
    //         res.render(
    //             'userProfileEdit.ejs', 
    //             {
    //                 message: req.flash('errorMessage'), 
    //                 user: foundUser
    //             });
    //     });
    // } else {
    //     res.redirect('/');
    // }

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
    getEdit,
    postEdit
}