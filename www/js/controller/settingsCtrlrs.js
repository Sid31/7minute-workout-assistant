app.controller('SettingsCtrl', function($scope, $mdDialog, $location, navigation) {
    navigation.initialize("settings-view", "Einstellungen");
    navigation.leftLink = "#/";
    navigation.leftIcon = "fa fa-2x fa-arrow-left";

    $scope.navigateTo = function(path) {
        $location.path(path);
    }
});

app.controller('AllRoutineTimesCtrl', function($scope, $mdDialog, routines, navigation) {
    navigation.initialize("settings-allRoutineTimes-view", "Zeiten");
    navigation.leftLink = "#/settings";
    navigation.leftIcon = "fa fa-2x fa-arrow-left";

    $scope.allRoutinesTime = 30;
    $scope.allRoutinesPause = 10;

    $scope.$watch("allRoutinesTime", function(newVal, oldVal) {
        if(newVal != oldVal) {
            for(var i in routines) {
                routines[i].time = newVal;
            }
        }
    });

    $scope.$watch("allRoutinesPause", function(newVal, oldVal) {
        if(newVal != oldVal) {
            for(var i in routines) {
                routines[i].pause = newVal;
            }
        }
    });
});

app.controller('IndividualRoutineTimesCtrl', function($scope, $mdDialog, routines, navigation) {
    navigation.initialize("settings-individualRoutineTimes-view", "Individuelle Zeiten");
    navigation.leftLink = "#/settings";
    navigation.leftIcon = "fa fa-2x fa-arrow-left";

    $scope.routines = routines;
});