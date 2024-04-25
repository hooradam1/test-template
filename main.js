const mainHeader = document.getElementById("mainHeader");
const mainTitle = document.getElementById("mainTitle");
const mainNavBar = document.getElementById("mainNavBar");
const section1Header = document.getElementById("section1Header");
const imageSource = document.getElementById("imageSource");




fetch("constant.txt")
  .then((res) => res.text())
  .then((text) => {
    const lines = text.trim().split("\n");

    let main_header, main_title, main_nav_bar, section1_header, image_source;

    lines.forEach((line) => {
      const [key, value] = line.split(":").map((item) => item.trim());

      switch (key) {
        case "main_header":
          main_header = value.replace(/"/g, "");
          break;
        case "main_title":
          main_title = value.replace(/"/g, "");
          break;
        case "main_nav_bar":
          main_nav_bar = JSON.parse(value);
          break;
        case "section1_header":
          section1_header = value.replace(/"/g, "");
          break;
        case "image_source":
          image_source = value.replace(/"/g, "");
          break;
        default:
          break;
      }
    });

    console.log("Main Header:", main_header);
    console.log("Main Title:", main_title);
    console.log("Main Nav Bar:", main_nav_bar);
    console.log("Section 1 Header:", section1_header);
    console.log("Image Source:",image_source);

    mainHeader.textContent = main_header;
    mainTitle.textContent = main_title;
    mainNavBar.innerHTML = main_nav_bar
      .map((item) => `<li>${item}</li>`)
      .join("");
    section1Header.textContent = section1_header;
    imageSource.textContent = image_source;
  })
  .catch((e) => console.error(e));



  // n

  let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}


// Scroll Reveal
const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});


sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200
})


// revel sec2 
ScrollReveal().reveal('#s1',{
  delay: 75,
  duration: 2500,
  opacity: 0,
  distance:'40px' ,
  origin: "top",
  reset: true
});

ScrollReveal().reveal('#s2-Gallery',{
  delay: 100,
  duration: 2500,
  opacity: 0,
  distance:'40px' ,
  origin: "top",
  reset: true
});

// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery1 img");

ourGallery.forEach(img => {

  img.addEventListener('click', (e) => {

    // Create Overlay Element
    let overlay = document.createElement("div");

    // Add Class To Overlay
    overlay.className = 'popup-overlay';

    // Append Overlay To The Body
    document.body.appendChild(overlay);

    // Create The Popup Box
    let popupBox = document.createElement("div");

    // Add Class To The Popup Box
    popupBox.className = 'popup-box';

    if (img.alt !== null) {

      // Create Heading
      let imgHeading = document.createElement("h3");

      // Create text For Heading
      let imgText = document.createTextNode(img.alt);

      // Append The Text To The Heading
      imgHeading.appendChild(imgText);

      // Append The Heading To The Popup Box
      popupBox.appendChild(imgHeading);

    }

    // Create The Image
    let popupImage = document.createElement("img");

    // Set Image Source
    popupImage.src = img.src;

    // Add Image To Popup Box
    popupBox.appendChild(popupImage);

    // Append The Popup Box To Body
    document.body.appendChild(popupBox);

    // Create The Close Span
    let closeButton = document.createElement("span");

    // Create The Close Button Text
    let closeButtonText = document.createTextNode("X");

    // Append Text To Close Button
    closeButton.appendChild(closeButtonText);

    // Add Class To Close Button
    closeButton.className = 'close-button';

    // Add Close Button To The Popup Box
    popupBox.appendChild(closeButton);

  });

});

// Close Popup
document.addEventListener("click", function (e) {

  if (e.target.className == 'close-button') {

    // Remove The Current Popup
    e.target.parentNode.remove();

    // Remove Overlay
    document.querySelector(".popup-overlay").remove();

  }

});