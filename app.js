//import data 
import productData from './data/products.js';

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


// make a function to display three new random images

function displayRandomProductImage() {
    Math.floor(Math.random() * productData.length);
}

// NON-duplicated products (refresh products between votes)

//make sure the products are unique.

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



