json.extract! business, :id, :name, :address, :city, :state, :zipcode, :img_url
json.review_ids business.reviews.map(&:id)
