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


.controller('WorkoutCtrl', function($scope, routines, $interval, $state, $rootScope) {
  $scope.routine = routines[0];
  $scope.max = 0;
  $scope.countdown = 0;
  $scope.title = "";

  $scope.cleanUp = function() {
    $interval.cancel($scope.counter);
  };

  $scope.startWorkout = function() {
    var i = 0;
    $scope.routine = routines[i];
    $scope.max = $scope.routine.duration;
    $scope.countdown = $scope.routine.duration;
    $scope.title = $scope.routine.name;

    var breakTime = false;
    $scope.counter = $interval(function() {
      $scope.countdown -= 1;

      if (!breakTime && $scope.countdown < 0) {
        if(!routines.indexOf($scope.routine) == (routines.length - 1)) {
          // routine was done. prepare for break
          $scope.max = $scope.routine.breakDuration;
          $scope.countdown = $scope.routine.breakDuration;
          $scope.title = "Break";
          breakTime = true;
        } else {
          // this is the last routine
          $state.go("main");
        }
      } else if($scope.countdown < 0) {
        // break is over. prepare for next routine
        i++;
        $scope.routine = routines[i];
        $scope.max = $scope.routine.duration;
        $scope.countdown = $scope.routine.duration;
        $scope.title = $scope.routine.name;
        breakTime = false;
      }
    }, 1000);
  };

  // start workout when entering view for the first time
  $scope.startWorkout()

  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState){
    // start workout next time we enter view
    if (toState.name === "workout") {
      $scope.startWorkout()
    }
    // on exiting view we cleanup
    if (fromState.name === "workout") {
      $scope.cleanUp();
    }
  });
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
});