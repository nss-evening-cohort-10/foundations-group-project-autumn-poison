const tourDates = [
    {
        city:'Nashville',
        venue: 'Exit/In',
        date: '04/20',
        time: '10pm'
    },
    {
        city:'Chicago',
        venue: 'Bar Bar Black Sheep',
        date: '04/22',
        time: '10pm'
    },
    {
        city:'Duluth',
        venue: 'Cheese World',
        date: '04/25',
        time: '8pm'
    },
    {
        city:'Boise',
        venue: 'The Golden Potato',
        date: '06/09',
        time: '10pm'
    },
    {
        city:'Portland',
        venue: 'Tanis',
        date: '07/07',
        time: '10pm'
    },
    {
        city:'Austin',
        venue: 'The Chain Drive',
        date: '06/09',
        time: '10pm'
    }
];

const printToDOM = (divID, textToPrint) => {
    document.getElementById(divID).innerHTML = textToPrint;
  }  

const eventDetails = (eventsArray) => {
    let domstring = ''
    for (i=0; i < eventsArray.length; i++) {
        let event = eventsArray[i]
        domstring += `
        <div class="accordion" id="accordionExample">
            <div class="card text-center">
                <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    ${event.city}' ,' ${event.date}
                    </button>
                    </h2>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                     <div class="card-body">
                        <p>${event.venue}</p>
                        <p>${event.time}</p>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    printToDOM(domstring, 'concert-zone')
}

eventDetails(tourDates);