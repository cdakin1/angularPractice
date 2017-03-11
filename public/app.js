var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.showEdit = [];
    $scope.lastItem = false;
    $scope.addItem = function () {
      $scope.products.push($scope.addMe);
    }
    $scope.editItem = function(index, off) {
      $scope.showEdit[index] = true;
      if(off) {
        $scope.showEdit[index] = false;
      }
    }
    $scope.removeItem = function (x) {
      $scope.products.splice(x, 1);
    }
    $scope.update = function(edit, index) {
      $scope.lastItem = $scope.products[index];
      $scope.products.splice(index, 1, edit);
    }
    // $scope.undo = function(index) {
    //   if($scope.lastItem) {
    //     $scope.products.splice(index, 1, $scope.lastItem);
    //     $scope.lastItem = false;
    //     console.log($scope.lastItem)
    //   };
    //   console.log($scope.lastItem)
    // }
});
