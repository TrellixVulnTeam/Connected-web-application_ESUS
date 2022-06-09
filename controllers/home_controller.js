const Post = require('../models/post');

module.exports.home = function(req,res){

//Post.find({},function(err,post){
//});

//populate the user for each post
  Post.find({}).populate('user').exec(function(err,post){
    return res.render('home',{
        title: "Home",
        post: post
    });
  })
}

//module.exports.actionName = function(req,res){}