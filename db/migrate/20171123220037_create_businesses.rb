class CreateBusinesses < ActiveRecord::Migration[5.1]
  def change
    create_table :businesses do |t|
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zipcode, null: false
      t.string :phone
      t.string :url, null: false
      t.string :img_url, null: false
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
    add_index :businesses, :address
    add_index :businesses, :city
    add_index :businesses, :state
    add_index :businesses, :zipcode
  end
end
