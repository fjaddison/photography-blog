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

// https://git.generalassemb.ly/ga-wdi-exercises/express-passport-local-authentication/blob/solution/config/routes.js

// https://git.generalassemb.ly/ga-wdi-exercises/express-passport-local-authentication/blob/solution/controllers/users.js

// You can combine these into one file if that makes it easier. Replace the code in the router with the code referenced from the controller file.
