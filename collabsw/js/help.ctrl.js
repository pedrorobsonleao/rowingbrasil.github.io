app.controller('help.ctrl', function($scope) { /* global app */
    var c = new Config(); /* global Config */
    $scope.title = c.title;
    $scope.date = (new Date()).toLocaleFormat('%d-%b-%Y %H:%M:%S');
});