class User < ActiveRecord::Base
	self.has_many(:steps)
	self.has_many(:meals)
	self.has_many(:locations)
	self.has_secure_password

	def self.all_except(user)
  		where.not(id: user)
	end

end
