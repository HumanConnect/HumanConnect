class Step < ActiveRecord::Base
	self.belongs_to(:user)
end
