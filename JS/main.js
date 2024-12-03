var quotesArr = [
  {quote: "“ You have to believe in yourself when no one else does.”", auther: " Serena Williams"},
  { quote: "“ When you have a dream, you’ve got to grab it and never let go. ”",auther: "Carol Burnett"},
  {quote: " Be yourself; everyone else is already taken",auther: "Oscar Wilde"},
  {quote: "“ You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one ”",auther: "John Lennon"},
  {quote:"Do not go where the path may lead, go instead where there is no path and leave a trail", auther: " Ralph Waldo Emerson"},
  {quote:" It is during our darkest moments that we must focus to see the light.",auther: "Aristotle"},
  { quote:"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the hear ",auther: "Helen Keller"},
  {quote:"Don't worry when you are not recognized, but strive to be worthy of recognition ",auther: "Abraham Lincoln"},
{quote:"“ If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.” ",auther: "Oprah Winfrey"},
{ quote: " Less is More ", auther: "Yahia Abdellah "}];

var reRandom;
function random() {
  var random = Math.floor(Math.random() * quotesArr.length);

  while (reRandom == random) {
    random = Math.floor(Math.random() * quotesArr.length);
  }
  reRandom = random;

  document.getElementById("quote").innerText = ` ${quotesArr[random].quote}`;
  document.getElementById("auther").innerText = ` ${quotesArr[random].auther}`;
}
