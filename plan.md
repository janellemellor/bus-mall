# BusMall Technical Plan

### Pages
* User Page - for bus user focus group interaction (index.html)
* Data Analysis Page - to share with the client BusMall and display their results (likely with have it's own folder with HTML/CSS pages)

### Data
* Assets Folder with images (provided .jpgs)
* Product Data (.js file)
    * ID (unique to each product)
    * Image (with paths)
    * Name (what the user will see)
* Array of random product images for user to select from (.js)

### Functions
* Randomize Photos from list of available products
* Use Find by Id/Image to check against the product list for repeats
* Take images that were selected out of the deck
* Repeat 25 times without showing the results
* event listener on click to the radio button selection


### Variables
* Store library of variables here for reference? 


### Steps
1. Read through lab instructions carefully. 
1. Create new repo and copy assets/readme file into it.
1. Create plan.md file and use it to document the transition plan. ACP. 
1. Start creating files/folders that will be needed (see data/pages/functions sections above)
1. Create array of product objects in a .js file under data. This will be needed to match images to when user selects. Export.
1. Test and create a series of functions that will select three random photos from the product array and display them side by side. One file?
    * They will need to be random
    * They need to not match each other (no repeating images at the same time)
        * Use find by id/image against the product list to confirm if it's a match?
    * They will need to take away images that have already been selected (.slice?)
    * They will need to repeat until 25 selections have been made
1. Render the page (.js)
    * create the interface (product image, product name, radio button?) using createElement, QuerySelector  
    * create eventlistener for on click of selected product (radio button)
    * set and count state for number of times a selection was made.
        * after 25 times, disable or hide images
    * display results to user - show a list of products with number of times views and votes received    
    * have each session restart on load


