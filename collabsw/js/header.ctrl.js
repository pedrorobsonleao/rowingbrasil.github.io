app.controller('header.ctrl', function($scope, $location) { /* global app */
    var c = new Config(); /* global Config */
    
    $scope.isActive = function (viewLocation) { 
        return $location.path().indexOf(viewLocation) == 0;
    };
    
    document.title = c.title;
    $scope.title = c.title;
});