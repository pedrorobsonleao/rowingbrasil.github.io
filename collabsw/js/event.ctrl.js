app.controller('event.ctrl', function($scope, $http) { /* global app */
    
    $scope.addItem = function() {
        if($scope.name &&  $scope.itens && $scope.distance) {
            
            var uri = config.url('/event'); /* global config */
            
            var param = {
                'name': $scope.name,
                'distance': $scope.distance,
                'itens': $scope.itens,
                'headers': {'Content-Type': 'application/x-www-form-urlencoded'}
            };
            
            $http.post(uri, param)
            .then(function(res) {
                //console.log(res);
                $scope.name='';
                $scope.itens = 0;
                $scope.distance = 0;
            });
        }
    };
});