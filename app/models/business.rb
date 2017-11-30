# == Schema Information
#
# Table name: businesses
#
#  id         :integer          not null, primary key
#  name       :string           not null
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
#

class Business < ApplicationRecord
  validates :name, :address, :city, :state, :zipcode, :url, :img_url, presence: true

  has_many :reviews
  has_many :images

  def self.search_results(query_params)
    param = '%' + query_params.downcase + '%'
    Business.where('lower(city) LIKE ?', param)
  end
end
