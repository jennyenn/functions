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
        "id" : "steamedbread",
        "name":"Steamed Bread",
        "image": " assets/steamedbread.png ",
        "calories": 175
    }
];

let selectedMainArray = [];

let MeatArray = [
    {
        "id" : "bacon",
        "name":"Bacon",
        "image": " assets/bacon.png ",
        "calories": 161
    },
    {
        "id" : "turkeybreast",
        "name":"Turkey Breast",
        "image": " assets/turkeybreast.png ",
        "calories": 106
    },
    {
        "id" : "ham",
        "name":"Ham",
        "image": " assets/ham.png ",
        "calories": 145
    },
    {
        "id" : "salmon",
        "name":"Salmon",
        "image": " assets/salmon.png ",
        "calories": 234
    },
    {
        "id" : "tuna",
        "name":"Tuna",
        "image": " assets/tuna.png ",
        "calories": 132
    }
]

let selectedMeatArray = [];

let VegetableArray = [
    {
        "id" : "tomato",
        "name":"Tomato",
        "image": " assets/tomato.png ",
        "calories": 22
    },
    {
        "id" : "mushroom",
        "name":"Mushroom",
        "image": " assets/mushroom.png ",
        "calories": 22
    },
    {
        "id" : "avocado",
        "name":"Avocado",
        "image": " assets/avocado.png ",
        "calories": 50
    },
    {
        "id" : "spinach",
        "name":"Spinach",
        "image": " assets/spinach.png ",
        "calories": 23
    },
    {
        "id" : "lettuce",
        "name":"Lettuce",
        "image": " assets/lettuce.png ",
        "calories": 14
    }
]

let selectedVegetableArray = [];

let FruitArray = [
    {
        "id" : "blueberry",
        "name":"Blueberry",
        "image": " assets/blueberry.png ",
        "calories": 29
    },
    {
        "id" : "strawberry",
        "name":"Strawberry",
        "image": " assets/strawberry.png ",
        "calories": 20
    },
    {
        "id" : "banana",
        "name":"Banana",
        "image": " assets/banana.png ",
        "calories": 88
    },
    {
        "id" : "grape",
        "name":"Grape",
        "image": " assets/grape.png ",
        "calories": 66
    },
    {
        "id" : "kiwi",
        "name":"Kiwi",
        "image": " assets/kiwi.png ",
        "calories": 60
    }
]

let selectedFruitArray = [];

let ToppingsArray = [
    {
        "id" : "slicedcheese",
        "name":"Sliced Cheese",
        "image": " assets/slicedcheese.png ",
        "calories": 103
    },
    {
        "id" : "mozzarellacheese",
        "name":"Mozzarella Cheese",
        "image": " assets/mozzarellacheese.png ",
        "calories": 85
    },
    {
        "id" : "egg",
        "name":"Egg",
        "image": " assets/egg.png ",
        "calories": 72
    },
    {
        "id" : "yogurt",
        "name":"yogurt",
        "image": " assets/yogurt.png ",
        "calories": 150
    }
]

let selectedToppingsArray = [];


//I wnat to show images when checkboxed are checked
//I found this: https://jsfiddle.net/vaWtY/


function toggleVisibility(id) {

    // array.find
    // https://stackoverflow.com/questions/7364150/search-an-array-of-javascript-objects-for-an-object-with-a-matching-value
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    // find "id" in the array
    const main = MainArray.find(main => main.id === id);
    const meat = MeatArray.find(meat => meat.id === id);
    const vegetable = VegetableArray.find(vegetable => vegetable.id === id);
    // const fruit = FruitArray.find(fruit => fruit.id === id);
    // const toppings = ToppingsArray.find(toppings => toppings.id === id);

    var img = document.getElementById(id);

    if (img.style.display=="block") { 
            img.style.display="none";

            // remove specific items from an array by value
            //https://sentry.io/answers/remove-specific-item-from-array/
            //https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript/70850094
            selectedMainArray = selectedMainArray.filter(main1 => main1.id !== id);
            selectedMeatArray = selectedMeatArray.filter(meat1 => meat1.id !== id);
            selectedVegetableArray = selectedVegetableArray.filter(vegetable1 => vegetable1.id !== id);
            // selectedFruitArray = selectedFruitArray.filter(fruit => fruit.id !== id);
            // selectedToppingsArray = selectedToppingsArray.filter(toppings => toppings.id !== id);
            console.log("remove",id);
      }
      else {
            img.style.display="block";
            selectedMainArray.push(main);
            selectedMeatArray.push(meat);
            selectedVegetableArray.push(vegetable);
            // selectedFruitArray.push(fruit);
            // selectedToppingsArray.push(toppings);
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
    const selectedMainimg = document.getElementById(selectedMainArray[randomMain].id);

    const randomMeat = Math.floor(Math.random() * selectedMeatArray.length);
    const selectedMeatimg = document.getElementById(selectedMeatArray[randomMeat].id);

    const randomVegetable = Math.floor(Math.random() * selectedVegetableArray.length);
    const selectedVegetableimg = document.getElementById(selectedVegetableArray[randomVegetable].id);

    // const randomFruit = Math.floor(Math.random() * selectedFruitArray.length);
    // const selectedFruitimg = document.getElementById(selectedFruitArray[randomFruit].id);

    // const randomToppings = Math.floor(Math.random() * selectedToppingsArray.length);
    // const selectedToppingsimg = document.getElementById(selectedToppingsArray[randomToppings].id);

    // hide all img first
    document.querySelectorAll("#selected-images img").forEach(img => {
        img.style.display = "none";
    })

    // display the randomly selected one!
    if (selectedMainimg) {
        selectedMainimg.style.display = "block";
        console.log(selectedMainArray[randomMain].name,selectedMainArray[randomMain].calories)
    }

    if (selectedMeatimg) {
        selectedMeatimg.style.display = "block";
        console.log(selectedMeatArray[randomMeat].name,selectedMeatArray[randomMeat].calories)
    }

    if (selectedVegetableimg) {
        selectedVegetableimg.style.display = "block";
        console.log(selectedVegetableArray[randomVegetable].name,selectedVegetableArray[randomVegetable].calories)
    }

    // if (selectedFruitimg) {
    //     selectedFruitimg.style.display = "block";
    // }

    // if (selectedToppingsimg) {
    //     selectedToppingsimg.style.display = "block";
    // }
}

