angular.module('starter.directives', [])

.directive("timeSlider", [
    function() {
        return {
            restrict: 'E',
            replace: true,
            template: '' +
                '<div class="time-slider">' +
                    '<label class="input-label">{{text}} <b>{{time}} Seconds</b></label>' +
                    '<div class="range">' +
                        '<button ng-click="addToTime(-1)" class="button button-icon ">' +
                            '<i class="icon ion-minus"></i>' +
                        '</button>' +
                        '<input type="range"' +
                            'min="{{min}}" max="{{max}}"' +
                            'ng-model="time"' +
                            'ng-change="valueChanged(time)">' +
                        '<button ng-click="addToTime(1)" class="button button-icon ">' +
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

                $scope.addToTime = function(num) {
                    var result =  parseInt($scope.time) + parseInt(num);
                    if (result >= $scope.min && result <= $scope.max) {
                        $scope.time = result;
                        $scope.valueChanged(result);
                    }
                }
            }]
        }
    }
]);