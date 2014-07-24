GradeView = Backbone.View.extend({
  el: '.grade',

  initialize: function() {
    this.listenTo(this.collection, "complete", this.render)
  },

  template: _.template($('#templates .grade-template').html()),

  render: function() {
    $(this.el).empty();
    $(this.el).append(this.template({grade: this.collection.grade}));
  }
})