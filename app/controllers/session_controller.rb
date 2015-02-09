class SessionController < ApplicationController

	def new
		render(:new)
	end


	def create
		user = User.find_by({email: params["email"]})
		if user && user.authenticate(params["password"])
			@error = false
			session["user_id"] = user.id
			redirect_to "/users/#{user.id}"
		else
			@error = true
			render(:new)
		end
	end

	def destroy
		reset_session
		redirect_to '/'
	end
end






# class SessionsController < ApplicationController

# 	def create
# 		user = User.find_by({username: params["username"]})
# 		if user && user.authenticate(params["password"])
# 			@error = false
# 			session["user_id"] = user.id
# 			redirect_to "/secret"
# 		else
# 			@error = true
# 			render "welcome/index"
# 		end
# 	end
# end