class CreateRuns < ActiveRecord::Migration
  def change
    create_table :runs do |t|
    	t.integer :user_id
    	t.datetime :start_time
    	t.datetime :end_time
    	t.string :movement

      t.timestamps null: false
    end
  end
end
