let backButton = document.querySelector("#back")
let nextButton = document.querySelector("#next")



let students = [
  {
    profileImage: "https://cdn.glitch.com/464fb802-3fe4-4e79-b00d-aa7994d9590e%2Falexis.JPG?v=1585518444722",
    name: "Alexis Sill-Ruiz",
    quote: "'Word to, stop playing with me.'",
    superlative: "Most Drip"
  },
  {
    profileImage: "https://cdn.glitch.com/464fb802-3fe4-4e79-b00d-aa7994d9590e%2Fnaomi.jpg?v=1585789418236",
    name: "Naomi Delgado",
    quote: "'Know your worth.'",
    superlative: "Most Energetic"
  },
  {
    profileImage: "https://cdn.glitch.com/464fb802-3fe4-4e79-b00d-aa7994d9590e%2Fbrian.jpg?v=1585793818398",
    name: "Brian Alago",
    quote: "*Insert any NBA player's quote here.*",
    superlative: "Class Clown"
  },
   {
    profileImage: "https://cdn.glitch.com/464fb802-3fe4-4e79-b00d-aa7994d9590e%2Femmanuel.jpg?v=1585793825558",
    name: "Emmanuel Taveras",
    quote: "'Yo soy la pampara.'",
    superlative: "Friendliest Senior"
  },
  {
    profileImage: "https://cdn.glitch.com/464fb802-3fe4-4e79-b00d-aa7994d9590e%2Fandrew.jpg?v=1585794398625",
    name: "Andrew Rivera",
    quote: "'buenooooo.'",
    superlative: "Most Talkative"
  },
  {
    profileImage: "https://cdn.glitch.com/464fb802-3fe4-4e79-b00d-aa7994d9590e%2Fmahel.JPG?v=1585789406945",
    name: "Mahel Napo",
    quote: "'Quiet people have the loudest minds.'",
    superlative: "Tech Expert"
  },
  {
    profileImage: "https://cdn.glitch.com/464fb802-3fe4-4e79-b00d-aa7994d9590e%2Fbaba.JPG?v=1585789362372",
    name: "Babamayokun Okudero",
    quote: "'Hard work beats talent when talent fails.'",
    superlative: "Most Athletic"
  },
  {
    profileImage: "https://cdn.glitch.com/464fb802-3fe4-4e79-b00d-aa7994d9590e%2Fjin.jpg?v=1585789390471",
    name: "Jinmaris Alicea",
    quote: "'Real Life Dope.'",
    superlative: "Best Style"
  },
]

let count = 0
document.querySelector("#pic").src = students[count].profileImage
document.querySelector("#name").innerHTML = students[count].name
document.querySelector("#quote").innerHTML = students[count].quote
document.querySelector("#superlative").innerHTML = students[count].superlative
let finalProfile = students.length -1

nextButton.addEventListener("click",()=>{
  console.log('next')
  count ++
  console.log(count)
  if(count > finalProfile){
    count = 0
  }
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  document.querySelector("#quote").innerHTML = students[count].quote
  document.querySelector("#superlative").innerHTML = students[count].superlative
  
  if(count == 5){
    alert("Click on the following picture!!! (If you want to go back to the original after, click on any other student's picture)")
  }
})

backButton.addEventListener("click",()=>{
  console.log('back')
  count --
  console.log(count)
  if(count < 0){
    count = finalProfile
  }
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  document.querySelector("#quote").innerHTML = students[count].quote
  document.querySelector("#superlative").innerHTML = students[count].superlative
})

let changeButton = document.querySelector("#pic")



changeButton.addEventListener("click", ()=>{
  console.log("totally clickable!!!")
  console.log(count)
  if(count == 5){
    let changeBody = document.querySelector("#body")
    let changeTitle = document.querySelector("#title")
    changeBody.style.backgroundImage = "url('https://wallpaperaccess.com/full/268067.jpg')"
    changeBody.style.backgroundSize = "cover"
    changeBody.style.backgroundRepeat = "no-repeat"
    changeTitle.style.fontFamily = "'Press Start 2P', cursive"
  } else {
    let changeBody = document.querySelector("#body")
     let changeTitle = document.querySelector("#title")
    changeBody.style.backgroundImage = "url('https://images1.miaminewtimes.com/imager/u/745xauto/11177606/alligator_pool_float.jpeg')"
    changeBody.style.backgroundSize = "cover"
    changeBody.style.backgroundRepeat = "no-repeat"
    changeTitle.style.fontFamily = "'Aclonica', sans-serif"
  }
})