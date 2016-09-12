var i, j;
var nr = 16;
var w = 500;
var h = 500;
var col = "#B0CB1F";
var last_col;
var rand = false;
var last_rand;
$(document).ready( function() {
	for(i = 0; i < nr; i++) {
		$("#grid").append("<tr>");
		for(j = 0; j < nr; j++) {
			$("#grid").append("<td></td>");
		}
		$("#grid").append("</tr>");
	}
	$("#grid td").width(Math.floor(w / nr) - 1 + "px");
	$("#grid td").height(Math.floor(h / nr) - 1 + "px");
	$("body").css("cursor", "url('images/pencil_curs.cur'), url('images/pencil_curs.png'), default");
	$("#grid td").hover(
		function() {
			if(rand) {
				$(this).css("background-color", "rgb(" + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ")");
			} else {
				$(this).css("background-color", col);
			}
		},
		function() {
			//$(this).css("background-color", "white");
		}
	);
	$(".colours").hover(
		function() {
			$(this).css("cursor", "pointer");
			$(this).css("border-color", "#386675");
		},
		function() {
			$(this).css("cursor", "default");
			$(this).css("border-color", "#5FAFC9");
		}
	);
	$(".colours").click( function() {
		rand = false;
		col = $(this).css("background-color");
		$("body").css("cursor", "url('images/pencil_curs.cur'), url('images/pencil_curs.png'), default");
	});
});

function resetGrid() {
	$("#grid").empty();
	for(i = 0; i < nr; i++) {
		$("#grid").append("<tr>");
		for(j = 0; j < nr; j++) {
			$("#grid").append("<td></td>");
		}
		$("#grid").append("</tr>");
	}
	$("#grid td").width(Math.floor(w / nr) - 1 + "px");
	$("#grid td").height(Math.floor(h / nr) - 1 + "px");
};

function resetButton() {
	$("body").css("cursor", "url('images/pencil_curs.cur'), url('images/pencil_curs.png'), default");
	rand = false;
	nr = prompt("How many squares per side should the new grid have?");
	resetGrid();
	if(col === "white") {
		col = last_col;
	}
	$("#grid td").hover(
		function() {
			if(rand) {
				$(this).css("background-color", "rgb(" + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ")");
			} else {
				$(this).css("background-color", col);
			}
		},
		function() {
			//$(this).css("background-color", "white");
		}
	);
};

function trail() {
	$("body").css("cursor", "url('images/pencil_curs.cur'), url('images/pencil_curs.png'), default");
	resetGrid();
	if(col === "white") {
		col = last_col;
		rand = last_rand;
	}
	$("#grid td").hover(
		function() {
			if(rand) {
				$(this).css("background-color", "rgb(" + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ")");
			} else {
				$(this).css("background-color", col);
			}
			$(this).animate({ backgroundColor: "white"}, 700);
		},
		function() {
			//$(this).css("background-color", "white");
		}
	);
}

function erase() {
	last_rand = rand;
	rand = false;
	last_col = col;
	col = "white";
	$("body").css("cursor", "url('images/eraser_curs.cur'), url('images/eraser_curs.png'), default");
}

function pencil() {
	if(col === "white") {
		col = last_col;
	}
	rand = false;
	$("body").css("cursor", "url('images/pencil_curs.cur'), url('images/pencil_curs.png'), default");
}