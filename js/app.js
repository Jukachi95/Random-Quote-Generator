// If she had wheels she'd be a bike
// Never dig straight down - Some dude from minecraft
//  

// document.getElementById("generate").addEventListener("click", randomGen)

// function randomGen(){
  
//   let quotes = ["If she had wheels, she would be a bike",
//     "Never dig straight down",
//     "FizzBuzz BuzzFizz",
//     "There is nothing permanent except change.",
//     "Learning never exhausts the mind.",
//     "I have not failed. I've just found 10,000 ways that won't work."
// ]
  
//   let randomNumber = Math.floor(Math.random() * (quotes.length))
  
  
//   document.querySelector('.generatedText').innerHTML = quotes[randomNumber];
// }

document.getElementById('generate').addEventListener('click', randomQuote)

function randomQuote(){
  
  let quotes = ["If she had wheels, she would be a bike",
                "Never dig straight down",
                "FizzBuzz BuzzFizz",
                "There is nothing permanent except change.",
                "Learning never exhausts the mind.",
                "I have not failed. I've just found 10,000 ways that won't work.",
                "Only I can change my life, one can do it for me",
                "May the Force be with you",
                "Avengers Assemble",           
                "I always say the absence of evidence is not the evidence of absence",
                "If you build it, he will come",
                 "Ability is what you are capable of doing",
                 "What you can learn from somebody who is successful is how much he is ready to give in order to be good",
                "Behind every kick of the ball there has to be a thought",
                "The supreme quality for leadership is unquestionable integrity",
                "This is SPARTA!"
                
 ]
  
  
  let randomNumber = Math.floor(Math.random() * (quotes.length));
  
  document.querySelector(".generatedText").innerHTML = quotes[randomNumber]
}