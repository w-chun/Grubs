@businesses.each do |business|
  json.set! business.id do
    json.set! :type, 'business'
    json.partial! 'api/business/business', business: business
  end
end
