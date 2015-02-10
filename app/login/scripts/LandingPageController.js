angular.module('login')
.controller('LandingPageController', function($scope, supersonic) {
    if(Parse.User.current() && localStorage["pin"]) {
        supersonic.ui.layers.push("login#enterPin");
    }else {
        supersonic.ui.layers.push("login#registerPhone");
    }
});
