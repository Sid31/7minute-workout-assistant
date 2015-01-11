angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, routines, $ionicPopup) {
  $scope.routines = routines;

  $scope.overallTime = function(routines) {
    var result = 0;
    for (var i in routines) {
      result += routines[i].duration;
      if (i < routines.length-1) {
        result += routines[i].breakDuration;
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
})

.controller('WorkoutCtrl', function($scope, routines) {
  $scope.routines = routines;
})

.controller('SettingsCtrl', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl("templates/all-routine-times-modal.html", {
    scope: $scope,
    animation: "slide-in-up"
  }).then(function(modal) {
    $scope.modalAllRoutineTimes = modal;
    $scope.openAllRoutineTimesModal = function() {
      $scope.modalAllRoutineTimes.show();
    };
    $scope.closeAllRoutineTimesModal = function() {
      $scope.modalAllRoutineTimes.hide();
    };
  });
})


.controller('IndividualTimesCtrl', function($scope, routines, $ionicModal) {
  $scope.routines = routines;
  $scope.routine = undefined;

  $ionicModal.fromTemplateUrl("templates/individual-routine-times-modal.html", {
    scope: $scope,
    animation: "slide-in-up"
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.setTimesFor = function(id) {
    $scope.routine = _.find(routines, { id: id });
    $scope.openModal();
  }
})

.controller('AllTimesCtrl', function($scope, routines) {
  $scope.workoutDuration = 30;
  $scope.breakDuration = 10;

  $scope.setAllWorkouts = function(workoutTime) {
    workoutTime = parseInt(workoutTime);
    for(var i in routines) {
      routines[i].duration = workoutTime;
    }
  }

  $scope.setAllBreaks = function(breakTime) {
    breakTime = parseInt(breakTime);
    for(var i in routines) {
      routines[i].breakDuration = breakTime;
    }
  }
})


;