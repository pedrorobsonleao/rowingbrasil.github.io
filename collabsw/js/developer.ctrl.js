app.controller('developer.ctrl', function($scope) { /* global app */
    var c = new Config(); /* global Config */
    $scope.author = c.author;
    $scope.title = c.title;
});