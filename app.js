//import data 
import productData from './data/products.js';
import { getRandomProduct, findById } from './utils.js';

//make a copy of original products data
const sliceOfProductData = productData.slice();

//get form: 
const form = document.getElementById('form');

//get radio button inputs
const radioButtonOne = document.getElementById('product1');
const radioButtonTwo = document.getElementById('product2');
const radioButtonThree = document.getElementById('product3');

//get span ids for radio buttons
const productOneSpan = document.getElementById('product1span');
const productTwoSpan = document.getElementById('product2span');
const productThreeSpan = document.getElementById('product3span');

//get img ids for radio buttons
const image1 = document.getElementById('img1');
const image2 = document.getElementById('img2');
const image3 = document.getElementById('img3');

//get submit button
const button = document.getElementById('button');

//get results span
const resultsSpan = document.getElementById('results');


//set state to undefined to keep track of how many times a user has voted (up to 25 times)
let numberOfVotes;

//set state to undefined keep track of the number of votes for a given product
let numberOfProductVotes;

//may need to set state to refresh/initialize upon load...



//use getRandomProduct Function to display three random images. Import function from utils at top of page.
function displayRandomProductImages() {
    //declare three variables for the three images and set equal a randomized product from the slice of real product data
    let randomProductImage1 = getRandomProduct(sliceOfProductData);
    let randomProductImage2 = getRandomProduct(sliceOfProductData);
    let randomProductImage3 = getRandomProduct(sliceOfProductData);


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
    image1.src = '../assets/' + randomProductImage1.image;
    image2.src = '../assets/' + randomProductImage2.image;
    image3.src = '../assets/' + randomProductImage3.image;
   

    //render the name of the product in the span of the radio button
    productOneSpan.textContent = randomProductImage1.name;
    productTwoSpan.textContent = randomProductImage2.name;
    productThreeSpan.textContent = randomProductImage3.name;

}




// add an event listener to the form that acts on submit
form.addEventListener('submit', (event) => {    //prevents the page from auto-refreshing
    // event.preventDefault();
    //gets a new instance of form data
    const formData = new FormData(form);

     //.get eats the name (product is the common name shared by the radio buttons). selectedProduct goes and grabs the info from the radio buttons
    const selectedProduct = formData.get('product');

    //when they select, update the total number of votes ( we want to count to 25) 
    numberOfVotes++;

    //if the total number of votes (selections is greater than 25, send the user to the results page) 
    if (numberOfVotes >= 25) {
        window.location = './results';
        
    }

    
})

displayRandomProductImages();


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



// STRETCH NON-duplicated products (refresh products between votes)


//STRETCH keep track of how many times a product appears so we can build a percentage (times clicked/times shown)


//make vote array for canvas results: 

//Do the same format above for labels using labels in place of votes.

//change "data" to votes in chart.js



