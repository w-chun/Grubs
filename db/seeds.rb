# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo = User.create(username: "demo", email: "demo_user@gmail.com", password: "password",
  img_url: "http://res.cloudinary.com/dih798zsl/image/upload/c_scale,w_50/v1511461159/765-default-avatar_zsj3xt.png")

Business.destroy_all

business1 = Business.create(name: "Benu", address: "22 Hawthone St", city: "San Francisco", state: "CA",
  zipcode: 94105, phone: "(415) 685-4860", url: "benusf.com", latitude: 37.7855144, longitude: -122.398951,
  img_url: "http://res.cloudinary.com/dih798zsl/image/upload/c_scale,w_100/v1511479405/benu_lvifbp.jpg")
business2 = Business.create(name: "KUSAKABE", address: "584 Washington St", city: "San Francisco", state: "CA",
  zipcode: 94111, phone: "(415) 757-0155", url: "kusakabe-sf.com", latitude: 37.795669, longitude: -122.402900,
  img_url: "http://res.cloudinary.com/dih798zsl/image/upload/c_scale,w_100/v1511558624/kusakabe_fernzd.jpg")
business3 = Business.create(name: "Little Lucca Specialty Sandwich Shop", address: "724 El Camino Real", city: "South San Francisco", state: "CA",
  zipcode: 94080, phone: "(650) 589-8916", url: "littlelucca.com", latitude: 37.650842, longitude: -122.430669,
  img_url: "http://res.cloudinary.com/dih798zsl/image/upload/c_scale,h_100,w_100/v1511588575/little_lucca_ntwrcc.jpg")
business4 = Business.create(name: "Bun Bo Hue An Nam", address: "740 Story Rd", city: "San Jose", state: "CA",
  zipcode: 95122, phone: "(408) 993-1755", url: "bunbohueannam.com", latitude: 37.328886, longitude: -121.858330,
  img_url: "http://res.cloudinary.com/dih798zsl/image/upload/c_scale,h_80,w_100/v1511588999/BBH_gduven.jpg")
business5 = Business.create(name: "Homeroom", address: "400 40th St", city: "Oakland", state: "CA",
  zipcode: 94609, phone: "(510) 597-0400", url: "homeroom510.com", latitude: 37.828514, longitude: -122.260099,
  img_url: "http://res.cloudinary.com/dih798zsl/image/upload/c_scale,h_80,w_100/v1511589283/homeroom_mnzwsp.jpg")
business6 = Business.create(name: "Southern Cafe", address: "2000 Macarthur Blvd", city: "Oakland", state: "CA",
  zipcode: 94602, phone: "(510) 336-2013", url: "southerncafe2000.com", latitude: 37.801014, longitude: -122.218403,
  img_url: "http://res.cloudinary.com/dih798zsl/image/upload/c_scale,w_100/v1511589685/southern_xwrlym.jpg")
business7 = Business.create(name: "The Boiling Crab", address: "1631 E Capitol Expy", city: "San Jose", state: "CA",
  zipcode: 95121, phone: "(408) 532-6147", url: "theboilingcrab.com", latitude: 37.306420, longitude: -121.812422,
  img_url: "http://res.cloudinary.com/dih798zsl/image/upload/c_scale,h_80,w_100/v1511589992/boiling_crab_jguxpj.jpg")
business8 = Business.create(name: "Yummy Yummy", address: "1015 Irving St", city: "San Francisco", state: "CA",
  zipcode: 94122, phone: "(415) 566-4722", url: "yummyyummyrestaurant.net", latitude: 37.763808, longitude: -122.468835,
  img_url: "http://res.cloudinary.com/dih798zsl/image/upload/c_scale,h_80,w_100/v1511590566/Yummy_iqo9gb.jpg")
business9 = Business.create(name: "Ben Tre Vietnamese Homestyle Cuisine", address: "398 Grand Ave", city: "South San Francisco", state: "CA",
  zipcode: 94080, phone: "(650) 952-2243", url: "bentrerestaurant.com", latitude: 37.655921, longitude: -122.412283,
  img_url: "http://res.cloudinary.com/dih798zsl/image/upload/c_scale,h_80,w_100/v1511591578/bentre_ra6qux.jpg")
business10 = Business.create(name: "Hog Island Oyster Co", address: "1 Ferry Bldg", city: "San Francisco", state: "CA",
  zipcode: 94111, phone: "(415) 391-7117", url: "hogislandoysters.com", latitude: 37.795396, longitude: -122.393752,
  img_url: "http://res.cloudinary.com/dih798zsl/image/upload/c_scale,h_80,w_100/v1511591557/hogisland_wg9wxr.jpg")
