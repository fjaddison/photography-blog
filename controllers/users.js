var passport = require("passport")

function getSignup(request, response, next) {
    response.render("signup.hbs", { message: request.flash("signupMessage") });
}

function postSignup(request, response, next) {
    var signupStrategy = passport.authenticate("local-signup", {
      successRedirect: "/",
      failureRedirect: "/signup",
      failureFlash: true
    });
  
    return signupStrategy(request, response, next);
}

