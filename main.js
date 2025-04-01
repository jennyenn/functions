window.stateCallback = () => {
	console.log('Something has changed!')
}

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

