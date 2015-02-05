class SessionController < ApplicationContoller

def create
	user = User.find_by({email: params["email"]})
	if user && user.authenticate(params["password"])
		@error = false
		session["user_id"] = user.user_id
		redirect_to "/incorrect_login"
	else
		@error = true
		render "welcome/index"
end
