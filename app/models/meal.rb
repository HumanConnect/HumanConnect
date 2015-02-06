class Meal < ActiveRecord::Base
	self.belongs_to(:user)
end
