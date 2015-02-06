class WelcomeController < ApplicationController

	def index

	end

	def incorrect_login
		if session["user_id"]
			render :incorrect_login
		else
			@error = true
			render "welcome/index"
		end
	end

	def main
		render(:main)
	end
end