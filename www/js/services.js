angular.module('starter.services', [])

.factory('routines', function() {
  return [
    {
      name: "Hampelmann",
      id: 1,
      duration: 35,
      breakDuration: 10,
      images: ["img/jumpingJacks-1.svg", "img/jumpingJacks-2.svg"]
    }, {
      name: "Wandsitzen",
      id: 2,
      duration: 30,
      breakDuration: 10,
      images: ["img/wallsit.svg"]
    }, {
      name: "Liegestütze",
      id: 3,
      duration: 30,
      breakDuration: 10,
      images: ["img/pushups-1.svg", "img/pushups-2.svg"]
    }, {
      name: "Situps",
      id: 4,
      duration: 30,
      breakDuration: 10,
      images: ["img/abdominalCrunches-1.svg", "img/abdominalCrunches-2.svg"]
    }, {
      name: "Stuhlsteigen",
      id: 5,
      duration: 30,
      breakDuration: 10,
      images: ["img/stepOnChair-1.svg", "img/stepOnChair-2.svg"]
    }, {
      name: "Kniebeugen",
      id: 6,
      duration: 30,
      breakDuration: 10,
      images: ["img/squats-1.svg", "img/squats-2.svg"]
    }, {
      name: "Armbeuge mit Stuhl",
      id: 7,
      duration: 30,
      breakDuration: 10,
      images: ["img/tricepDips-1.svg", "img/tricepDips-2.svg"]
    }, {
      name: "Plank",
      id: 8,
      duration: 30,
      breakDuration: 10,
      images: ["img/plank.svg"]
    }, {
      name: "Laufen",
      id: 9,
      duration: 30,
      breakDuration: 10,
      images: ["img/highKneesRunning-1.svg", "img/highKneesRunning-2.svg"]
    }, {
      name: "Ausfallschritt",
      id: 10,
      duration: 30,
      breakDuration: 10,
      images: ["img/lunges-1.svg", "img/lunges-2.svg"]
    }, {
      name: "Rotierende Liegetütze",
      id: 11,
      duration: 30,
      breakDuration: 10,
      images: ["img/pushups-1.svg", "img/rotatingPushups-1.svg"]
    }, {
      name: "Seitliche Plank",
      id: 12,
      duration: 30,
      breakDuration: 10,
      images: ["img/sidePlank.svg"]
    }
  ];
});
