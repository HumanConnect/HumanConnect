class FollowsController < ApplicationController

	def create
		if (Follow.where("from_user_id = ? AND to_user_id = ?", params['id'].to_i, params['id2'].to_i)).exists?
			render json: {status: "error"}
		else
			Follow.create({from_user_id: params['id'].to_i, to_user_id:params['id2'].to_i, requested: true})
			render json: {status: "success"}
		end
	end

	def show
		follows = Follow.where("to_user_id = ? AND accepted IS ? ", params['id'].to_i, nil)
		requests_from_ids = follows.map {|follow| follow.from_user_id}
		user_array = []
			User.all.each do |user|
				requests_from_ids.each do |id|
					if user.id == id
						user_array.push(user)
					end
				end
			end

		render json: {count: follows.length, follow_array: user_array}
	end

	def update
		follow = Follow.find_by("to_user_id = ? AND from_user_id = ? ", params['id'].to_i, params['from_user'].to_i)
		
		if params['response'] == "Yes"
			follow.update(accepted: true)
			follow.save()
		elsif params['response'] == "No"
			follow.update(accepted: false)
			follow.save()
		end

		render json: {params: params}

	end


end