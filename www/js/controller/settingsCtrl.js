app.controller('SettingsCtrl', function($scope, $mdDialog, routines, navigation) {

    navigation.viewName = "settings-view";
    navigation.headline = "Einstellungen";
    navigation.rightIcon = "";
    navigation.rightLink = "";
    navigation.leftLink = "#/";
    navigation.leftIcon = "fa fa-2x fa-arrow-left";

    $scope.click = function () {
        $mdDialog.show(
            $mdDialog.alert()
                .content('Open Settings')
                .ok('Ok')
        );
    };

    $scope.routines = routines;

    $scope.allRoutinesTime = 30;

    $scope.allRoutinesPause = 10;

    $scope.$watch("allRoutinesTime", function(newVal, oldVal) {
        if(newVal != oldVal) {
            for(var i in $scope.routines) {
                $scope.routines[i].time = newVal;
            }
        }
    });

    $scope.$watch("allRoutinesPause", function(newVal, oldVal) {
        if(newVal != oldVal) {
            for(var i in $scope.routines) {
                $scope.routines[i].pause = newVal;
            }
        }
    });
});
