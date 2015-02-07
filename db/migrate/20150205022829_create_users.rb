class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
    	t.string :fname
    	t.string :lname
    	t.string :email
    	t.string :password_digest
    	t.string :human_id
      t.timestamps null: false
    end
  end
end
