/*user can enter a text in textarea 
and it will return how many times character I appears in text.*/
var app = angular.module("countingLetterI", []); 
app.controller("myCtrl", function($scope) {
	$scope.textstring = [];
	$scope.enterText = function(){
		$scope.textstring.push($scope.letterI);
		$scope.str = $scope.textstring[0].toLowerCase();
		document.getElementById("demo").innerHTML = "There are total of " + $scope.str.count('i') + " I's in a text that you have submitted.";
		$scope.letterI = "";
		$scope.textstring = [];
	}
});

/*Inputs text file and displays how many times character I appears in a file*/
window.onload = function() {
	var fileInput = document.getElementById('fileInput');
	var fileDisplayArea = document.getElementById('fileDisplayArea');
	
	fileInput.addEventListener('change', function(e) {
		var file = fileInput.files[0];
		var textType = /text.*/;
		
		if (file.type.match(textType)) {
			var reader = new FileReader();
			
			reader.onload = function(e) {
				var str = reader.result.toLowerCase();
				document.getElementById("fileDisplayArea").innerHTML = "There are total of " + str.count('i') + " I's in a text that you have submitted.";
					
			}

			reader.readAsText(file);
		} 
		else {
			fileDisplayArea.innerText = "File not supported!"
		}
	});
}

/*Calculates how many times specific 
character appears in a string */
String.prototype.count=function(c) { 
	var result = 0, i = 0;
	for(i; i < this.length; i++) {
		if(this[i] == c){
			result++;
		}
	}
	return result;
};