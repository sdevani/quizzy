var Question = Backbone.Model.extend({
  isCorrect: function() {
    var selected = this.get("selectedAnswer");
    return (selected && selected == this.get("answer"))
  }
})

var Quiz = Backbone.Collection.extend({
  model: Question,
  grade: function() {
    correctCount = _.reduce(this.models, function(sum, model) {
      if (model.isCorrect()) {
        return sum + 1;
      } else {
        return sum;
      }
    }, 0);
    return (correctCount * 100) / this.models.length;
  }
})