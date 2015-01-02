app.controller('SettingsCtrl', function($scope, $mdDialog, routines) {

    $scope.click = function () {
        $mdDialog.show(
            $mdDialog.alert()
                .content('Open Settings')
                .ok('Ok')
        );
    };

    $scope.routines = routines;
});
