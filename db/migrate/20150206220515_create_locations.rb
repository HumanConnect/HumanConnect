class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
    	t.datetime :starttime
		t.datetime :endtime
		t.string :name
		t.string :type
		t.decimal :latitude
		t.decimal :longitude

		t.timestamps null: false
    end
  end
end
