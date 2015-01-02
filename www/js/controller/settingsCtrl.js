angularModule.controller('SettingsCtrl', function($scope, $mdDialog, routines) {

    angular.element(".settings-view").

    $scope.click = function () {
        $mdDialog.show(
            $mdDialog.alert()
                .content('Open Settings')
                .ok('Ok')
        );
    };

    $scope.routines = routines;
});
