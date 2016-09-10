class Vendor < ApplicationRecord
	has_many :expenses
	has_many :proposals
end
