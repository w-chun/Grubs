# == Schema Information
#
# Table name: businesses
#
#  id         :integer          not null, primary key
#  address    :string           not null
#  city       :string           not null
#  state      :string           not null
#  zipcode    :integer          not null
#  phone      :string
#  url        :string           not null
#  img_url    :string           not null
#  latitude   :float
#  longitude  :float
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :string           not null
#

require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
