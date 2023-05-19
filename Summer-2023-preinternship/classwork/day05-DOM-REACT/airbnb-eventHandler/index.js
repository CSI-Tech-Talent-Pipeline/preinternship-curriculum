
//1. find the element we care about handling the events on 
const toggle = document.querySelector("#toggle-dark-mode")


//2. add an event listener with the event type and callback function 
toggle.addEventListener("click", () => {
  //3. in the call back, tell JS we want it to happen
  //document.body.setAttribute("class", "dark-mode")
  //document.body.classList.add("dark-mode")
  //document.body.classList.remove("dark-mode")
  document.body.classList.toggle("dark-mode")
})




// ********  submit  *********

//1. get the form element 
const form = document.querySelector("#listing-form")


// 2. add event listener 
form.addEventListener("submit", (event) => {
  event.preventDefault()

  // 3. in the callback, get data from the form 
  const titleValue = event.target.title.value
  const imageValue = event.target.imageUrl.value
  const locationValue = event.target.location.value
  const priceValue = event.target.price.value

  const listingObj = {
    title: titleValue,
    imageUrl: imageValue,
    location: locationValue,
    price: priceValue
  }
  console.log(listingObj)
  // 4. slap them on the dom 
  renderOneListing(listingObj)

} )


// alpaca: https://i.imgur.com/ni0lfIL.jpg

//TODO: create cards for each object in this array
const listingsArray = [
    {
      imageUrl: "https://i.imgur.com/tTvtzhG.jpg",
      location: "Upscale Lair in Quiet Neighborhood",
      price: 400,
      title: "Cozy branch for red pandas like you",
      rating: 4.23
    },
    {
      imageUrl: "https://i.imgur.com/wUmpniV.jpg",
      location: "Historic Castle in 'Cool' Uptown District",
      price: 200,
      title: "Hard rock for Rockhopper Penguin",
      rating: 2.71
    },
    {
      imageUrl: "https://i.imgur.com/uBJ8imS.jpg",
      location: "Student-Friendly uptown Abode",
      price: 123,
      title: "Top of the tree for Red Uakari Monkey",
      rating: 3.46
    }
  ]



// DOM Elements
const listingsSection = document.querySelector("#listings")

// Render Helpers
function renderOneListing(listingObj) {
  const outerCard = document.createElement("div")
  outerCard.classList.add("card")

  outerCard.innerHTML = `
    <div class="card">
      <div class="image">
        <img src="${listingObj.imageUrl}" alt="${listingObj.title}"/>
        <button class="favorite">
          <span>🔥</span>
        </button>
      </div>
      <div class="details">
        <p class="info">
          <span>${listingObj.location}</span>
          <span class="rating">★ ${listingObj.rating}</span>
        </p>
        <h4 class="title">${listingObj.title}</h4>
        <div class="price">
          <strong>$${listingObj.price}</strong> / night
        </div>
      </div>
    </div>
  `
  listingsSection.append(outerCard)
}

function renderAllListings(listings) {
  listings.forEach(function (listingObj) {
    renderOneListing(listingObj)
  })
}

// Initial Render
renderAllListings(listingsArray)