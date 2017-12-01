json.extract! image, :id, :img_url, :business_id
json.set! "business" do
  json.partial! '/api/businesses/business', business: image.business
end
