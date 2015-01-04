app.controller('MainCtrl', function($scope, $mdDialog, routines, navigation) {

    navigation.viewName = "main-view"
    navigation.headline = "7Minute Workout Assistant";
    navigation.rightLink = "#/settings";
    navigation.rightIcon = "fa fa-2x fa-cog";
    navigation.leftLink = "";
    navigation.leftIcon = "";

    $scope.routines = routines;

    $scope.startWorkout = function() {
        $mdDialog.show(
            $mdDialog.alert()
                .content('Flap your Wings now')
                .ok('Los Gehts!')
        );
    };

    $scope.overallTime = function(routines) {
        var result = 0;
        for (var i in routines) {
            result += routines[i].time;
            if (i < routines.length-1) {
                result += routines[i].pause;
            }
        }
        return secondsToHumanReadableTime(result);
    };

    function secondsToHumanReadableTime(seconds) {
        // Output like "1:01" or "4:03:59" or "123:03:59"
        var hrs = ~~(seconds / 3600);
        var mins = ~~((seconds % 3600) / 60);
        var secs = seconds % 60;
        var result = "";

        if (hrs > 0) {
            result += "" + hrs + ":" + (mins < 10 ? "0" : "");
        }
        result += "" + mins + ":" + (secs < 10 ? "0" : "");
        result += "" + secs;
        return result;
    }
});