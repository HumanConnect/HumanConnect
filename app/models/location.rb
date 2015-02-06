class Location < ActiveRecord::Base
	self.belongs_to(:user)
end
