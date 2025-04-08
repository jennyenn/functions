window.stateCallback = () => {
	console.log('Something has changed!')
}

let MainArray = [
    {
        "id" : "toast",
        "name": "Toast",
        "image": " assets/toast.png ",
        "calories": 74
    },
    {
        "id" : "bagel",
        "name":"Bagel",
        "image": " assets/bagel.png ",
        "calories": 277
    },
    {
        "id" : "croissant",
        "name":"Croissant",
        "image": " assets/croissant.png ",
        "calories": 120
    },
    {
        "id" : "pancake",
        "name":"Pancake",
        "image": " assets/pancake.png ",
        "calories": 120
    },
    {
        "id" : "tarobun",
        "name":"Taro Bun",
        "image": " assets/tarobun.png ",
        "calories": 170
    },
    {
        "id" : "brownsugarsteamedbread",
        "name":"Brown Sugar Steamed Bread",
        "image": " assets/brownsugarsteamedbread.png ",
        "calories": 175
    },
    {
        "id" : "scallionpancake",
        "name":"Scallion Pancake",
        "image": " assets/scallionpancake.png ",
        "calories": 243
    }
];

let selectedMainArray = [];

let MeatArray = [
    {
        "name":"Bacon",
        "image": " assets/bacon.png ",
        "calories": 161
    },
    {
        "name":"Turkey Breast",
        "image": " assets/turkeybreast.png ",
        "calories": 106
    },
    {
        "name":"Chicken Breast",
        "image": " assets/chickenbreast.png ",
        "calories": 164
    },
    {
        "name":"Ham",
        "image": " assets/ham.png ",
        "calories": 145
    },
    {
        "name":"Salmon",
        "image": " assets/salmon.png ",
        "calories": 234
    },
    {
        "name":"Tuna",
        "image": " assets/tuna.png ",
        "calories": 132
    }
]

let selectedMeatArray = [];

let VegetableArray = [
    {
        "name":"Tomato",
        "image": " assets/tomato.png ",
        "calories": 22
    },
    {
        "name":"Mushroom",
        "image": " assets/mushroom.png ",
        "calories": 22
    },
    {
        "name":"Avocado",
        "image": " assets/avocado.png ",
        "calories": 50
    },
    {
        "name":"Spinach",
        "image": " assets/spinach.png ",
        "calories": 23
    },
    {
        "name":"Lettuce",
        "image": " assets/lettuce.png ",
        "calories": 14
    }
]

let selectedVegetableArray = [];

let FruitArray = [
    {
        "name":"Blueberry",
        "image": " assets/blueberry.png ",
        "calories": 29
    },
    {
        "name":"Strawberry",
        "image": " assets/strawberry.png ",
        "calories": 20
    },
    {
        "name":"Banana",
        "image": " assets/banana.png ",
        "calories": 88
    },
    {
        "name":"Grape",
        "image": " assets/grape.png ",
        "calories": 66
    },
    {
        "name":"Kiwi",
        "image": " assets/kiwi.png ",
        "calories": 60
    },
    {
        "name":"Apple",
        "image": " assets/apple.png ",
        "calories": 52
    }
]

let selectedFruitArray = [];

let Toppings = [
    {
        "name":"Sliced Cheese",
        "image": " assets/slicedcheese.png ",
        "calories": 103
    },
    {
        "name":"Mozzarella Cheese",
        "image": " assets/mozzarellacheese.png ",
        "calories": 85
    },
    {
        "name":"Egg",
        "image": " assets/egg.png ",
        "calories": 72
    },
    {
        "name":"Yorgurt",
        "image": " assets/yorgurt.png ",
        "calories": 150
    },
    {
        "name":"Nuts",
        "image": " assets/nuts.png ",
        "calories": 187
    },
    {
        "name":"Gronola",
        "image": " assets/gronola.png ",
        "calories": 140
    },
    {
        "name":"Cereal",
        "image": " assets/cereal.png ",
        "calories": 110
    }
]

let selectedToppings = [];


//I wnat to show images when checkboxed are checked
//I found this: https://jsfiddle.net/vaWtY/


function toggleVisibility(id) {

    // array.find
    // https://stackoverflow.com/questions/7364150/search-an-array-of-javascript-objects-for-an-object-with-a-matching-value
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    // find "id" in the array
    const main = MainArray.find(main => main.id === id);

    var img = document.getElementById(id);

    if (img.style.display=="block") { 
            img.style.display="none";

            // remove specific items from an array by value
            //https://sentry.io/answers/remove-specific-item-from-array/
            //https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript/70850094
            selectedMainArray = selectedMainArray.filter(main => main.id === id);
      }
      else {
            img.style.display="block";
            selectedMainArray.push(main);
            console.log(id);
      }
}

function startpairing(){
    console.log("clicked!");

    if (selectedMainArray.length === 0) {
        alert("Please select at least one item first!");
        return;
    }
    
    //https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
    // get ramdom value from one array
    const randomMain = Math.floor(Math.random() * selectedMainArray.length);
    // get the selectedMain's id
    const selectedMainimg = document.getElementById(selectedMainArray[randomMain].id)

    // hide all img first
    document.querySelectorAll("#selected-images img").forEach(img => {
        img.style.display = "none";
    })

    // display the randomly selected one!
    if (selectedMainimg) {
        selectedMainimg.style.display = "block";
        console.log(selectedMainArray[randomMain].name,selectedMainArray[randomMain].calories)
      }

}

