var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".nav-menu");     
    hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    })
    document.querySelectorAll(".sector-2").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
        navMenu.classList.remove("active");
}))
var Moon = document.querySelector(".mode-moon")
var Sun = document.querySelector(".mode-sun")
var body = document.getElementById("body")
var header = document.getElementById("header")
var footerContainer = document.querySelector(".footer-container")
var project1 = document.getElementById("project1")
var project2 = document.getElementById("project2")
var project3 = document.getElementById("project3")
var project4 = document.getElementById("project4")
var project5 = document.getElementById("project5")
var project6 = document.getElementById("project6")
var container = document.getElementById("container")
var imgaround = document.getElementById("img-around")
var maintxt = document.getElementById("maintxt")
var maintxt2 = document.getElementById("maintxt2")
var title1 = document.getElementById("title1")
var title2 = document.getElementById("title2")
var title3 = document.getElementById("title3")
var title4 = document.getElementById("title4")
var title5 = document.getElementById("title5")
var title6 = document.getElementById("title6")
var logo = document.getElementById("logo")
var navlink1 = document.getElementById("nav-link1")
var navlink2 = document.getElementById("nav-link2")
var navlink3 = document.getElementById("nav-link3")
var navlink4 = document.getElementById("nav-link4")
var footerh = document.getElementById("footer-h")
var footerh2 = document.getElementById("footer-h2")
var langs1 = document.getElementById("langs1")
var langs2 = document.getElementById("langs2")
var langs3 = document.getElementById("langs3")
var langs4 = document.getElementById("langs4")
var langs5 = document.getElementById("langs5")
var box1 = document.getElementById("box1")
var box2 = document.getElementById("box2")
var box3 = document.getElementById("box3")
var box4 = document.getElementById("box4")
var box5 = document.getElementById("box5")
var box6 = document.getElementById("box6")

Moon.addEventListener("click", () => {
        Sun.classList.toggle("deactive")
    Moon.classList.toggle("active")
    body.style.backgroundColor = "#D9D7F1"
    header.style.backgroundColor = "rgb(217 214 255)"
    project1.style.backgroundColor = "rgb(230 255 245)"
    project2.style.backgroundColor = "rgb(255 207 207)"
    project3.style.backgroundColor = "rgb(166 167 213)"
    project4.style.backgroundColor = "rgb(162 199 187)"
    project5.style.backgroundColor = "rgb(189 169 209)"
    project6.style.backgroundColor = "rgb(93 98 104)"
    footerContainer.style.backgroundColor = "rgb(204 200 255)"
    container.style.color = "rgb(96 80 95)"
    maintxt.style.color = "rgb(255 159 159)"
    maintxt2.style.color = "rgb(255 159 159)"
    title1.style.color = "rgb(122 102 102)"
    title2.style.color = "rgb(122 102 102)"
    title3.style.color = "rgb(122 102 102)"
    title4.style.color = "rgb(122 102 102)"
    title5.style.color = "rgb(122 102 102)"
    title6.style.color = "rgb(122 102 102)"
    logo.style.color = "rgb(241 131 131 / 49%)"
    navlink1.style.color = "rgb(96, 80, 95)"
    navlink2.style.color = "rgb(96, 80, 95)"
    navlink3.style.color = "rgb(96, 80, 95)"
    navlink4.style.color = "rgb(96, 80, 95)"
    footerh.style.color = "#464583"
    footerh2.style.color = "#464583"
    langs1.style.color = "#e44d26"
    langs2.style.color = "#0277bd"
    langs3.style.color = "#f4e11e"
    langs4.style.color = "#563d7c"
    langs5.style.color = "#00ccff"
    imgaround.style.border = "6px solid white"
    box1.style.background = "#39374e"
    box1.style.border = "5px solid #39374e"
    box2.style.background = "#39374e"
    box2.style.border = "5px solid #39374e"
    box3.style.background = "#39374e"
    box3.style.border = "5px solid #39374e"
    box4.style.background = "#39374e"
    box4.style.border = "5px solid #39374e"
    box5.style.background = "#39374e"
    box5.style.border = "5px solid #39374e"
    box6.style.background = "#39374e"
    box6.style.border = "5px solid #39374e"
})
Sun.addEventListener("click", () => {
        Moon.classList.toggle("active")
    Sun.classList.toggle("deactive")
    body.style.backgroundColor = "#0a0f1d"
    header.style.backgroundColor = "#141c25"
    project1.style.backgroundColor = "#141c25"
    project2.style.backgroundColor = "#141c25"
    project3.style.backgroundColor = "#141c25"
    project4.style.backgroundColor = "#141c25"
    project5.style.backgroundColor = "#141c25"
    project6.style.backgroundColor = "#141c25"
    footerContainer.style.backgroundColor = "#080b0f"
    container.style.color = "#8584b7"
    maintxt.style.color = "#8583ff"
    maintxt2.style.color = "#8583ff"
    title1.style.color = "rgb(230 255 245)"
    title2.style.color = "rgb(255 207 207)"
    title3.style.color = "rgb(166 167 213)"
    title4.style.color = "rgb(162 199 187)"
    title5.style.color = "rgb(189 169 209)"
    title6.style.color = "rgb(93 98 104)"
    logo.style.color = "#8584b7"
    navlink1.style.color = "#b882ff"
    navlink2.style.color = "#b882ff"
    navlink3.style.color = "#b882ff"
    navlink4.style.color = "#b882ff"
    langs1.style.color = "aliceblue"
    langs2.style.color = "aliceblue"
    langs3.style.color = "aliceblue"
    langs4.style.color = "aliceblue"
    langs5.style.color = "aliceblue"
    imgaround.style.border = "6px solid #273049"
    box1.style.background = "#080b0f"
    box1.style.border = "5px solid #080b0f"
    box2.style.background = "#080b0f"
    box2.style.border = "5px solid #080b0f"
    box3.style.background = "#080b0f"
    box3.style.border = "5px solid #080b0f"
    box4.style.background = "#080b0f"
    box4.style.border = "5px solid #080b0f"
    box5.style.background = "#080b0f"
    box5.style.border = "5px solid #080b0f"
    box6.style.background = "#080b0f"
    box6.style.border = "5px solid #080b0f"
})

// ამით ვაკეთებთ ანიმაციას სქროლზე //
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
// ამით ვაკეთებთ ანიმაციას სქროლზე //