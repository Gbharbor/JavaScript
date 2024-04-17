//Selecting HTML elements: we have only one input/ul created, we can select them this way.
const input = document.querySelector("input"); 
const list = document.querySelector("ul");

//Defining the function handle the Keyup event
function hundleKeyUp(event) {
    //Checking if the pressed key is "Enter"
    if (event.key === "Enter") {
        console.log("Pressed Enter Key");// Test
        const typedText = input.value;
        console.log("Text-typed: ", typedText);//We can choose input.value 
   
        //Creating a new list item (li)
        const NewItemList = document.createElement("li");
        NewItemList.textContent = input.value;
        //Adding the new item to the list
        list.appendChild(NewItemList);
        //Clearing the input field
        input.value = "";
    }
}
//Adding an event listener to capture when a key is pressed.
input.addEventListener("keyup", hundleKeyUp);