/*
 * ripper.js - a script to grab solutions from chegg
 * By Elbert Basolis (elby@basolis.com)
 * https://github.com/elby22/CheggRipper
 *
 * Disclaimer: I assume no responsibility for the use of this software. 
 * This is a proof cof concept only not intended to infringe copyright or violate any laws anywhere.
 */

//Clones the canvas
function cloneCanvas(oldCanvas) {

    //create a new canvas
    var newCanvas = document.createElement('canvas');
    var context = newCanvas.getContext('2d');

    //set dimensions
    newCanvas.width = oldCanvas.width;
    newCanvas.height = oldCanvas.height;

    //apply the old canvas to the new one
    context.drawImage(oldCanvas, 0, 0);

    //return the new canvas
    return newCanvas;
}

//Main logic: gets all the good stuff from the page, and advances to the next
function ripPage(){
	//Get next Chapter/Problem text
	var nextProblem = $('.next-problem-label').text();

	//Get all html for the problem
	var steps = $('.solution-player-steps').children();
	for(var i = 0; i < steps.size(); i++){

		//This only works for non-canvas elements
		var stepInfo = $(steps[i]).find(".step-content").children().first();


		if($(stepInfo[0]).html() === ""){
			$(newDoc.body).append(cloneCanvas(stepInfo[0]));
			$(newDoc.body).append("<br>");		
		}else{
			$(newDoc.body).append(stepInfo.html());
		}
	}

	//Add next problem header
	$(newDoc.body).append('<br><u><h1 style="font-weight: bold">' + nextProblem + '</h1></u><br>');

	console.log("next problem"  + nextProblem);
	//Its probably gonna have more than 1 problem in the book
	$('.next-problem').click();
}

/*
 *Run these lines first
 */

//New doc to put this info in
var impl = document.implementation;
var newDoc = impl.createHTMLDocument("Chegg output");

$(newDoc.body).append('<h1 style="font-weight: bold">FIRST PROBLEM</h1>');


/*
 *Run the ripPage() function as many times as you want
 *Then run the last two lines to generate the new document
 */

//Write new document to screen
newDoc.body.style.margin = "10px 10px 10px 10px";
document.body = newDoc.body;