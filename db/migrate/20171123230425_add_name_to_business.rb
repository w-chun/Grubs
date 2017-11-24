class AddNameToBusiness < ActiveRecord::Migration[5.1]
  def change
    add_column :businesses, :name, :string, null: false
    add_index :businesses, :name
  end
end
