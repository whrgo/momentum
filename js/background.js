const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImages}`;

document.body.appendChild(bgImage);
bgImage.id = "bgImage";
