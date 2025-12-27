const data = [
  {
    img: "https://www.boredpanda.com/blog/wp-content/uploads/2025/10/funny-cat-memes-go-hard-cover_675.jpg",
    text: "Will you be my only one?? 💖"
  },
  {
    img: "https://cdn-useast1.kapwing.com/static/templates/crying-cat-meme-template-thumbnail-4e806a85.webp",
    text: "Are you sure? 🥺"
  },
  {
    img: "https://i.pinimg.com/736x/ed/70/7d/ed707d6943d0258c23cd496bfcaf85e6.jpg",
    text: "Dach jit mes o 🥺"
  },
  {
    img: "https://i.pinimg.com/736x/e9/f6/36/e9f63675fa85770c13c3d726f3313a37.jpg",
    text: "Please say yes 😭💔"
  }
];

const yesImages = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4aNJVjgDnCEm_LnPfBUZehYnYX4k5zUvE3g&s",
    text: "Yay!!! I love you 💕🥰"
  },
  {
    img: "https://m.media-amazon.com/images/I/71C4-KOJUbL._AC_UF894,1000_QL80_.jpg",
    text: "Yah yahhhhhh 👏😇🥰"
  }
];

let index = 0;

function noClick() {
  index = (index + 1) % data.length;
  document.getElementById("catImage").src = data[index].img;
  document.getElementById("text").innerText = data[index].text;
}

function yesClick() {
  const random = Math.floor(Math.random() * yesImages.length);
  document.getElementById("catImage").src = yesImages[random].img;
  document.getElementById("text").innerText = yesImages[random].text;
}