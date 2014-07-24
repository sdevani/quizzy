var QuizView = Backbone.View.extend({

  el: ".quiz",

  render: function() {
    $(this.el).empty();
    this.collection.each(this.addQuestion, this);
    $(this.el).append($('<form class="quiz-submit"><input type="submit"></form>'));
  },

  addQuestion: function(model) {
    questionView = new QuestionView({
      model: model
    });
    $(this.el).append(questionView.render().el);
  },

  events: {
    'submit .quiz-submit': 'scoreQuiz'
  },

  scoreQuiz: function(e) {
    e.preventDefault();
    alert("You received a " + this.collection.grade());
  }
});