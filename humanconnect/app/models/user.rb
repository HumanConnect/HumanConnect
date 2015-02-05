class User < ActiveRecord::Base
	self.has_many(:runs)
end
