window.stateCallback = () => {
	console.log('Something has changed!')
}

mainArray = [
    {
        "name":"Toast",
        "image": " assets/toast.png ",
        "calories": 74
    },
    {
        "name":"Bagel",
        "image": " assets/bagel.png ",
        "calories": 277
    },
    {
        "name":"Croissant",
        "image": " assets/croissant.png ",
        "calories": 120
    },
    {
        "name":"Pancake",
        "image": " assets/pancake.png ",
        "calories": 120
    }
]


//I wnat to show images when checkboxed are checked
//I found this: https://jsfiddle.net/vaWtY/

function toggleVisibility(id) {
    var img = document.getElementById(id);
     
    if (img.style.display=="block") { 
            img.style.display="none";
      }
      else {
            img.style.display="block";
      }
  }

