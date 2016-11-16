'use strict'

const User = use('App/Model/User')
const Validator = use('Validator')
const Hash = use('Hash')

class UserController {

    * register (request, response) {
        yield response.sendView('reg')
    }

    * doregister (request, response) {
        const regData = request.except('_csrf');
        // console.log(recipeData);
        // response.send(recipeData);

        const rules = {
            username: 'required|alpha_numeric|unique:users',
            email: 'required|email|unique:users',
            password: 'required|min:4',
            passwordconfirm: 'required|same:password'
        }

        const validation = yield Validator.validateAll(regData, rules);
        if (validation.fails()) {
            yield request
                    .withAll()
                    .andWith({ errors: validation.messages() })
                    .flash()
            response.redirect('back')
            return
        }

        const user = new User();

        user.username = regData.username;
        user.email = regData.email;
        user.password = yield Hash.make(regData.password);

        yield user.save()

        yield request.auth.login(user)

        response.redirect('back')
    }

    * login (request, response) {
        yield response.sendView('login')
    }

    * dologin (request, response) {
        const email = request.input('email')
        const password = request.input('password')

        try {
        const login = yield request.auth.attempt(email, password)

            if (login) {
                response.redirect('/')
                return
            }
        }
        catch (err) {
            yield request  
                .withAll()
                .andWith( { errors : [err] })
                .flash

            response.redirect('back')
            return
        }
    }
}

module.exports = UserController