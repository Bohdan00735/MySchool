const user = require('../models/User')


module.exports.login = function (request, response) {
    response.render('login', { title: 'Логін' })
}


module.exports.register = function (request, response) {
    response.render('register', { title: 'Розклад'})
}

module.exports.checkForUser = function (request, response) {
    let userLogin = request.body.username
    let password = request.body.password
    user.getUserByMail(userLogin,function (user, err) {
        if (true){
            request.session.loggedin = true;
            request.session.userId = 1;
            response.redirect("/student")

        }
        else {
            response.redirect('/');
        }
        response.end();
    })
}

