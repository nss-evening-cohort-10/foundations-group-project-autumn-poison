
const printToDOM = (divID, textToPrint) => {
  document.getElementById(divID).innerHTML = textToPrint;
}

const products = [
  { name: '"Songs of Anger, Songs of Hope" Cassette Tape',
    type: 'cassettes',
    imageUrl: 'https://2.bp.blogspot.com/-xGDuj4duODA/Wz9rk0bY4CI/AAAAAAAAOGA/0waWkrAh3NYbv7rJrc30sJ_dccUIk2MiACLcBGAs/s1600/R-5719091-1407495216-6363.jpeg.jpg',
    description: 'Buy our 2nd full cassette "Songs of Anger, Songs of Hope" with hits like: "Worship the Bomb", "Who Would Rape Mother Earth", and "Dirty Business!"',
  },
 
  { name: 'Kitchen Sink Politics Cassette Tape',
    type: 'cassettes',
    imageUrl:'http://i192.photobucket.com/albums/z149/pengy1966/scan522.jpg',
    description: 'Buy your 1st full cassette tape "Kitchen Sink Politics" with hits like: "Joke Army", "Half the Sky" and more!',
  },
 
  { name: '"Bullshit Detector Volume 4" Cassette Tape',
    type: 'cassettes',
   imageUrl: 'https://e.snmc.io/i/300/w/2c244d12783e26b840769e223446672a/3460362',
   description: 'Buy the latest album that we are featured on called "Bullshit Detector Volume 4" with our track labeled: "Utopia: A New World in Our Hearts."',
  },
 
  { name: 'Concert Poster',
    type: 'poster',
    imageUrl: 'http://i192.photobucket.com/albums/z149/pengy1966/pengy1966%20stuff/KYPP435.jpg',
    description: 'Take home a souvenir from the largest concert we have played to date!',
  },
 
  { name: 'First ever Autumn Poison Concert Poster',
    type: 'poster',
   imageUrl: 'http://i192.photobucket.com/albums/z149/pengy1966/KYPP838.jpg',
   description: 'Put our poster on your wall of our first ever gig! The legends were born that night.',
  },
 
  { name: 'Punk Rock Poster',
    type: 'poster',
   imageUrl: 'http://www.southendpunk.com/images/thebands/autumn3l.jpg',
   description: 'Let the emotion overcome you! Here’s a poster that reminds us that it’s all about the music and the message.',
  }];


  const productBuilder = (productsArray) => {
      let domString = '';
      for (let i = 0; i < productsArray.length; i++) {
        let product = productsArray[i];
        domString += `
        <div class="product-card text-center">
        <h1 class="productCardTitle">${product.name}</h1>
        <img class="productImage" src=${product.imageUrl} alt='image of ${product.name}'/>
        <h3>${product.description}</h3>
        <button type="button" class="btn btn-primary">Buy</button>
        </div>
        `
        };
      
        printToDOM('product-card', domString);
  };

  productBuilder(products);