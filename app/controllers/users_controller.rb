class UsersController < ApplicationController
	def index
		render(:index)
	end

	def test

		##formatting the sessionTokenObject to send to Human API
		sessionTokenObject = params['sessionTokenObject']
		sessionTokenObject['clientSecret'] = params['client_secret']
		sessionTokenObject.delete('userId')

		result = HTTParty.post('https://user.humanapi.co/v1/connect/tokens', {
			:body => sessionTokenObject.to_json, 
			:headers => {'Content-Type' => 'application/json', 'Accept' => 'application/json'}
			})

		test_data = HTTParty.get("https://api.humanapi.co/v1/human/activities?accesstoken=#{result['accessToken']}")
	
			
		

	end

end








# @result = HTTParty.post(@urlstring_to_post.to_str, 
#     :body => { :subject => 'This is the screen name', 
#                :issue_type => 'Application Problem', 
#                :status => 'Open', 
#                :priority => 'Normal', 
#                :description => 'This is the description for the problem'
#              }.to_json,
#     :headers => { 'Content-Type' => 'application/json' } )
