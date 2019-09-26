'use strict'
const {validate} = use('Validator')
const Hash = use('Hash')
const User = use('App/Models/User')

class AuthController {
  async register({response, request, view}) {
    return view.render('auth/register') //referring the 'view/auth/register' path
  }

  async storeUser({request, session, response, auth}) {

    //Validation rules
    const validation = await validate(request.all(), {
      email: 'required|email|unique:users,email',
      password: 'required|min:6|max:40',
      confirm_password: 'required'
    })

    //checks if passwords match
    if (request.input('password') == request.input('confirm_password')) {

      //checks if it fails validation
      if (validation.fails()) {
        session.withErrors(validation.messages()).flashExcept(['password'])

        return response.redirect('back')
      } else {
        //save user to database
        try {
          let newUser = await User.create({email: request.input('email'), password: request.input('password')})
        } catch (error) {
          //show errors if there's an issue with the database
          console.log('error')
          session.withErrors([
            {
              field: 'database',
              message: 'Problem with database - try later'
            }
          ]).flashExcept(['password'])

          return 'Problems with database'
        }
        session.flash({notification: 'Welcome to Talk'})
        return response.redirect('/')
      }
    } else {
      //show errors if there's an issue with password matching
      session.withErrors([
        {
          field: 'password',
          message: 'Need to confirm password'
        }, {
          field: 'confirm_password',
          message: 'Need to confirm password'
        }
      ]).flashExcept(['password'])

      return response.redirect('back')
      return `Passwords don't match`
    }
  }

  async login({response, request, view}) {
    return view.render('auth/login')
  }

  async loginUser({response, request, view, auth, session}) {
    //captures data from form
    const postData = request.post()

    //finds user in the database, via their email
    const user = await User.query().where('email', postData.email).first()
    if (user) {
      //verify password
      const passwordVerified = await Hash.verify(postData.password, user.password)

      if (passwordVerified) {
        //LOGIN user
        await auth.login(user)
        session.flash({notification: 'Welcome to Talk'})
        return response.redirect('/')
      } else {
        //password is incorrect
        session.withErrors([
          {
            field: 'password',
            message: `Incorrect password`
          }
        ]).flashExcept(['password'])

        return response.redirect('back')
      }
    } else {
      // can't find user with that email
      session.withErrors([
        {
          field: 'email',
          message: `Can't find user with that email`
        }
      ]).flashExcept(['password'])

      return response.redirect('back')
    }

    // return request.post()
  }

  async forgotPassword({response, request, view}) {
    return view.render('auth/forgotPassword')
  }

  async logout({response, request, view, auth}) {
    try {
      await auth.logout()
      return response.redirect('/')
    } catch (error) {
      console.log(error)
      return 'Error: could not logout'
    }

  }
}

module.exports = AuthController
