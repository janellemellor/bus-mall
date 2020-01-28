export default function renderProductTesting(productData) {

    //get product id from productData.js
    const getProductId = document.getElementById(productData.id);


    //create a radio input button for user selection
    const radioButton = document.createElement ('input');
    radioButton.setAttribute('type', 'radio');

    //create an image for the radio button
    const img = document.createElement('img'); 
    img.src = '../assets/' + productData.image;
    radioButton.appendChild(img);

    //create a p element to display the name of the product with the image
    const productNameP = document.createElement('p');
    productNameP.textContent = productData.name;
    radioButton.appendChild(productNameP);

    return radioButton;
}


