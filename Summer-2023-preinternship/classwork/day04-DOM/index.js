// CRUD with the DOM

// Read
document.querySelector(".logo")

// Update
//debugger
const logo = document.querySelector(".logo")
logo.innerText = "AirBnB"
//console.log(logo)


// Delete
//logo.remove()

// const listingsSection = document.querySelector("#listings")
// listingsSection.innerHTML = ""


// Create
//1. find a place to add the new elements
const menu = document.querySelector("#menu")
console.log(menu)

//2. create the DOM Node
const subMenu = document.createElement("h4")
console.log(subMenu)


//3. define attributes on that node 
subMenu.textContent = "The Finest (Funniest) place on Earth "
subMenu.innerText = "Warm place"
console.log(subMenu)

//4. append to the parent Element
menu.append(subMenu)

////
const detail = document.querySelector(".details")
console.log(detail)

const textDetail = document.createElement("p")
console.log(textDetail)

textDetail.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
console.log(textDetail)

detail.append(textDetail)


// https://i.imgur.com/uBJ8imS.jpg
// https://i.imgur.com/R3tzgrt.jpg
// https://i.imgur.com/wUmpniV.jpg



// TODO: create cards for each object in this array
const data = [
    {
      imageUrl: "https://i.imgur.com/tTvtzhG.jpg",
      location: "Cozy branch for red panda",
      price: 400,
      title: "Upscale Lair in Quiet Neighborhood",
      rating: 4.23
    },
    {
      imageUrl: "https://i.imgur.com/wUmpniV.jpg",
      location: "Hard rock for Rockhopper Penguin",
      price: 200,
      title: "Historic Castle in 'Cool' Uptown District",
      rating: 2.71
    },
    {
      imageUrl: "https://i.imgur.com/uBJ8imS.jpg",
      location: "Top of the tree for Red Uakari Monkey",
      price: 123,
      title: "Student-Friendly uptown Abode",
      rating: 3.46
    }
  ]