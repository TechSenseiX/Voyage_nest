const sampleListings =[
  {
    title: "Luxurious Beachfront Villa",
    description: "A stunning beachfront villa with breathtaking ocean views, private pool, and modern amenities. Perfect for a relaxing getaway.",
    image:{
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1582719478397-0c1a4a8f49ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJlYWNoZnJvbnR8ZW58MHx8fHwxNjI2NzU5NDEy&ixlib=rb-1.2.1&q=80&w=1080",
    },
    price: 1200,
    location: "Malibu",
    country: "USA"
  },
  {
    title: "Cozy Mountain Cabin",
    description: "A charming cabin nestled in the mountains. Enjoy the beautiful scenery, hiking trails, and a warm fireplace.",
    image:{
      filename:"listingimage",
      url: "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNhYmlufGVufDB8fHx8MTYyNjc1OTQxMw&ixlib=rb-1.2.1&q=80&w=1080",
    },
    price: 250,
    location: "Aspen",
    country: "USA"
  },
  {
    title: "Modern City Apartment",
    description: "A sleek and modern apartment located in the heart of the city. Close to all major attractions and public transport.",
    image:{
      filename:"listingimage",
      url: "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGFwYXJ0bWVudHxlbnwwfHx8fDE2MjY3NTk0MTQ&ixlib=rb-1.2.1&q=80&w=1080",
    },
    price: 450,
    location: "New York",
    country: "USA"
  },
  {
    title: "Rustic Country House",
    description: "Experience the tranquility of the countryside in this rustic house. Perfect for nature lovers and those seeking peace and quiet.",
    image:{
      filename:"listingimage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNvdW50cnl8ZW58MHx8fHwxNjI2NzU5NDE1&ixlib=rb-1.2.1&q=80&w=1080",
    },
    price: 300,
    location: "Tuscany",
    country: "Italy"
  },
  {
    title: "Chic Downtown Loft",
    description: "A stylish loft located downtown, featuring contemporary design, high ceilings, and easy access to shopping and dining.",
    image:{
      filename:"listingimage",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGxvZnR8ZW58MHx8fHwxNjI2NzU5NDE3&ixlib=rb-1.2.1&q=80&w=1080",
    },
    price: 600,
    location: "Los Angeles",
    country: "USA"
  },
  {
    title: "Quaint Lakeside Cottage",
    description: "A quaint cottage by the lake, perfect for a peaceful retreat. Enjoy fishing, boating, and stunning sunsets.",
    image:{
      filename:"listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGxha2V8ZW58MHx8fHwxNjI2NzU5NDE4&ixlib=rb-1.2.1&q=80&w=1080",
    },
    price: 200,
    location: "Lake Tahoe",
    country: "USA"
  },
  {
    title: "Elegant Historic Home",
    description: "An elegant home with historic charm. Features antique furnishings, beautiful gardens, and a rich history.",
    image:{
      filename:"listingimage",
      url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhlcml0YWdlfGVufDB8fHx8MTYyNjc1OTQxOQ&ixlib=rb-1.2.1&q=80&w=1080",
    },
    price: 900,
    location: "Charleston",
    country: "USA"
  },
  {
    title: "Beachside Bungalow",
    description: "A cozy bungalow just steps from the beach. Enjoy the ocean breeze and beautiful sunsets.",
    image:{
      filename:"listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJ1bmdhbG93fGVufDB8fHx8MTYyNjc1OTQyMQ&ixlib=rb-1.2.1&q=80&w=1080",
    },
    price: 350,
    location: "Maui",
    country: "USA"
  },
  {
    title: "Luxurious Ski Chalet",
    description: "A luxurious chalet in the mountains, perfect for a ski vacation. Features a hot tub, fireplace, and stunning views.",
    image:{
      filename:"listingimage",
      url: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNoYWxldHx8fHx8MTYyNjc1OTQyMg&ixlib=rb-1.2.1&q=80&w=1080",
    },
    price: 1500,
    location: "Aspen",
    country: "USA"
  },
  {
    title: "Modern Suburban Home",
    description: "A modern home in a quiet suburban neighborhood. Features a spacious backyard, modern amenities, and close to parks.",
    image:{
      filename:"listingimage",
      url: "https://images.unsplash.com/photo-1560185008-5cdbf9ab04a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHN1YnVyYmFufGVufDB8fHx8MTYyNjc1OTQyMw&ixlib=rb-1.2.1&q=80&w=1080",
    },
    price: 400,
    location: "San Francisco",
    country: "USA"
  }
];
module.exports = { data: sampleListings };
