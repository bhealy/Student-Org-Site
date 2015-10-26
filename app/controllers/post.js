import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['application'],
  recentPosts: Ember.computed.alias('controllers.application.model'),
  previousPost: Ember.computed('model', 'recentPosts.@each', function() {
    var recentPosts, index;
    recentPosts = this.get('recentPosts');
    index = recentPosts.indexOf(this.get('model'));
    // Cap the index
    if (index != -1) index -= 1;
    return recentPosts.objectAt(index);
  }),
  nextPost: Ember.computed('model', 'recentPosts.@each', function() {
    var recentPosts, index;
    recentPosts = this.get('recentPosts');
    index = recentPosts.indexOf(this.get('model'));
    // Cap the index
    if (index != -1) index += 1;
    return recentPosts.objectAt(index);
  })
});