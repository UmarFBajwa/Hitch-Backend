class CreateExpenses < ActiveRecord::Migration[5.0]
  def change
    create_table :expenses do |t|
    	t.string :name
    	t.integer :price_in_pennies
    	t.integer :quantity
    	t.references :vendor

      t.timestamps
    end
  end
end
