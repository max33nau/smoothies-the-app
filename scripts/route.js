(function(module) {
  var router = {};

  router.setMapping = function() {
    page.base('');

    page('', createController.index);
    page('/create', '/');
    page('/about', aboutController.index);
    page('/find', findController.index);
    page('/recipes', recipesController.index);
    page('/recipes/:recipeName', recipesController.index);

    page();
  };

  module.router = router;
}(window));
