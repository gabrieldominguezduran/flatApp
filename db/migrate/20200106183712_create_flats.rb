class CreateFlats < ActiveRecord::Migration[6.0]
  def change
    create_table :flats do |t|
      t.string :city
      t.string :description
      t.string :price
      t.string :m2
      t.string :rooms
      t.string :bathrooms
      t.string :photo

      t.timestamps
    end
  end
end
