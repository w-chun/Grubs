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
  validates :user, uniqueness: {scope: :business}

  belongs_to :user,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :business
end
