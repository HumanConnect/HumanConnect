class ApisController < ApplicationController

	def query
		##formatting the sessionTokenObject to send to Human API, and also grabbing the user_id to use for CRUD
		sessionTokenObject = params['sessionTokenObject']
		sessionTokenObject['clientSecret'] = params['client_secret']
		sessionTokenObject.delete('userId')
		user_id = params['user_id'].to_i
		

		## result gives you accessToken, ClientId, publicToken, and humanId

		result = HTTParty.post('https://user.humanapi.co/v1/connect/tokens', {
			:body => sessionTokenObject.to_json, 
			:headers => {'Content-Type' => 'application/json', 'Accept' => 'application/json'}
			})
		binding.pry
		## find user by params id from the client, then save the access token, public token, and humanId to the profile
		
		users = User.find_by(id: user_id)
		users.update({accesstoken: result['accessToken'], publictoken: result['publicToken'], human_id: result['humanId']})
		users.save()
		
	end

	def step
		user = User.find_by(id: params[:id].to_i)
		result = HTTParty.get("https://api.humanapi.co/v1/human/activities?access_token=#{user.accesstoken}")
		result_json = result.to_json
		render json: result_json

	end

	def location
		user = User.find_by(id: params[:id].to_i)
		result = HTTParty.get("https://api.humanapi.co/v1/human/locations?access_token=#{user.accesstoken}")
		result_json = result.to_json
		render json: result_json

	end

	def meal

        user = User.find_by(id: params[:id].to_i)
        
        result = HTTParty.get("https://api.humanapi.co/v1/human/food/meals?access_token=demo")
        
        result_json = result.to_json

        render json: result_json

    end

  

end






