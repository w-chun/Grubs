json.partial! "api/businesses/business", business: @business
json.reviews do
  if @business.reviews
    @business.reviews.each do |review|
      json.set! review.id do
        json.extract! review, :body, :rating, :author_id, :business_id
      end
    end
  end
end
json.images do
  if @business.images
    @business.images.each do |image|
      json.set! image.id do
        json.extract! image, :img_url, :business_id
      end
    end
  end
end
