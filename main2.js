// Array holding the starting like values for Post 0, Post 1, and Post 2
var likesArray = [9, 12, 9];

function addLike(index, elementSelector) {
    // 1. Increment the count at the specified array position
    likesArray[index]++;
    
    // 2. Select the targeted HTML text element matching the id string
    var targetElement = document.querySelector(elementSelector);
    
    // 3. Update the display text with the newly updated value from our array
    targetElement.innerText = likesArray[index];
}