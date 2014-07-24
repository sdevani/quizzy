var QuestionView = Backbone.View.extend({
  className: "question",

  template: _.template($('#templates .question-template').html()),

  render: function() {
    $(this.el).append(
      this.template(this.model.toJSON())
    );
    return this;
  },

  events: {
    "change": "makeChange"
  },

  makeChange: function() {
    console.log(this.model.get("question"));
    var selectedAnswer = $('input[name="' + this.model.get("question") + '"]:checked').val()
    console.log(selectedAnswer);
    this.model.set('selectedAnswer', selectedAnswer);
  }
})