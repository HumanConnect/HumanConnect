class UsersController < ApplicationController
	def new
		render(:new)
	end

	def create
		new_user = User.create({
			fname: params["fname"], 
			lname: params["lname"], 
			email: params["email"], 
			password: params["password"]})
		redirect_to "/"
	end

	def show
		render(:show)
	end

	# def index
	# 	render(:index)
	# end

	# def create
 #        new_user = User.create({email: params["email"], password: params["password"]})
 #    end
end
