
const images = [{
  image1: " C:\Users\John\workspace\projects\foundations-group-project-autumn-poison\images\daft-punk.jpg",
  image2: "C:\Users\John\workspace\projects\foundations-group-project-autumn-poison\images\garage-rock.jpg",
  image3: "https://upload.wikimedia.org/wikipedia/commons/5/52/Greyskull_-_Texas_Punk_Rock_Band.jpg",
  image4: "https://upload.wikimedia.org/wikipedia/commons/b/bb/-Agnostic_Front_live_in_Rome-2.jpg",
  image5: "https://www.maxpixel.net/static/photo/1x/Grunge-Design-Dirty-Underground-Music-Punk-Grungy-2891524.jpg",
}];


const printToDOM = (divID, textToPrint) => {
  document.getElementById(divID).innerHTML = textToPrint;
}

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
 
  { name: '"Bullshit Detector Volume 4" Cassette Tape',
    type: 'cassettes',
   imageUrl: 'https://e.snmc.io/i/300/w/2c244d12783e26b840769e223446672a/3460362',
   description: 'Heres the latest compilation album we are on called "Bullshit Detector Volume 4" with our track: "Utopia - A New World in Our Hearts."',
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
  }];


  const productBuilder = (productsArray) => {
      let domString = '';
      for (let i = 0; i < productsArray.length; i++) {
        let product = productsArray[i];
        domString += `
        <div class="individualProductCard">
        <div class="product-card text-center">
        <h1 class="productCardTitle">${product.name}</h1>
        <img class="productImage" src=${product.imageUrl} alt='image of ${product.name}'/>
        <h4 class"productCardBody">${product.description}</h4>
        <footer>
        <button type="button" class="btn btn-primary">Buy</button>
        </footer>
        </div>
        </div>
        `
        };
      
        printToDOM('product-card', domString);
  };

  productBuilder(products);

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
  ]
  
  const discCardPrinter = (albumArr) => {
    let albumDomString = ''
    for (let i = 0; i < albumArr.length; i++) {
        const album = albumArr[i]
        albumDomString += `
            <div class="card text-center" style="width: 22rem;">
                <img style="width: 100%; height: auto;" src=${album.imageUrl} class="card-img-top" alt="...">
                <div class="card-body">
                   <h5 class="card-title">${album.title}</h5>
                   <p class="card-text">${album.songlist.join("<br />")}</p>
                   <a href="merch.html" class="btn btn-primary">Purchase</a>
                </div>
            </div>
        `
    }
    printToDOM('disc-cards-div', albumDomString)
  }
discCardPrinter(albums);

