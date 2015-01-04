var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
app.initialize();

var app = angular.module('MyApp', ["ngRoute", "ngMaterial"]);
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/settings', {
            templateUrl: 'templates/settings.html',
            controller: 'SettingsCtrl'
        })
        .when('/settings/allRoutineTimes', {
            templateUrl: 'templates/settings-allRoutineTimes.html',
            controller: 'AllRoutineTimesCtrl'
        })
        .when('/settings/individualRoutineTimes', {
            templateUrl: 'templates/settings-individualRoutineTimes.html',
            controller: 'IndividualRoutineTimesCtrl'
        })
        .when('/', {
            templateUrl: 'templates/main.html',
            controller: 'MainCtrl'
        });
});