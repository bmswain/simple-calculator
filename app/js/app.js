
angular.module("simpleCalculator", [])
.controller("CalcController", function($scope) {
  $scope.equals = "=";
  $scope.clear = "C";
  $scope.clearOutput = true;
  $scope.output = "0";
  $scope.operandA = 0;
  $scope.operandB = 0;
  $scope.digits = ["7","8","9","4","5","6","1","2","3","0"];
  $scope.operators = ["/","*","-","+"];
  $scope.operations = {
    "/": function (a,b) { return a / b },
    "*": function (a,b) { return a * b },
    "-": function (a,b) { return a - b },
    "+": function (a,b) { return a + b }
  };

  $scope.clearClick = function () {
    $scope.clearOutput = true;
    $scope.output = "0";
    $scope.operandA = 0;
    $scope.operandB = 0;
    $scope.operator = null;
  };

  $scope.digitClick = function (digit) {
    if ($scope.clearOutput) {
        $scope.output = digit;
        $scope.clearOutput = false;
    } else {
        $scope.output += digit;
    }
    $scope.operandB = convertToNumber($scope.output);
  };

  $scope.operatorClick = function (operator) {
    $scope.operator = operator;
    $scope.operandA = convertToNumber($scope.output);
    $scope.clearOutput = true;
  };

  $scope.equalsClick = function () {
    if($scope.operator !== null) {
      var operation = $scope.operations[$scope.operator];
      $scope.output = operation($scope.operandA, $scope.operandB);
      $scope.clearOutput = true;
      $scope.operandA = $scope.output;
    }
  };

  convertToNumber = function (string) {
    return string * 1;
  }
});

