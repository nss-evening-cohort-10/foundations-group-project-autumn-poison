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
