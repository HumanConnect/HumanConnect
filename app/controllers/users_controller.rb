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

		render(:show, {locals: {humanapi_data: humanapi_data, user: user}})
	end

	def update
		user= User.find_by(id: params[:id])
		user.update({
			fname: params["fname"], 
			lname: params["lname"], 
			email: params["email"]})
		user.save()
	end


	def all
		users = User.all_except(params[:id])
		users_json = users.to_json
		render json: users_json
	end

	def today
		user= User.find_by(id: params[:id].to_i)
		
		### steps ####--------------------------------

		steps = HTTParty.get("https://api.humanapi.co/v1/human/activities?access_token=#{user.accesstoken}")
		today_steps = steps.map do |a|
			## this is setup to check for yesterday right now
			if Date.parse(a["startTime"]).day == Time.now.day-1  
				a["steps"]
			else
			end
		end
		today_steps.delete_if {|x| x == nil}
		today_total = today_steps.inject {|sum, n| sum + n}
		today_steps_json = today_total.to_json

		### locations ####--------------------------------

		locations = HTTParty.get("https://api.humanapi.co/v1/human/locations?access_token=#{user.accesstoken}")
		today_locations = locations.map do |a|
			## this is setup to check for yesterday right now
			if Date.parse(a["startTime"]).day == Time.now.day-1  
				a
			else
			end
		end 
		today_locations.delete_if {|x| x == nil}
		today_locations_total = today_locations.length
		today_locations_json = today_locations_total.to_json


		render json: {today_steps: today_steps_json, today_locations: today_locations_json}

	end


	

	# def index
	# 	render(:index)
	# end

	# def create
 #        new_user = User.create({email: params["email"], password: params["password"]})
 #    end
end
