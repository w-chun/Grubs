# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  body        :text             not null
#  rating      :integer          not null
#  author_id   :integer          not null
#  business_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ApplicationRecord
  validates :body, presence: true

  belongs_to :user
  belongs_to :business
end
