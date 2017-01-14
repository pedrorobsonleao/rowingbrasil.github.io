app.controller('lap.ctrl', function($scope, $http) { /* global app */
    
    $scope.btn_status = 'active';
    
    $scope.request = function() {
        var uri = config.url('/event/S'); /* global config */
    
        $scope.lap = [];
        $scope.time = [];

        $http.get(uri).success(function(data) {
            //console.log(data);
            $scope.events = data;
        });
    };
    
    $scope.getArray = function(num) {
        var ret = [];
        
        if(num) {
            ret = new Array(parseInt(num, 10));
        }
    
       return ret;
    };
    
    $scope.go = function(id) {
        //console.log(id, $scope.lap);
        
        var now = Date.now();
        
        var dt = new Date(now);
        
        $scope.lap[id] = dt.getHours() + ':';
        $scope.lap[id] += dt.getMinutes() + ':';
        $scope.lap[id] += dt.getSeconds() + '.';
        $scope.lap[id] += dt.getMilliseconds();
        
        $scope.time[id] = now;
    };
    
    $scope.sent = function(id) {
        
        var uri = config.url('/times');
            
        var param = {
            'id': id,
            'distance': $scope.distance,
            'times': $scope.time.join(),
            'headers': {'Content-Type': 'application/x-www-form-urlencoded'}
        };
        
        console.log(param);
        $scope.btn_status = 'disabled';
        
        $http.post(uri, param)
        .then(function(res) {
            $scope.request();
        });
    };
    
    $scope.request();
});