class CreateMeals < ActiveRecord::Migration
  def change
    create_table :meals do |t|
    	t.datetime :time
    	t.string :type
    	t.string :name
    	t.integer :calories

    	t.timestamps null: false
    end
  end
end
