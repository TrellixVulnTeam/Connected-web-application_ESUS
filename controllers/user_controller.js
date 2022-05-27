module.exports.profile = function(req,res){
    res.end('<h1>user profile</h1>');
}

//render the sign up page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title: "Connected | Sign Up"
    })
}

//render the sign in page
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title: "Connected | Sign In"
    })
}