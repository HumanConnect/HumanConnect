class User < ActiveRecord::Base
	self.has_many(:runs)
	self.has_secure_password
end
