json.extract! business, :id, :name, :address, :city, :state, :zipcode, :phone, :url, :img_url, :latitude, :longitude
json.review_ids business.reviews.map(&:id)
