class CreateImages < ActiveRecord::Migration[5.1]
  def change
    create_table :images do |t|
      t.string :img_url, null: false
      t.integer :business_id, null: false

      t.timestamps
    end
    add_index :images, :business_id
  end
end
