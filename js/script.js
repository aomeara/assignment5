(function(){
    
	var images = ["images/austin.jpg","images/citipix_skyline.jpg","images/la.jpg","images/nyc.jpg","images/sf.jpg","images/sydney.jp"];    

	function changeImage(arrayIndex) {
		$("body").css("background", 'url(' + images[arrayIndex] + ')')
	}

	function updateHandler() {
		var input = $("#city-type").val();
		var city = input.toLowerCase();
		console.log(city);

		if (city === "new york" || city === "new york city" || city === "nyc" ) {
			changeImage(3);
		}

		return false;
	}


	$("#city-form").submit(updateHandler);



})();





// user enters an city name into #city-type input field
// this is submitted by either pressing submit or the enter key
// if the users entry matches a city keyword then the background image changes
// if the entry doesn't match a city keyword revert to original background



//--------------------


//		Call $.val() on inputs to get the string value of your user's input
//		Store user input in var city
//		Use $.on(submit) or $.click to figure out when the user clicks the "submit" button
//		Create if / else if / else conditionals to control the flow of your application
//Write at least six different lines of pseudocode and display them inline as JavaScript comments
//		Prevent a form submission using the event.preventDefault() function
//Use the $.ready() handler to delay your code from executing until all DOM assets have been loaded
//Get the first element from an attribute name using $.attr()
//Use the || operator in your conditionals to allow for multiple string values to execute if/else if statement code
//If a user submits:
		//"New York" or "New York City" or "NYC" make the background of the page nyc.jpg
		//"San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
		//"Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
		//"Austin" or "ATX" make the background of the page austin.jpg
		//"Sydney" or "SYD" make the background of the page sydney.jpg 