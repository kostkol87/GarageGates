class MainController {
	constructor($scope, GateService, $state) {

		console.log("in main ctrl");

		$scope.testObj = {wtf: "ok"};

// 		full opening/closing
		$scope.fullOpen = () => {
			console.log("open");
		};
		$scope.fullClose = () => {
			console.log("close");
		};

		$scope.isMoving = false;

// 		movenment up
		$scope.startMovingUp = () => {
			console.log("moving up");
			$scope.isMoving = true;
		};
		$scope.stopMovingUp = () => {
			if ($scope.isMoving){
				console.log("stop moving up");
				$scope.isMoving = false;
			}
		};

// 		movenment down
		$scope.startMovingDown = () => {
			console.log("start moving down");
			$scope.isMoving = true;
		};
		$scope.stopMovingDown = () => {
			if ($scope.isMoving) {
				console.log("stop moving down");
				$scope.isMoving = false;
			}
		};
	}
}

app.controller('MainController', MainController);





