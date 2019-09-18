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