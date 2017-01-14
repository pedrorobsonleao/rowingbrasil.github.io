app.controller('start.ctrl', function($scope, $http) { /* global app */
    
    $scope.request  = () => {
        var uri = config.url('/event/C'); /* global config */

        $http.get(uri).success(function(data) {
            //console.log(data);
            $scope.events = data;
        });
    };
    
    $scope.go = () => {
        //console.log($scope.selected);
        var selected = JSON.parse($scope.selected);
        
        if(selected.id) {
        
            var times = [];
            var time = Date.now();
        
            for(var i=0; i<selected.itens; i++) {
                times.push(time);
            }
      
            var uri = config.url('/times');
            
            var param = {
                'id': selected.id,
                'distance': 0,
                'times': times.join(),
                'headers': {'Content-Type': 'application/x-www-form-urlencoded'}
            };
            
            $http.post(uri, param)
            .then(function(res) {
                //console.log(res);
                $scope.request();
                $scope.icon='glyphicon-flag';
            });
        }
    };
    
    $scope.request();
});
