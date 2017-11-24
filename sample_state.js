{
  entities: {
    businesses: {
      1: {
        id: 1,
        name: "Benu",
        address: "22 Hawthorne St",
        city: "San Francisco",
        state: "CA",
        zipcode: 94105,
        phone: "(415) 685-4860"
        latitude: 37.7855144
        longitude: -122.398951
        url: "https://www.benusf.com/"
        img_url: "http://res.cloudinary.com/dih798zsl/image/upload/c_scale,w_100/v1511479405/benu_lvifbp.jpg"

      },
      15: {
        id: 15,
        name: "KUSAKABE",
        address: "584 Washington St",
        city: "San Francisco",
        state: "CA",
        zipcode: 94111,
        url: "http://kusakabe-sf.com/"
      }
      ...
    },
    users: {
      3: {
        id: 3,
        username: "wchun",
        img_url: "http://freevector.co/wp-content/uploads/2012/07/59170-user-filled-person-shape.png"
      },
      24: {
        id: 24,
        username: "foodie_ray",
        img_url: "http://www.maynex.com/wp-content/uploads/2017/07/businessman_318-72886.jpg"
      },
      ...
    },
    reviews: {
      5: {
        id: 5,
        body: "One of the best restaurants in SF!",
        author_id: 3,
        business_id: 1
      },
      10: {
        id: 10,
        body: "It was such a good dining experience and execellent service",
        author_id: 15,
        business_id: 15
      }
      ...
    }
  },
  ui: {
    loading: true/false
  },
  errors: {
    login: ["Invalid Username or Password"],
    businessform: ["Business name cannot be blank"],
    reviewform: ["Body cannot be blank"]
  }
  session: {
    id: 8,
    username: "grub_master",
    img_url: "http://www.bryanqle.com/wp-content/uploads/2014/01/person-icon-145444.png"
  }
}
