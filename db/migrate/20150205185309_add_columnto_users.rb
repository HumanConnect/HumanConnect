class AddColumntoUsers < ActiveRecord::Migration
	def change
		change_table :users do |t|
			t.string :accesstoken
			t.string :publictoken
			t.text 	:test
		end
	end
end