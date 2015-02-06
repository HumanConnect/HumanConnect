class CreateSteps < ActiveRecord::Migration
  def change
    create_table :steps do |t|
    	t.datetime :starttime
		t.datetime :endtime
		t.integer :duration
		t.integer :steps

		t.timestamps null: false
    end
  end
end
