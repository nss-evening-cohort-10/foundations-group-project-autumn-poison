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

const printToDOM = (textToPrint, divID) => {
    document.getElementById(divID).innerHTML = textToPrint;
  }  

  //Function that filters info from Upcoming Concerts Array and prints into collapsable list
const eventDetails = (eventsArray) => {
    let domstring = ''
    for (i=0; i < eventsArray.length; i++) {
        let event = eventsArray[i]
        domstring += `
        <div class="accordion" id="accordionExample">
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
                        <a>Button Placeholder</a>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    printToDOM(domstring, 'concert-zone')
}

eventDetails(tourDates);

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
