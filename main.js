const printToDOM = (textToPrint, divID) => {
  document.getElementById(divID).innerHTML = textToPrint;
}; 

// const images = [
//   "images/daft-punk.jpg",

//   "images/garage-rock.jpg",

//   "https://upload.wikimedia.org/wikipedia/commons/5/52/Greyskull_-_Texas_Punk_Rock_Band.jpg",

//   "https://upload.wikimedia.org/wikipedia/commons/b/bb/-Agnostic_Front_live_in_Rome-2.jpg",

//   "https://live.staticflickr.com/3873/14926974367_9dae308c14_b.jpg",

//   "https://live.staticflickr.com/486/18921275049_6ba5b9ee50_b.jpg",

//   "https://live.staticflickr.com/7311/27559637810_8a2122303d_b.jpg",

//   "https://live.staticflickr.com/916/26749861637_753648f035_b.jpg"
// ];


// let currentImage = 0;

// function initSlideshow() {
//   setImage(0);
//   setInterval(function() {
//     nextImage();
//   }, 3000);
// }

// function nextImage() {
//   if (images.length === currentImage + 1) {
//     currentImage = 0;
//   } else {
//     currentImage++;
//   }
//   setImage(currentImage);
// }

// function setImage(image) {
//   document.querySelectorAll(".slide")[0].src = images[image];
// }

// window.onload = initSlideshow();


//Array of Upcoming Concert Details
const tourDates = [
    {
        city:'Nashville',
        venue: 'Exit/In',
        price: '$15',
        date: '04/20',
        time: '10pm'
    },
    {
        city:'Chicago',
        venue: 'Bar Bar Black Sheep',
        price: '$10',
        date: '04/22',
        time: '10pm'
    },
    {
        city:'Duluth',
        venue: 'Cheese World',
        price: '$20',
        date: '04/25',
        time: '8pm'
    },
    {
        city:'Boise',
        venue: 'The Golden Potato',
        price: '$5',
        date: '06/09',
        time: '10pm'
    },
    {
        city:'Portland',
        venue: 'Tanis',
        price: '$25',
        date: '07/07',
        time: '10pm'
    },
    {
        city:'Austin',
        venue: 'The Chain Drive',
        date: '06/09',
        price: '$10',
        time: '10pm'
    }
];

  //Function that filters info from Upcoming Concerts Array and prints into collapsable list

   
     const albums =  [
       {
         imageUrl: 'https://i.pinimg.com/originals/c8/39/3c/c8393cc3bbf105906ef2a93f22947863.jpg',
        title: 'Songs of Anger, Songs of Hope ',
        songlist: [
       'Now That Is What I Call Edgy',
       'Hiroshima',
       'War Crimes (Afghanistan, El Salvador)',
       'Uranium',
       'Smokescreen',
       'Animals Are Not Ours...',
       'Contributory Negligence',
       'Dirty Business',
       'Porton Down',
      'Sense Your Own Strength'
       ]
      },
      {
    imageUrl: 'https://cdn.shopify.com/s/files/1/1365/2497/products/Rainbow-unicorn-mask_900x.png?v=1553633323',
    title: 'Kitchen Sink Politics',
    songlist: [
      'React is Around The Corner',
        'Do You Even PrintToDom?',
        'Song of the Experts',
        'A Message To All Pielords',
        'Stifled Colors',
        'Superiority Hypocrisy',
        'Thot Army',
        'A National Anthem',
        'Kitchen Sink Politics',
        'Utopia: (A New World In Our Hearts)'
      ]
    },
    {
      imageUrl: 'https://d3avoj45mekucs.cloudfront.net/rojakdaily/media/iylia/lifestyle/pie2.png',
      title: 'Bulls**t Detector Volume 4',
      songlist: [
        'Pie Is Love, Pie Is Life',
        'One Thousand Pies',
        'Libation Pie',
        'Half The Pie',
        'What The Pie Says Goes',
        'Swords Into Pies',
        'Worship The Pie',
        'The Pie And The Glory',
        'Pie Hunting',
        'The Pie Says',
      ]
    },
  ];

const images = [{
   imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/52/Greyskull_-_Texas_Punk_Rock_Band.jpg"
}];

const imageBuilder = (imageArray) => {
  let imageDomString = "";
  for (let i = 0; i < imageArray.length; i++) {
   let image = imageArray[i];
    imageDomString += `<img src='${image.imageUrl}'>`
  }
    printToDOM(imageDomString, 'photo');     
}; 


    
    //imageBuilder(images);

const products = [
  { name: '"Songs of Anger, Songs of Hope" Cassette Tape',
    type: 'cassettes',
    imageUrl: 'https://2.bp.blogspot.com/-xGDuj4duODA/Wz9rk0bY4CI/AAAAAAAAOGA/0waWkrAh3NYbv7rJrc30sJ_dccUIk2MiACLcBGAs/s1600/R-5719091-1407495216-6363.jpeg.jpg',
    description: 'Buy our 2nd full cassette "Songs of Anger, Songs of Hope" with hits like: "Worship the Bomb", and "Dirty Business!"',
  },

  { name: 'Kitchen Sink Politics Cassette Tape',
    type: 'cassettes',
    imageUrl:'http://i192.photobucket.com/albums/z149/pengy1966/scan522.jpg',
    description: 'Buy your 1st full cassette tape "Kitchen Sink Politics" with hits like: "Joke Army", "Half the Sky" and more!',
  },

  { name: '"Bulls**t Detector Volume 4" Cassette Tape',
    type: 'cassettes',
  imageUrl: 'https://e.snmc.io/i/300/w/2c244d12783e26b840769e223446672a/3460362',
  description: 'Heres a compilation album we are on called "Bulls**t Detector Volume 4" with our track: "Utopia - A New World"',
  },

  { name: 'Concert Poster from our First Ever Show',
    type: 'poster',
    imageUrl: 'http://i192.photobucket.com/albums/z149/pengy1966/pengy1966%20stuff/KYPP435.jpg',
    description: 'Take home a souvenir poster from the largest concert we have played to date with Kronstadt Rising and The Poets! ',
  },

  { name: 'First ever Autumn Poison Concert Poster',
    type: 'poster',
  imageUrl: 'http://i192.photobucket.com/albums/z149/pengy1966/KYPP838.jpg',
  description: 'Put our poster on your wall of our first ever gig with Sheena and Paul rocking out! The legends were born that night.',
  },

  { name: 'Punk Rock Poster proving its all about emotion',
    type: 'poster',
  imageUrl: 'http://www.southendpunk.com/images/thebands/autumn3l.jpg',
  description: 'Let the emotion overcome you, Julian! Here’s a poster that reminds us that it’s all about the music and the message.',
  },

  { name: 'A Real Punk Rock Sticker',
    type: 'sticker',
    imageUrl: 'https://res.cloudinary.com/teepublic/image/private/s--HNTufKxp--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_191919,e_outline:48/co_191919,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1514826476/production/designs/2243845_1.jpg',
    description: 'Are you really Punk Rock? Get a sticker.'

  },

  { name: 'Distressed Anarchy Sticker',
    type: 'sticker',
    imageUrl: 'https://res.cloudinary.com/teepublic/image/private/s--9Q71W9wb--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_191919,e_outline:48/co_191919,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1516240865/production/designs/2287723_0.jpg',
    description: 'Let anarchy rain.',
  },

  { name: 'Fight the Power Stickers',
    type: 'sticker',
    imageUrl: 'https://cdn.shopify.com/s/files/1/1506/9366/products/DSC00029_1024x1024.JPG?v=1527326481',
    description: 'Fight the system. Destroy the power. ',
  },
];

// function to print the different merch products to the merch page.
  const productBuilder = (productsArray) => {
      let productDomString = '';
       for (let i = 0; i < productsArray.length; i++) {
        let product = productsArray[i];
         productDomString += `
         <div class="individualProductCard">
          <div class="product-card text-center">
           <h1 class="productCardTitle">${product.name}</h1>
            <img class="productImage" src=${product.imageUrl} alt='image of ${product.name}'/>
             <h5 class"productCardBody">${product.description}</h4>
              <footer>
              <a href="purchase.html" class="btn btn-primary">Buy</a>
              </footer>
          </div>
         </div>
        `
        };
      
        printToDOM(productDomString, 'product-card');
  };
 // productBuilder(products);

  
  const discCardPrinter = (albumArr) => {
    let albumDomString = '';
    for (let i = 0; i < albumArr.length; i++) {
        const album = albumArr[i]
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
        `
    }
    printToDOM(albumDomString, 'disc-cards-div');
  };
// discCardPrinter(albums);

 //Function that filters info from Upcoming Concerts Array and prints into collapsable list
 const eventDetails = (eventsArray) => {
  let eventDomString = '';
  for (i=0; i < eventsArray.length; i++) {
      let event = eventsArray[i]
      eventDomString += `
      <div class="d-flex justify-content-center">
        <div class="accordion col-md-3" id="accordionExample">
          <div class="card text-center">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne${i}" aria-expanded="false" aria-controls="collapseOne">
                ${event.city}, ${event.date}
                </button>
                </h2>
              </div>

              <div id="collapseOne${i}" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                  <h3>${event.venue}</h3>
                  <h3>${event.time}</h3>
                  <h3>${event.price}</h3>
                  <a href="purchase.html" class="btn btn-primary">Buy</a>
                </div>
              </div>
          </div>
        </div>
      </div>
      `
  }
  printToDOM(eventDomString, 'concert-zone');
};

// eventDetails(tourDates);

window.onload = function() {
  imageBuilder(images);
};

// init function will allow us to run each function on it's specific page.
const init = () => {
  
  if (document.URL.includes('disc')) {
    discCardPrinter(albums);
  } else if (document.URL.includes('merch')) {
    productBuilder(products);
  } else if (document.URL.includes('events')) {
    eventDetails(tourDates);
  }
};

init();

const sortClick = (event) => {
  const type = event.target.id
  selectedProducts = [];
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
     if (product.type === type) {
       selectedProducts.push(product);
     };
  };

  if (type === 'all') {
    productBuilder(products);
    } else {
    productBuilder(selectedProducts)
    };

}; 

let thankYouMessage = 'Thank you for your purchase!'

const checkOut = () => {
  let purchaseDomString = `
  <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>${thankYouMessage}</strong>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
      </button>
  </div>`;
  console.log(purchaseDomString);
  printToDOM(purchaseDomString, 'checkout-zone');
};

// document.getElementById('all').addEventListener('click', sortClick);
// document.getElementById('cassettes').addEventListener('click', sortClick);
// document.getElementById('poster').addEventListener('click', sortClick);
// document.getElementById('sticker').addEventListener('click', sortClick);
// document.getElementById('complete-purchase').addEventListener('click', checkOut);

const clickers = () => {
  
  if (document.URL.includes('merch')) {
    document.getElementById('all').addEventListener('click', sortClick);
    document.getElementById('cassettes').addEventListener('click', sortClick);
    document.getElementById('poster').addEventListener('click', sortClick);
    document.getElementById('sticker').addEventListener('click', sortClick);
  } else if (document.URL.includes('purchase')) {
    document.getElementById('complete-purchase').addEventListener('click', checkOut);
  }
};

clickers();