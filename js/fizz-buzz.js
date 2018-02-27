$( document ).ready(function() {

    function getNumbers(nums){
		// iterates through these to determine if fiz, buzz or fizzbuzz.
		if(nums % 105 === 0){
			return 'Fizz Buzz Pop'
		} else if (nums % 35 === 0){
			return 'Buzz Pop'
		} else if (nums % 21 === 0){
			return 'Fizz Pop'
		}  else if (nums % 15 === 0){
			return 'Fizz Buzz'
		} else if (nums % 7 === 0){
			return 'Pop'
		} else if(nums % 5 === 0 ){
			return 'Buzz'
		} else if(nums % 3 === 0){
			return 'Fizz'
		} else {
			return nums
		}
	};
	$('#click').click(function(){
		// Gets value from input box.
		var inputValue = document.getElementById("fizz-input").value;
		// appends text to an h2 in the html
		$("#fizz-buzz-output").text(getNumbers(inputValue));
	});
});