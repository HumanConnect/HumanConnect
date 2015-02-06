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
		user= User.find_by(id: params[:id])

		humanapi_data = [
			{publicToken: user.publictoken},
			{accessToken: user.accesstoken},
			{user_id: params[:id]},
			{clientId: "985312a42cd462eb4f6b6a573730924a8deaead6"},
			{client_secret: "5b7393828121ee2a723be272f59a10d12d1f9d84"},
			{email: user.email}]

		render(:show, {locals: {humanapi_data: humanapi_data}})
	end

	

	# def index
	# 	render(:index)
	# end

	# def create
 #        new_user = User.create({email: params["email"], password: params["password"]})
 #    end
end
