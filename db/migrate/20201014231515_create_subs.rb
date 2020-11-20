class CreateSubs < ActiveRecord::Migration[5.2]
  def change
    create_table :subs do |t|
      t.string :sub_title
      t.text :sub_description
      
      t.timestamps
    end
  end
end
