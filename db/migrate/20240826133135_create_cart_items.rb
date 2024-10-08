class CreateCartItems < ActiveRecord::Migration[7.1]
  def change
    create_table :cart_items do |t|
      t.references :customer, null: false, foreign_key: true
      t.references :product_variant, null: false, foreign_key: true
      t.integer :quantity

      t.timestamps
    end
  end
end
