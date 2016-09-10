class CreateVendors < ActiveRecord::Migration[5.0]
  def change
    create_table :vendors do |t|
    	t.string :name
    	t.string :address
    	t.text 	 :notes
    	t.string :contact_name
    	t.string :contact_phone
    	t.string :contact_email

      t.timestamps
    end
  end
end
