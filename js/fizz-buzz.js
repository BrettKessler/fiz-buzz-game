$( document ).ready(function() {

    function getNumbers(nums){
		// Gets value from input box.

		if(nums % 15 === 0){
			return 'Fizz Buzz'
		} else if(nums % 5 === 0 ){
			return 'Buzz'
		} else if(nums % 3 === 0){
			return 'Fizz'
		}

	};
	$('#click').click(function(){
		var inputValue = document.getElementById("fizz-input").value;
		document.getElementById("fizz-buzz-output").textContent = getNumbers(inputValue);
	});
});





	
