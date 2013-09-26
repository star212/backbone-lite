KISSY.ready(function() {
    KISSY.use('mobile/backbone-lite/1.0/index.js', function (S, Backbone) {
        var _ = Backbone._,
        $ = Backbone.$;

  module("Backbone.noConflict");

  test('noConflict', 2, function() {
    var noconflictBackbone = Backbone.noConflict();
    equal(window.Backbone, undefined, 'Returned window.Backbone');
    window.Backbone = noconflictBackbone;
    equal(window.Backbone, noconflictBackbone, 'Backbone is still pointing to the original Backbone');
  });

});
});
