# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create(username: "Wilson", email: "wilson@gmail.com", password: "password",
  img_url: "http://res.cloudinary.com/dih798zsl/image/upload/c_scale,h_50,w_50/v1511930352/Wilson_Chun_1_rrpcpz.jpg" )
user2 = User.create(username: "Kobe", email: "kobe@gmail.com", password: "password",
  img_url: "http://res.cloudinary.com/dih798zsl/image/upload/c_scale,h_50,w_50/v1511930527/i_trvnfq.png" )
user3 = User.create(username: "Nick", email: "nick@gmail.com", password: "password",
  img_url: "http://res.cloudinary.com/dih798zsl/image/upload/c_scale,h_50,w_50/v1511930649/bng-l-warriors-0923-112_xp6ct2.jpg" )
user4 = User.create(username: "DLO", email: "dlo@gmail.com", password: "password",
  img_url: "http://res.cloudinary.com/dih798zsl/image/upload/c_scale,h_50,w_50/v1511930748/i_1_tfo4dc.png" )
user5 = User.create(username: "Steph", email: "steph@gmail.com", password: "password",
  img_url: "http://res.cloudinary.com/dih798zsl/image/upload/c_scale,h_50,w_50/v1511930850/338365.vresize.350.425.medium.83_q5ktup.png" )
user6 = User.create(username: "Klay", email: "klay@gmail.com", password: "password",
  img_url: "http://res.cloudinary.com/dih798zsl/image/upload/c_scale,h_50,w_50/v1511931176/i_1_lvquap.png" )
user7 = User.create(username: "KD", email: "kd@gmail.com", password: "password",
  img_url: "http://res.cloudinary.com/dih798zsl/image/upload/c_scale,h_50,w_50/v1511931273/i_2_wjj1go.png" )
user8 = User.create(username: "Lonzo", email: "zo@gmail.com", password: "password",
  img_url: "http://res.cloudinary.com/dih798zsl/image/upload/c_scale,h_50,w_50/v1511931330/i_t8w1ld.png" )


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
business6 = Business.create(name: "Shandong Restaurant", address: "328 10th St", city: "Oakland", state: "CA",
  zipcode: 94607, phone: "(510) 839-2299", url: "shandongoakland.com", latitude: 37.800693, longitude: -122.269928,
  img_url: "http://res.cloudinary.com/dih798zsl/image/upload/c_scale,h_80,w_100/v1512111784/shan-1_pqplxr.jpg")
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

Review.destroy_all

author_ids = (User.first.id..User.last.id).to_a
business_ids = (Business.first.id..Business.last.id).to_a

300.times do
  random = rand(1..10)
  case random
  when 1 || 5
    rating = 1
    body = "Super long wait for a table. Service was horrible and the food was cold."
  when 2 || 6
    rating = 2
    body = "This place is really dirty, but the food didn't taste that bad."
  when 3 || 7
    rating = 3
    body = "Food was decent. Service was alright. Could be better."
  when 4 || 8
    rating = 4
    body = "Everything was solid. Would come back here again."
  else
    rating = 5
    body = "This place was amazing! Definitely enjoyed everything from the food to the service! Must try!!"
  end
  Review.create(
    author_id: author_ids.sample,
    business_id: business_ids.sample,
    rating: rating,
    body: body,
  )
end

demo = User.create(username: "demo", email: "demo_user@gmail.com", password: "password",
  img_url: "http://res.cloudinary.com/dih798zsl/image/upload/c_scale,w_50/v1511461159/765-default-avatar_zsj3xt.png")

Image.destroy_all

image1 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512078654/benu-1_ebeumz.jpg', business_id: business1.id)
image2 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512078654/benu_2_t7l61a.jpg', business_id: business1.id)
image3 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512078654/benu3_tlr0iq.jpg', business_id: business1.id)
image4 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512111305/kusakabe-3_moyu5u.jpg', business_id: business2.id)
image5 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512111306/kusakabe_nvyudq.jpg', business_id: business2.id)
image6 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512111305/kusakabe-2_talrq5.jpg', business_id: business2.id)
image7 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512111305/little-3_tj0dwz.jpg', business_id: business3.id)
image8 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512111314/little-1_ohnui1.jpg', business_id: business3.id)
image9 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512111314/little-2_jlnfye.jpg', business_id: business3.id)
image10 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512111304/bbh1_olyk9n.jpg', business_id: business4.id)
image11 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512111306/bbh-3_phqezq.jpg', business_id: business4.id)
image12 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512111304/bbh-2_ymuzcc.jpg', business_id: business4.id)
image13 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512111305/homeroom_f4ot9w.jpg', business_id: business5.id)
image14 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512111304/homeroom-3_chb6yr.jpg', business_id: business5.id)
image15 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512111304/homeroom-2_wvrmju.jpg', business_id: business5.id)
image16 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512111784/shan-2_tupltg.jpg', business_id: business6.id)
image17 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512111784/shan-3_qd34ek.jpg', business_id: business6.id)
image18 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512111784/shan-4_xj3grh.jpg', business_id: business6.id)
image19 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512112912/bc_eu7rwy.jpg', business_id: business7.id)
image20 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512112913/bc-2_zdzoa9.jpg', business_id: business7.id)
image21 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512112912/bc-3_mngypt.jpg', business_id: business7.id)
image22 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1511590566/Yummy_iqo9gb.jpg', business_id: business8.id)
image23 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512112911/yum_mdllgx.jpg', business_id: business8.id)
image24 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512112910/yum-3_brbcgr.jpg', business_id: business8.id)
image25 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512112910/ben-2_c7qlas.jpg', business_id: business9.id)
image26 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512112911/ben_fbxnbt.jpg', business_id: business9.id)
image27 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512112910/ben-3_mqeivm.jpg', business_id: business9.id)
image28 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512112911/hog_dik8hf.jpg', business_id: business10.id)
image29 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512112911/hog-2_cb9lb9.jpg', business_id: business10.id)
image30 = Image.create(img_url:'http://res.cloudinary.com/dih798zsl/image/upload/v1512112912/hog-3_ie8joh.jpg', business_id: business10.id)
