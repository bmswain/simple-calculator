
var app = angular.module("simpleCalculator", []);

app.controller("CalcController", function($scope) {
  $scope.equals = "=";
  $scope.clear = "C";
  $scope.clearDisplay = true;
  $scope.output = "0";
  $scope.tempNumberA = 0;
  $scope.tempNumberB = 0;
  $scope.digits = ["7","8","9","4","5","6","1","2","3","0"];
  $scope.operators = ["/","*","-","+"];
  $scope.operations = {
    "/": function (a,b) { return a / b },
    "*": function (a,b) { return a * b },
    "-": function (a,b) { return a - b },
    "+": function (a,b) { return a + b }
  };

  $scope.clearClick = function () {
    $scope.clearDisplay = true;
    $scope.output = "0";
    $scope.tempNumberA = 0;
    $scope.tempNumberB = 0;
    $scope.currentOperator = null;
  };

  $scope.digitClick = function (digit) {
    if ($scope.clearDisplay) {
        $scope.output = digit;
        $scope.clearDisplay = false;
    } else {
        $scope.output += String(digit);
    }
    $scope.tempNumberB = convertToNumber($scope.output);
  };

  $scope.operatorClick = function (operator) {
    $scope.currentOperator = operator;
    $scope.tempNumberA = convertToNumber($scope.output);
    $scope.clearDisplay = true;
  };

  $scope.equalsClick = function () {
    if($scope.currentOperator !== null) {
      var operation = $scope.operations[$scope.currentOperator];
      $scope.output = operation($scope.tempNumberA, $scope.tempNumberB);
      $scope.clearDisplay = true;
      $scope.tempNumberA = $scope.output;
    }
  };

  convertToNumber = function (string) {
    return string * 1;
  }
});