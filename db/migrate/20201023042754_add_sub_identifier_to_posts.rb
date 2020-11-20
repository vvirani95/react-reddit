class AddSubIdentifierToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :sub_identifier, :string
  end
end
