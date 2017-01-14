app.controller('main.ctrl', function($scope, $http) { /* global app */
    
    $scope.show = 'none';
    
    $scope.ec = new EventCollection(); /* global EventCollection */
    
    $scope.chrt = new EasyChart({ /* global EasyChart */
       'options': {
            'Table': {
                width: '100%',
                showRowNumber: false, 
                page: 'enable',
                pageSize: 10,
                sortColumn: 0,
                sortAscending: false
            }
       },
       'parameters': {
           'keys': [
               [$scope.ec, 'Table', 'table']
            ]
       }
    });

    $scope.request = function() {
        var uri = config.url('/event/A'); /* global config */

        $http.get(uri).success(function(data) {
            //console.log(data);
            $scope.events = data;
            $scope.ec.set(data);

            $scope.chrt.update($scope);
            $scope.show = 'block';
        });
    };
    
    $scope.chrt.draw($scope);
    $scope.request();
});