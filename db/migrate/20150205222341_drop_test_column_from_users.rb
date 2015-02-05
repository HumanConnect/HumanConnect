class DropTestColumnFromUsers < ActiveRecord::Migration
  def up
  	remove_column :users, :test
  end
end
