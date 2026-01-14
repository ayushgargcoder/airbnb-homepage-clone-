const listingsData = [
  {
    title: "Beachfront Villa",
    location: "Goa, India",
    price: "₹9000 / night",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
  },
  {
    title: "Mountain Cabin",
    location: "Manali, India",
    price: "₹7000 / night",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0"
  },
  {
    title: "Luxury Apartment",
    location: "Mumbai, India",
    price: "₹11000 / night",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
  },
  {
    title: "Lake View Stay",
    location: "Udaipur, India",
    price: "₹20000 / per Day and Night",
    image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Riverside Stay",
    location: "Rishikesh, India",
    price: "₹5000 / night",
    image: "https://images.unsplash.com/photo-1712510817140-917938f92e5b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Houseboat",
    location: "Kerala, India",
    price: "₹9000 / per Day",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
   {
    title: "Tea Estate Stay",
    location: "Ooty, India",
    price: "₹15000 / per Day",
    image: "https://images.unsplash.com/photo-1707655315272-33a54a771068?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
   {
    title: "Mountain Homestay",
    location: "Leh Ladakh, India",
    price: "₹18000 / per Day",
    image: "https://images.unsplash.com/photo-1617824077360-7a77db40aae1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   }
];

const listings = document.getElementById("listings");

listingsData.forEach(item => {
  const card = document.createElement("div");  //isse element dal ta hai
  card.className = "card";

  card.innerHTML = ` 
    <img src="${item.image}" alt="${item.title}">
    <h3>${item.title}</h3>
    <p>${item.location}</p>
    <strong>${item.price}</strong>
  `;  // isse content dal ta hai sab ka

  listings.appendChild(card);  //isse page pe dikhai deta hai
});
