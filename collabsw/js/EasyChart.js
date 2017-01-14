var EasyChart = function(parameters) {

    var CHART_CLASS = 0;
    var CHART_TYPE = 1;
    var CHART_NAME = 2;
    var CHART_METHOD = 3;
    var DATA_KEY_PREFIX = "D_";

    var options = parameters.options;
    var parameters = parameters.parameters;

    this.update = function($scope) {
        
        parameters.keys.forEach(function(parm) {
            var key = parm[CHART_NAME];
            var dt = parm[CHART_CLASS];
            
            var method = key;
            
            if(parm[CHART_METHOD]) {
                method = parm[CHART_METHOD];
            }

            $scope[DATA_KEY_PREFIX + key].data = dt[method]();
        });
    };

    this.draw = function($scope) {
        
        parameters.keys.forEach(function(parm) {
            var key = parm[CHART_NAME];
            var type = parm[CHART_TYPE];
            
            var dkey = DATA_KEY_PREFIX + key;
            

            $scope[dkey] = {};

            $scope[dkey].type = type;
            $scope[dkey].options = (options[type])?options[type]:{};

            $scope[key] = $scope[dkey];
        });

    };

};

