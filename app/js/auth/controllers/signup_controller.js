module.exports = exports = function(app) {
  app.controller('SignupController', ['$scope', '$http', '$cookies', '$location', function($scope, $http, $cookies, $location) {
    $scope.headingText = 'Signup for an Account';
    $scope.submitText = 'Create Account';
    $scope.swapPlaces = 'Already Registered?'
    $scope.authenticate = function(user) {
      $http.post('/api/signup', user)
        .then(function(res) {
          $cookies.put('token', res.data.token);
          $scope.getUser();
          $location.path('/states');
        }, function(err) {
          console.log(err.data);
        });
    }

    $scope.changePlaces = function() {
      $location.path('/signin');
    }
  }]);
};
