class ApisController < ApplicationController

	def query
		##formatting the sessionTokenObject to send to Human API
		sessionTokenObject = params['sessionTokenObject']
		sessionTokenObject['clientSecret'] = params['client_secret']
		sessionTokenObject.delete('userId')

		result = HTTParty.post('https://user.humanapi.co/v1/connect/tokens', {
			:body => sessionTokenObject.to_json, 
			:headers => {'Content-Type' => 'application/json', 'Accept' => 'application/json'}
			})

		@@result = result

		test_data = HTTParty.get("https://api.humanapi.co/v1/human/activities?access_token=#{result['accessToken']}")
		redirect_to '/'

		# test_data = @@test_data.to_json
	end

	def show
		
		# result = @@result

		accessToken = "xI16RnEj9nUaxBzg6OWbMXQTT1M=XgMtpD5V9f0e009a1fd5baac8d1d179bdf12ff60eee736f90f08645ff37f63bb3600f239f16795df500833417f6352da12b0ea9a23564932080965869110605afd0750036ac7cbeaa48d1caa53960e163147329908927665cd75415acf7f22c67057c80706a72c34e30a3e2c38e2d04e9bbea7f2"

		test_data = HTTParty.get("https://api.humanapi.co/v1/human/activities?access_token=#{accessToken}")
		test_data2 = test_data.to_json

		render json: test_data2
		

		# render(:show, {locals: {test_data: test_data}})
	end

end


# user = 999999999999

# {
#     "accessToken" => "xI16RnEj9nUaxBzg6OWbMXQTT1M=XgMtpD5V9f0e009a1fd5baac8d1d179bdf12ff60eee736f90f08645ff37f63bb3600f239f16795df500833417f6352da12b0ea9a23564932080965869110605afd0750036ac7cbeaa48d1caa53960e163147329908927665cd75415acf7f22c67057c80706a72c34e30a3e2c38e2d04e9bbea7f2",
#        "clientId" => "985312a42cd462eb4f6b6a573730924a8deaead6",
#     "publicToken" => "9fee6499b4d627b51e40b846864ed4bf",
#         "humanId" => "627b7547254ac2100690f2c00e3cb169"
# }



