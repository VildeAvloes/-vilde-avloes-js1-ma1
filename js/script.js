//Question 1
const cat = {
  complain: "Meow!",
};
console.log(cat.complain);

//Question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated Heading";

//Question 3
heading.style.fontSize = "2em";

//Question 4
heading.classList.add("subheading");

//Question 5
const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

//Question 6
const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

//Question 7
const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function listOfCats(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}
listOfCats(cats);

//Question 8
//Create a function called createCats. The functions will have one paramenter
//called cats. Inside the function loop through the value passed in as cats
//and create HTML for each object in the array.
//Wrap each item in a div, each name property in an h5 tag and each age
//property in a p tag
//If the age property is missing it should display "age unknown" insted
//Return the HTML from the function
//Call the function and pass in the cats array as the argument.
//Assign the return value of the function to the innerHTML property of the
//element on the HTML page with a class of cat-container.
