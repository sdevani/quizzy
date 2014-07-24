q1 = new Question({
  question: "What color is the sky?",
  choices: ["blue", "red", "green"],
  answer: "blue"
});

q2 = new Question({
  question: "What color is the sun?",
  choices: ["blue", "red", "yellow"],
  answer: "yellow"
});

myQuiz = new Quiz([q1, q2]);
quizView = new QuizView({collection: myQuiz});
quizView.render();