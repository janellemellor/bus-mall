//import data 
import productData from './data/products.js';
import { getRandomProduct } from './utils.js';

//make a copy of original products data
const sliceOfProductData = productData.slice();

//get radio button inputs
const radioButtonOne = document.getElementById('product1');
const radioButtonTwo = document.getElementById('product2');
const radioButtonThree = document.getElementById('product3');

//get span ids for radio buttons
const productOneSpan = document.getElementById('product1span');
const productTwoSpan = document.getElementById('product2span');
const productThreeSpan = document.getElementById('product3span');

//get submit button
const button = document.getElementById('button');

//get results span
const resultsSpan = document.getElementById('results');


//set state to undefined to keep track of how many times a user has voted (up to 25 times)
let numberOfVotes;

//set state to undefined keep track of the number of votes for a given product
let numberOfProductVotes;

//may need to set state to refresh/initialize upon load...


// make a function to generate a random product (getRandomProduct, now in utils)

//use getRandomProduct Function to display three random images. Import function from utils at top of page.
function displayRandomProductImages() {
    //declare three variables for the three images and set equal a randomized product from the slice of real product data
    let randomProductImage1 = getRandomProduct(sliceOfProductData);
    let randomProductImage2 = getRandomProduct(sliceOfProductData);
    let randomProductImage3 = getRandomProduct(sliceOfProductData);

    //check if it's working
    console.log (randomProductImage1);
    console.log (randomProductImage2);
    console.log (randomProductImage3);

    //while any of the product ids match each other...
    while (randomProductImage1.id === randomProductImage2.id 
        || randomProductImage2.id === randomProductImage3.id 
        || randomProductImage3.id === randomProductImage1.id
    ) {
        //...get a new random product. 
        randomProductImage2 = getRandomProduct(sliceOfProductData);
        randomProductImage3 = getRandomProduct(sliceOfProductData);     
    }

    //render the random products in the browser as radio buttons
    radioButtonOne.value = randomProductImage1.id;
    radioButtonTwo.value = randomProductImage2.id;
    radioButtonThree.value = randomProductImage3.id;

    //render the image of the product in the browser as the radio button
    radioButtonOne.input = randomProductImage1.image.src;
    radioButtonTwo.input = randomProductImage2.image.src;
    radioButtonThree.input = randomProductImage3.image.src;


    //render the name of the product in the span of the radio button
    productOneSpan.textContent = randomProductImage1.name;
    productTwoSpan.textContent = randomProductImage2.name;
    productThreeSpan.textContent = randomProductImage3.name;

    

}

displayRandomProductImages();
// NON-duplicated products (refresh products between votes)

//render these three items on the screen as radio buttons with the same name (product) and different values

//prevent default keeps the browser from auto-refreshing

 //.get eats the name (product is the common name shared by the radio buttons)

//Make EVENT LISTENER
//add an event listener to each radio button to select one of the three products

//when they select, update the total votes 

//whichever one they clicked on, see if they've voted for it before
    //if product in votes array exists,
    //increase the vote count

     //sends the user to a different results page


// document.querySelector('button').disable = true;
// alert('thank you for your participation'); 
// alert(JASON.stringify(productVoteDetails, 0, 2));
// reset();

//check where local storage needs to go

//update the productVoteDetails
 //if there's coffee in the votes array,increment the votes for coffee in the array
//if there's no coffee in the votes array, push some coffee into the array. 

 //reset the whole app when finished
//set the votes array ([]) and total votes (0) to their initial states



//STRETCH don't show the same product twice in a row?
//STRETCH keep track of how many times a product appears so we can build a percentage (times clicked/times shown)


//make vote array for canvas results: 

//Do the same format above for labels using labels in place of votes.

//change "data" to votes in chart.js



