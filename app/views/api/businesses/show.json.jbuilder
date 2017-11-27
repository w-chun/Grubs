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
