var readLineSync = require("readline-sync");
var chalk = require("chalk");

score = 0;

var UserName = readLineSync.question(
  chalk.blue.bgBlack.bold("what's your name? ")
);

console.log(chalk.red("welcome ") + chalk.blue(UserName));

// High score for the game
var highScore = [
  {
    name: "Akhil",
    score: 15,
  },
  {
    name: "Rahul",
    score: 13,
  },
  {
    name: "Sam",
    score: 10,
  },
];

// play function for the quiz
function play(question, answer) {
  var userAnswer = readLineSync.question(question);

  //  Branching method
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;
  } else {
    console.log("wrong!");
    score = score - 1;
  }

  console.log("your score is ", score);
  console.log("----------------------------------");
}

// queBank
var questions = [
  {
    question: ` 1. What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?

a:2005
b:2008
c:2010
d:2012

Answer:  `,
    answer: "b",
  },
  {
    question: `
2. What is the name of Thor’s hammer?

a:Vanir
b:Mjolnir
c:Aesir
d:Norn

Answer:  `,

    answer: "b",
  },
  {
    question: `
3. In the Incredible Hulk, what does Tony tell Thaddeus Ross at the end of the film?

a:That he wants to study The Hulk
b:That he knows about S.H.I.E.L.D.
c:That they are putting a team together
d:That Thaddeus owes him money

Answer:  `,

    answer: "c",
  },
  {
    question: `
4. What is Captain America’s shield made of?

a:Adamantium
b:Vibranium
c:Promethium
d:Carbonadium

Answer:  `,
    answer: "b",
  },
  {
    question: `5. The Flerkens are a race of extremely dangerous aliens that resembles what?

a:Cats
b:Ducks
c:Reptiles
d:Raccoons
Answer:  `,
    answer: "a",
  },
  {
    question: `
6. Before becoming Vision, what is the name of Iron Man’s A.I. butler?

a:H.O.M.E.R.
b:J.A.R.V.I.S.
c:A.L.F.R.E.D.
d:M.A.R.V.I.N.
Answer:  `,
    answer: "b",
  },
  {
    question: `7. What is the real name of the Black Panther?

a:T Challa
b:M Baku
c:N Jadaka
d:N Jobu
Answer:  `,
    answer: "a",
  },
  {
    question: `
8. What is the alien race Loki sends to invade Earth in The Avengers?

a:The Chitauri
b:The Skrulls
c:The Kree
d:The Flerkens
Answer:  `,
    answer: "a",
  },
  {
    question: `
9. Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?

a:Thor
b:Loki
c:The Collector
d:Tony Stark
Answer:  `,
    answer: "b",
  },
  {
    question: `
10. What fake name does Natasha use when she first meets Tony?

a:Natalie Rushman
b:Natalia Romanoff
c:Nicole Rohan
d:Naya Rabe
Answer:  `,
    answer: "a",
  },
  {
    question: `
11. What does Thor want another of when he’s in the diner?

a:A slice of pie
b:A pint of beer
c:A stack of pancakes
d:A cup of coffee
Answer:  `,
    answer: "d",
  },
  {
    question: `
12. Where does Peggy tell Steve she wants to meet him for a dance, before he plunges into the ice?

a:The Cotton Club
b:The Stork Club
c:El Morocco
d:The Copacabana
Answer:  `,
    answer: "b",
  },
  {
    question: `
13. About which city do Hawkeye and Black Widow often reminisce?

a:Budapest
b:Prague
c:Istanbul
d:Sokovia
Answer:  `,
    answer: "a",
  },
  {
    question: `
14. Who does the Mad Titan sacrifice to acquire the Soul Stone?

a:Nebula
b:Ebony Maw
c:Cull Obsidian
d:Gamora
Answer:  `,
    answer: "d",
  },
  {
    question: `
15. What is the name of the little boy Tony befriends while stranded in the Iron Man 3?

a:Harry
b:Henry
c:Harley
d:Holden
Answer:  `,
    answer: "c",
  },
];

// For looping the question.
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

// printing the highScore values according to the current score.
var currentScore = (highScore[0].name, highScore[0].score);

if (currentScore === score) {
  console.log(
    chalk.green.bgBlack.bold(
      "Congratulations!  " + UserName + "You Broke all the records!"
    )
  );
} else {
  console.log(chalk.red("Better Luck Next Time!"));
}

// printing the higest value
console.log(`
Score board
------------          
Highest scores:`);
console.log(highScore[0].name, "& The score is ", highScore[1].score);
console.log(highScore[1].name, "& The score is ", highScore[1].score);
console.log(highScore[2].name, "& The score is ", highScore[2].score);

console.log(
  "Please send the Screenshot of the score to Update in our DATABASE. "
);
