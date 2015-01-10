angular.module('starter.services', [])

.factory('routines', function() {
  return [
    { name: "Hampelmann", id: 1, duration: 35, breakDuration: 10 },
    { name: "Wandsitzen", id: 2, duration: 30, breakDuration: 10 },
    { name: "Liegestütze", id: 3, duration: 30, breakDuration: 10 },
    { name: "Situps", id: 4, duration: 30, breakDuration: 10 },
    { name: "Stuhlsteigen", id: 5, duration: 30, breakDuration: 10 },
    { name: "Kniebeugen", id: 6, duration: 30, breakDuration: 10 },
    { name: "Armbeuge mit Stuhl", id: 7, duration: 30, breakDuration: 10 },
    { name: "Rotierende Liegetütze", id: 8, duration: 30, breakDuration: 10 },
    { name: "Ausfallschritt", id: 9, duration: 30, breakDuration: 10 },
    { name: "Plank", id: 10, duration: 30, breakDuration: 10 },
    { name: "Laufen", id: 11, duration: 30, breakDuration: 10 },
    { name: "Seitliche Plank", id: 12, duration: 30, breakDuration: 10 },
  ];
});
