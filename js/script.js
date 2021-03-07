"use strict";
const generateRandomNumber = (num) => Math.floor(Math.random() * num);

const Quote = {
  "Albert Einstein": [
    "Imagination is more important than knowledge.",
    "Life is like riding a bicycle. To keep your balance you must keep moving.",
    "Try not to become a man of success, but rather try to become a man of value.",
  ],

  "Steve Jobs": [
    "Sometimes life is going to hit you in the head with a brick. Don't lose faith.",
    "I'm as proud of what we don't do as I am of what we do.",
    "Innovation distinguishes between a leader and a follower.",
  ],

  "Cristiano Ronaldo": [
    "I am not a perfectionist, but I like to feel that things are done well.",
    "If you think you're perfect already, then you never will be.",
    "Dedication, hard work all the time, and belief.",
  ],

  returnRandomQuote(author) {
    const size = this[author].length;
    return this[author][generateRandomNumber(size)];
  },
};

const createMessage = () => {
  //store the keys(authors) in arrays
  const authors = Object.entries(Object.getOwnPropertyDescriptors(Quote))
    .filter(
      ([, desc]) =>
        desc.hasOwnProperty("value") && typeof desc.value !== "function"
    )
    .map(([key]) => key);
  console.log(authors);
  //select a random author
  const author = authors[generateRandomNumber(authors.length)];
  console.log(author);
  //select a random quote from the author
  const message = Quote.returnRandomQuote(author);

  //return  the message
  return `${message}   <br>     "${author}"`;
};

const displayMessage = () => {
  const message = createMessage();
  const messageBox = document.getElementById("message");
  messageBox.innerHTML = message;
};

//create an event listener for button
const button = document.getElementById("generateMessage");
button.addEventListener("click", displayMessage);
