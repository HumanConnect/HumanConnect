class UsersController < ApplicationController
	def create
		new_user = User.create({email: params["email"], password: params["password"]})
	end

	def index
		render(:index)
	end

	def create
        new_user = User.create({email: params["email"], password: params["password"]})
    end
end