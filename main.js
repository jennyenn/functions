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
    const fruit = FruitArray.find(fruit => fruit.id === id);
    const toppings = ToppingsArray.find(toppings => toppings.id === id);

    var img = document.getElementById(id);

    if (img.style.display=="block") { 
            img.style.display="none";
            console.log("remove",id);

            // remove specific items from an array by value
            //https://sentry.io/answers/remove-specific-item-from-array/
            //https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript/70850094
            selectedMainArray = selectedMainArray.filter(main => main.id !== id);
            selectedMeatArray = selectedMeatArray.filter(meat => meat.id !== id);
            selectedVegetableArray = selectedVegetableArray.filter(vegetable => vegetable.id !== id);
            selectedFruitArray = selectedFruitArray.filter(fruit => fruit.id !== id);
            selectedToppingsArray = selectedToppingsArray.filter(toppings => toppings.id !== id);
      }
      else {
            img.style.display="block";
            // add the selected item into the selected array
            // Why use "if": only if 'main' is found, then push 'main'
            // If I don't use "if": when users select a main course, but the meat array has nothing to push, it will cause an error.
            if (main) { selectedMainArray.push(main); }
            if (meat) { selectedMeatArray.push(meat); }
            if (vegetable) { selectedVegetableArray.push(vegetable); }
            if (fruit) { selectedFruitArray.push(fruit); }
            if (toppings) { selectedToppingsArray.push(toppings); }
            console.log(id);
      }
}

let expandClass = 'expanded'
let main2 = document.querySelector('#main2')
let expandButton = document.querySelector('#expand-main2')

expandButton.onclick = () => {
    main2.classList.toggle(expandClass);
    document.getElementById("expand-main2").innerHTML = `▲`;
}

let showresultClass = 'showresult'
let textBlock = document.querySelector('#result_section')
let pairingButton = document.querySelector('#pairing-button')

pairingButton.onclick = () => {

    // https://stackoverflow.com/questions/28543611/in-js-are-a-b-c-and-a-ba-cb-c-the-same-sorry-for-m
    // a and b and c are both equal to 0 : use &&
    // I moved this from function startpairing to here, so it won't show result and expandClass if nothing is selected
    if ((selectedMainArray.length === 0)&&
        (selectedMeatArray.length === 0)&&
        (selectedVegetableArray.length === 0)&&
        (selectedFruitArray.length === 0)&&
        (selectedToppingsArray.length === 0)) {
        alert("Please select at least one item first!");
        return;
    }
   
    startpairing();
    textBlock.classList.add(showresultClass);
    main2.classList.add(expandClass);
    document.getElementById("expand-main2").innerHTML = `▲`;
}

function startpairing(){
    console.log("clicked!");

    document.getElementById("result_section").style.display = "block";

    // hide all img first
    // except for the header image
    // https://stackoverflow.com/questions/36500146/get-all-elements-of-the-document-except-the-one-with-the-id-main-nav/36500190
    // https://forum.freecodecamp.org/t/multiple-selectors-to-exclude-in-queryselectorall/225462
    document.querySelectorAll("img:not(#headerImage):not(#headerToast):not(#headerBacon)").forEach(img => {
        img.style.display = "none";
    });

    let totalColories = 0;

    if (selectedMainArray.length > 0){
        //https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
        // get ramdom value from one array
        const randomMain = Math.floor(Math.random() * selectedMainArray.length);
        // get the selectedMain's id
        const selectedMain = selectedMainArray[randomMain];
        const selectedMainimg = document.getElementById(selectedMain.id);

        // display the random selected one!
        if (selectedMainimg) {
            selectedMainimg.style.display = "block";
            console.log(selectedMain.name,selectedMain.calories);
            totalColories += selectedMain.calories;
            document.getElementById("main").innerHTML = `${selectedMain.name}`;
        }
    }

    if (selectedMeatArray.length > 0){

        const randomMeat = Math.floor(Math.random() * selectedMeatArray.length);
        const selectedMeat = selectedMeatArray[randomMeat];
        const selectedMeatimg = document.getElementById(selectedMeat.id);

        if (selectedMeatimg) {
            selectedMeatimg.style.display = "block";
            console.log(selectedMeat.name,selectedMeat.calories)
            totalColories += selectedMeat.calories;
            document.getElementById("meat").innerHTML = `${selectedMeat.name}`;
        }
    }

    if (selectedVegetableArray.length > 0){

        const randomVegetable = Math.floor(Math.random() * selectedVegetableArray.length);
        const selectedVegetable = selectedVegetableArray[randomVegetable];
        const selectedVegetableimg = document.getElementById(selectedVegetable.id);

        if (selectedVegetableimg) {
            selectedVegetableimg.style.display = "block";
            console.log(selectedVegetable.name,selectedVegetable.calories)
            totalColories += selectedVegetable.calories;
            document.getElementById("vegetable").innerHTML = `${selectedVegetable.name}`;
        }
    }

    if (selectedFruitArray.length > 0){

        const randomFruit = Math.floor(Math.random() * selectedFruitArray.length);
        const selectedFruit = selectedFruitArray[randomFruit];
        const selectedFruitimg = document.getElementById(selectedFruit.id);

        if (selectedFruitimg) {
            selectedFruitimg.style.display = "block";
            console.log(selectedFruit.name,selectedFruit.calories)
            totalColories += selectedFruit.calories;
            document.getElementById("fruit").innerHTML = `${selectedFruit.name}`;
        }
    }

    if (selectedToppingsArray.length > 0){

        const randomToppings = Math.floor(Math.random() * selectedToppingsArray.length);
        const selectedToppings = selectedToppingsArray[randomToppings];
        const selectedToppingsimg = document.getElementById(selectedToppings.id);

        if (selectedToppingsimg) {
            selectedToppingsimg.style.display = "block";
            console.log(selectedToppings.name,selectedToppings.calories)
            totalColories += selectedToppings.calories;
            document.getElementById("toppings").innerHTML = `${selectedToppings.name}`;
        }
    }

    console.log(totalColories);
    document.getElementById("result").innerHTML = `Total: ${totalColories} kcal`;
}

function resetAll(){

    // hide all images
    document.querySelectorAll("img:not(#headerImage):not(#headerToast):not(#headerBacon)").forEach(img => {
        img.style.display = "none";
    });

    // checkbox unchecked
    // https://stackoverflow.com/questions/8206565/check-uncheck-checkbox-with-javascript
    document.querySelectorAll("input").forEach(checkbox => {
        checkbox.checked = false;
    });

    // #result_section display none
    // https://bito.ai/resources/display-none-in-javascript-javascript-explained/
    document.getElementById("result_section").style.display = "none";

    main2.classList.remove(expandClass);
    document.getElementById("expand-main2").innerHTML = `▼`;
}

