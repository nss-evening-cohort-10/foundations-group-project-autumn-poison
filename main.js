const images = [
  "images/daft-punk.jpg",

  "images/garage-rock.jpg",

  "https://upload.wikimedia.org/wikipedia/commons/5/52/Greyskull_-_Texas_Punk_Rock_Band.jpg",

  "https://upload.wikimedia.org/wikipedia/commons/b/bb/-Agnostic_Front_live_in_Rome-2.jpg",

  "https://live.staticflickr.com/3873/14926974367_9dae308c14_b.jpg",

  "https://live.staticflickr.com/486/18921275049_6ba5b9ee50_b.jpg",

  "https://live.staticflickr.com/7311/27559637810_8a2122303d_b.jpg",

  "https://live.staticflickr.com/916/26749861637_753648f035_b.jpg"
];

let currentImage = 0;

function initSlideshow() {
  setImage(0);
  setInterval(function() {
    nextImage();
  }, 3000);
}

function nextImage() {
  if (images.length === currentImage + 1) {
    currentImage = 0;
  } else {
    currentImage++;
  }
  setImage(currentImage);
}

function setImage(image) {
  document.querySelectorAll(".slide")[0].src = images[image];
}

window.onload = initSlideshow();

const printToDOM = (divID, textToPrint) => {
  document.getElementById(divID).innerHTML = textToPrint;
};

const albums = [
  {
    imageUrl:
      "https://i.pinimg.com/originals/c8/39/3c/c8393cc3bbf105906ef2a93f22947863.jpg",
    title: "Songs of Anger, Songs of Hope ",
    songlist: [
      "Now That Is What I Call Edgy",
      "Hiroshima",
      "War Crimes (Afghanistan, El Salvador)",
      "Uranium",
      "Smokescreen",
      "Animals Are Not Ours...",
      "Contributory Negligence",
      "Dirty Business",
      "Porton Down",
      "Sense Your Own Strength"
    ]
  },
  {
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1365/2497/products/Rainbow-unicorn-mask_900x.png?v=1553633323",
    title: "Kitchen Sink Politics",
    songlist: [
      "React is Around The Corner",
      "Do You Even PrintToDom?",
      "Song of the Experts",
      "A Message To All Pielords",
      "Stifled Colors",
      "Superiority Hypocrisy",
      "Thot Army",
      "A National Anthem",
      "Kitchen Sink Politics",
      "Utopia: (A New World In Our Hearts)"
    ]
  },
  {
    imageUrl:
      "https://d3avoj45mekucs.cloudfront.net/rojakdaily/media/iylia/lifestyle/pie2.png",
    title: "Bulls**t Detector Volume 4",
    songlist: [
      "Pie Is Love, Pie Is Life",
      "One Thousand Pies",
      "Libation Pie",
      "Half The Pie",
      "What The Pie Says Goes",
      "Swords Into Pies",
      "Worship The Pie",
      "The Pie And The Glory",
      "Pie Hunting",
      "The Pie Says"
    ]
  }
];

const discCardPrinter = albumArr => {
  let albumDomString = "";
  for (let i = 0; i < albumArr.length; i++) {
    const album = albumArr[i];
    albumDomString += `
            <div class="card text-center" style="width: 22rem;">
                <img style="width: 100%; height: auto;" src=${
                  album.imageUrl
                } class="card-img-top" alt="...">
                <div class="card-body">
                   <h5 class="card-title">${album.title}</h5>
                   <p class="card-text">${album.songlist.join("<br />")}</p>
                   <a href="merch.html" class="btn btn-primary">Purchase</a>
                </div>
            </div>
        `;
  }
  printToDOM("disc-cards-div", albumDomString);
};
discCardPrinter(albums);
