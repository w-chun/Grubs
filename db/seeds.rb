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
  zipcode: 94105, phone: "(415) 685-4860", url: "https://www.benusf.com", latitude: 37.7855144, longitude: -122.398951,
  img_url: "http://res.cloudinary.com/dih798zsl/image/upload/c_scale,w_100/v1511479405/benu_lvifbp.jpg")
