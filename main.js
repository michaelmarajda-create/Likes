function addLike(id) {
    // Select the element based on the ID string passed into the function
    var element = document.querySelector(id);
    
    // Read the current number inside the element and convert it to an integer
    var currentLikes = parseInt(element.innerText);
    
    // Increment the count by 1
    currentLikes++;
    
    // Update the inner text of the target element with the new value
    element.innerText = currentLikes;
}