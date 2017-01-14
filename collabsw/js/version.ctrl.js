app.controller('version.ctrl', function($scope) { /* global app */
    var c = new Config(); /* global Config */
    $scope.title = c.title;
    $scope.version = c.version;
});