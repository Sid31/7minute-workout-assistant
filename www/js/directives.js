angular.module('starter.directives', [])

.directive("timeSlider", [
    function() {
        return {
            restrict: 'E',
            replace: true,
            template: '' +
                '<div class="time-slider">' +
                    '<label class="input-label">{{text}} <b>{{getSetTime()}} Seconds</b></label>' +
                    '<div class="range">' +
                        '<button ng-click="getSetTime(getSetTime() - 1)" class="button button-icon ">' +
                            '<i class="icon ion-minus"></i>' +
                        '</button>' +
                        '<input type="range"' +
                            'min="{{min}}" max="{{max}}"' +
                            'ng-model="getSetTime"' +
                            'ng-model-options="{ getterSetter: true }"' +
                            'ng-change="valueChanged(getSetTime())">' +
                        '<button ng-click="getSetTime(getSetTime() + 1)" class="button button-icon ">' +
                            '<i class="icon ion-plus"></i>' +
                        '</button>' +
                    '</div>' +
                '</div>',
            scope: {
                text: "=",
                time: "=",
                min: "=?",
                max: "=?",
                valueChanged: "&"
            },
            controller: ['$scope', function($scope) {
                $scope.min = $scope.min || 10;
                $scope.max = $scope.max || 90;

                $scope.getSetTime = function(newTime) {
                    if(angular.isDefined(newTime)) {
                        newTime = parseInt(newTime);
                        if(newTime >= $scope.min && newTime <= $scope.max) {
                            $scope.time = newTime;
                        }
                    }
                    return $scope.time;
                }
            }]
        }
    }
]);