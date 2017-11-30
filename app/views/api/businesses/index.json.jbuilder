@businesses.each do |business|
  json.set! business.id do
    json.partial! "api/businesses/business", business: business
    json.set! :type, 'business'
  end
end
