import productData from './data/products.js';


// make a function to display three new random images:
    //declare new function getRandomProduct which will take in some, non specific product data (indicated by "some")
export function getRandomProduct(someProductData) {
    //declare randomNumber which generates a random number and rounds it down (math.floor) then multiplies it by the number of objects in the productData array. 
    const randomNumber = Math.floor(Math.random() * someProductData.length);
    //declare randomProduct which takes a slice of the productData array and gets some, non-specific random number (again indicated by "some")
    const randomProduct = someProductData[randomNumber];
    return randomProduct;
}















// reference find by id from e-commerce? (below):
// export default function findById(itemId, cartArray) {
//     for (let i = 0; i < cartArray.length; i++){
//         const arrayItem = cartArray[i];
//         if (itemId === arrayItem.id) {
//             return arrayItem;
//         }
//     }
//     return null;
// }

