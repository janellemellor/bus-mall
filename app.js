import products from './data/products.js';

const productData = products.slice();

//keep track of how many times a user has voted, period (up to 25)
let totalVotes ;
//keep track of votes for a given product


let productVoteDetails;


const initializeState = () => {
    totalVotes = 0; 
    productVoteDetails = [];
};

initializeState();

// display three random NON-duplicated products
//display three NEW NON-duplicated products (refresh products between votes)
const displayThreeProducts = () => {
    //GET three random products from our data
    const product1 = getRandomProduct(productData);    
    let product2 = getRandomProduct(productData); 
    let product3 = getRandomProduct(productData);

 //make sure the products are unique (check repo for whether ids are names)
    while (product1.id === product2.id || product2.id === product3.id || product1.id === product3.id) {

        
        product2 = getRandomProduct(productData);
        product3 = getRandomProduct(productsData)
    } 

};


function getRandomProduct(someProducts) {
    const randomIndex = Math.floor(Math.random() * productsData.length); 
    const randomProduct = productsData[randomNumber];
    
   

    //render these three items on the screen as radio buttons with the same name and different values
    const radio1 = document.getElementById('product1');
    const radio1Span = document.getElementById('product1span');

    radio1.value = product1.name;
    radio1Span.textContent = product1.name;

    const form = document.querySelector('form');


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        //prevent default keeps the browser from auto-refreshing

        const formData = new FormData(form);

        const selectedProductID = formData.get(product);
        //.get eats the name (product is the common name shared by the radio buttons)
       

        //EVENT LISTENER
        //add an event listener to each radio button select one of the three products
        //when they select, update the total votes 
        totalVotes++;

        //whichever one they clicked on, see if they've voted for it before
        const productInVotesArray = findById(productVoteDetails, selectedProductID);

        if (productInVotesArray) {
            //if product in votes array exists,
            productInVotesArray.votes++;
            //increase the vote count
        } else {
            const newVoteObject = {
                id: selectedProductID,
                votes: 1,
            };
        productVoteDetails.push(newVoteObject); 
        }

        if (totalVotes >= 25) {
            window.location = 'results.html';
            //sends the user to a different results page


            // document.querySelector('button').disable = true;
            // alert('thank you for your participation'); 
            // alert(JASON.stringify(productVoteDetails, 0, 2));
            // reset();

        }
        //check where local storage needs to go
        localStorage.setItem('votes', productVoteDetails)

        displayThreeProducts();

        //update the productVoteDetails
            //if there's coffee in the votes array,increment the votes for coffee in the array
            //if there's no coffee in the votes array, push some coffee into the array. 
};



function reset() {
    initializeState();
};

displayThreeProducts();
//reset the whole app when finished
    //set the votes array ([]) and total votes (0) to their initial states



//STRETCH dont' show the same product twice in a row?
//STRETCH keep track of how many times a product appears so we can build a percentage (times clicked/times shown)


//make vote array for canvas results: 
const myVotes = [
    {id: 'coffee', votes: 3},
    {id: 'banana', votes: 5},
]

const votes = [];
const labels = [];

myVotes.forEach(item => votes.push(item.votes));
//Do the same format above for labels using labels in place of votes.

//change "data" to votes in chart.js


const results = JSON.parse(localStorage.getItem('votes'));
document.getElementById('results').textContent = JSON.stringify(results, 0, 2);

