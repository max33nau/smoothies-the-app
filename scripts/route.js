(function(module) {
  var router = {};

  router.setMapping = function() {
    page.base('/');
    page('', createController.index);
    page('create', '/');
    page('about', aboutController.index);
    page('find', findController.index);
    page('recipes', recipesController.index);
    page();
  };
  router.setMapping();
  module.router = router;
}(window));
