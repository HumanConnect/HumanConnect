class FollowsController < ApplicationController

	def create
		if (Follow.where("from_user_id = ? AND to_user_id = ?", params['id'].to_i, params['id2'].to_i)).exists?
			render json: {status: "error"}
		else
			Follow.create({from_user_id: params['id'].to_i, to_user_id:params['id2'].to_i, requested: true})
			render json: {status: "success"}
		end
	end

end