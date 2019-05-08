// Back to top button script //
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
	}
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};


//onload event to make the javascript run as soon as the page loads
window.addEventListener("load", function() { 
	// Model Menu Drop Down script //
	var panel = document.getElementById('sections_panel'), 
		navarrow = document.getElementById("navarrow"),
		arrow = document.getElementById("arrow");
	
	navarrow.addEventListener("click", function() {
			if(panel.style.display == "block"){
				panel.style.display = "none";
				arrow.innerHTML = "▼";
			} else {
				panel.style.display = "block";
				arrow.innerHTML = "▲";
			}
		});
	
	window.onclick = function(event) {
		if (event.target == panel) {
			panel.style.display = "none";
			arrow.innerHTML = "▼";
		}
	};
    
});

//deprecated code that may be used later

//  2nd Model Menu Drop Down script 
//var panel2 = document.getElementById('sections_panel2'), 
//	navarrow2 = document.getElementById("navarrow2"),
//	arrow2 = document.getElementById("arrow2");
//
//navarrow2.addEventListener("click", function() {
//		if(panel2.style.display == "block"){
//			panel2.style.display = "none";
//			arrow2.innerHTML = "▼";
//		} else {
//			panel2.style.display = "block";
//			arrow2.innerHTML = "▲";
//		}
//		window.onclick = function(event) {
//				if (event.target == panel2) {
//					panel2.style.display = "none";
//					arrow2.innerHTML = "▼";
//				}
//			}
//	});