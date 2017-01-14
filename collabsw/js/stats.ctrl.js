app.controller('stats.ctrl', function($scope, $http, $interval) { /* global app */

    var promisse = null;
    
    $scope.show = 'none';
    
    $scope.tc = new TimeCollection(); /* global TimeCollection */
    
    $scope.chrt = new EasyChart({ /* global EasyChart */
       'options': {
           'PieChart': {
                title: 'Chart',
                displayExactValues: true,
                is3D: true,
                pieSliceText: 'value',
                chartArea: {left: 10, top: 10, bottom: 0, height: '100%'}
            },
            'LineChart': {
                animation:{
                    duration: 1000,
                    easing: 'out',
                },
                curveType: 'function',
                pointSize: 8,
                
                //vAxis: {direction: -1}
            },
            'AreaChart': {
                animation:{
                    duration: 1000,
                    easing: 'out',
                },
                vAxis: {minValue: 0},
                // seriesType: 'area',
                // series: {1: {type: 'bars'}} 
            },
            'BarChart': {
                bar: {groupWidth: "95%"},
                vAxis: {minValue: 0},
            },
            'ColumnChart': {
                title: 'Chart',
                displayExactValues: true,
                is3D: true,
                pieSliceText: 'value',
                chartArea: {left: 10, top: 10, bottom: 0, height: '100%'}
            },
            'Table': {
                width: '100%',
                showRowNumber: false, 
                page: 'enable',
                pageSize: 10,
                sortColumn: 1,
                sortAscending: true
            },
            'Timeline' : {
                timeline: { showRowLabels: false }
            }
       },
       'parameters': {
           'keys': [
               [$scope.tc, 'Timeline', 'timeline'],
               [$scope.tc, 'LineChart', 'linechart', 'allTimes'],
               [$scope.tc, 'BarChart', 'barchart','allTimes'],
               [$scope.tc, 'Table', 'table','totalTimes']
            ]
       }
    });
    
    $scope.request = () => {
        var uri = config.url('/event/A'); /* global config */

        $http.get(uri).success(function(data) {
            $scope.events = data;
        });
    };
    
    $scope.requestTime = () => {
        if($scope.selected) {
            var selected = JSON.parse($scope.selected);
            
            var uri = config.url('/times/'+ selected.id);
            
            $http.get(uri).success(function(data) {
                $scope.tc.set(data);
            
                $scope.chrt.update($scope);
            
                $scope.show = 'block';
            });
            
            // stop refresh if ended racing
            if (selected.status === 'E') {
                $scope.stop();
            }
        }
    };
    
    $scope.start = () => {
        if(promisse) {
            $scope.stop();
        }
        promisse = $interval($scope.requestTime,5000);
    };
    
    $scope.stop = () => {
        $interval.cancel(promisse);
        promisse = null;
    };
    
    $scope.chrt.draw($scope);
    $scope.request();
    
    //$scope.start();
});
