const db = require("../models")

let create = (req,res) => {
  db.Post.create(req.body, (err, post) => {
    if (err) { console.log('error', err); }
    post._userId = req.body.postUser;
    post._cityId = req.body.postCityId;
    post.title = req.body.postTitle;
    post.content = req.body.postBody;
    post.save((err,savedPost) => {
      if (err) { console.log('Saving new post failed'); }
    res.json(savedPost);
    })
  })
}

module.exports = {
  create
}
