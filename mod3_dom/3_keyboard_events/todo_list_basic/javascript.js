
//elements:
//just have one input/ul created, we can selecte this way.
const input = document.querySelector("input"); 
const lista = document.querySelector("ul");

//function
function hundleKeyUp(e) {
    if (e.key === "Enter") {
        console.log("Apertou Enter");//test.
        console.log(input.value);//we can see here whats typed inside the input.
   
      /*lista.innerHTML +="<li>" + input.value + "</li>";*/
       //let's add an element to our list, that is, a li, this way is not bad, but there is a more correct way that has a good rendering reading.
      const newLI = document.createElement("li");
      newLI.innerHTML = input.value;
      lista.appendChild(newLI);
     //so we create our element, define the const, use our innerHTML input.value which is whatever we type, we reference list.appendchild(newli), telling it to be sent to const newLI (created element) to be sent to const list (parent element).
     input.value = ""; //this way, as soon as you send it by pressing enter, my input will be clean again for the next addition.
    }
}
//events
input.addEventListener("keyup", hundleKeyUp )//let's use keyup because it's more reliable and when it releases the key, I'll call my hundleKeyUp function, its not running it yet.