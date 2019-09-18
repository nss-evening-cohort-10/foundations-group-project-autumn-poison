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