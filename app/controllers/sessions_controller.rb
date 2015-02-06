class SessionsController < ApplicationController

	def create
		user = User.find_by({email: params["email"]})
		if user && user.authenticate(params["password"])
			@error = false
			session["user_id"] = user.user_id
			redirect_to "/welcome/main"
		else
			@error = true
			render "welcome/index"
		end
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