// declare as the default
let type = "inspiration";

const data = {
  inspiration: {
    partOne: [
      "The Way of the world ",
      "Eat enough of wisdom, folly",
      "The way of God ",
      "With the new day",
      "It does not matter how slowly you go",
      "We know what we are",
      "It is during our darkest moments",
      "We must never",
    ],
    partTwo: [
      "is not the best way",
      "is the domain of a cornn man",
      "we must apply",
      "comes new strength",
      "as long as you",
      "but know not",
      " we have to focus",
      "never back down",
    ],
    partThree: [
      "but life have a way of taking care of all of us.",
      "but wisdom profit a lot, so get wisdom.",
      "Willing is not enough; we must do.",
      "and new thoughts.",
      "do not stop.",
      "but what we may be .",
      "to see the light.",
      "nor giveup.",
    ],
  },
  motivation: {
    partOne: [
      "Be strong and of good courage",
      "Don't give up keep pushing ",
      "There is light at the end of the tunnel",
      "We can't afford to stop trying",
      "Hardwork is the refuge ",
      "The downfall of a man ",
      "When what we are is",
      "Live life",
    ],
    partTwo: [
      "is a most ridiculous phrase",
      "for the Lord your God ",
      "for the Lord knows what is best for his children",
      "For nature will support us whenever we fall",
      "and you know what",
      "it is all within yourself",
      "what we want to be",
      "like you enjoy everything",
    ],
    partThree: [
      "is the best of all .",
      "is with you.",
      "not an object.",
      "keep trying.",
      "of those who have nothing to do.",
      "in your way of thinking.",
      "that's success.",
      "Need nothing.",
    ],
  },
};

const highlighBtn = (selector) => { document.querySelector(selector).classList.add("selected");
};

// highlight default type button
highlighBtn(`#inspiration`);
 
// Making the quote
const generateQuote = (type) => {
  const partOne =
    data[type].partOne[Math.floor(Math.random() * data[type].partOne.length)];
 
  const partTwo =
    data[type].partTwo[Math.floor(Math.random() * data[type].partTwo.length)];

  const partThree =
    data[type].partThree[
      Math.floor(Math.random() * data[type].partThree.length)
    ];

  return `${partOne} ${partTwo} ${partThree}`;
};

//highliughting motivational Button
document.querySelector("#inspiration").addEventListener("click", (e) => {
  highlighBtn(`#inspiration`);
  type = "inspiration";
});
// highlighting inspirational button

document.querySelector("#motivation").addEventListener("click", (e) => {
  highlighBtn(`#motivation`);  
  type = "motivation"});
// highlight generate button
document.querySelector("#generate").addEventListener("click", (e) => {
  highlighBtn(`#generate"`); 
});

const getQuantity = () => {
  if (document.querySelector("#value-1").checked) {
    qty = document.querySelector("#value-1").value;
  } else if (document.querySelector("#value-2").checked) {
    qty = document.querySelector("#value-2").value;
  } else if (document.querySelector("#value-3").checked) {
    qty = document.querySelector("#value-3").value;
  } else if (document.querySelector("#value-4").checked) {
    qty = document.querySelector("#value-4").value;
  } else if (document.querySelector("#value-5").checked) {
    qty = document.querySelector("#value-5").value;
  }

  return qty;
};

document.querySelector("#generate").addEventListener("click", (e) => {
  document.querySelector("#results").innerHTML = "";
  for (let i = 0; i < getQuantity(); i++) {
    document.querySelector("#results").innerHTML += `<li>${generateQuote(
      type
    )}</li>`;
  }
});
