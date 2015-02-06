class Follows < ActiveRecord::Migration
	def change
		create_table :follows do |t|
			t.integer :from_user_id
			t.integer :to_user_id
			t.boolean :requested
			t.boolean :accepted

			t.timestamps null: false
		end
	end
end
