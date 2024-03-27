// JavaScript Document

function closeMessageBox () {
    $("#msgBox,#vDiv").remove();
}
$(document).mouseup(function (e) {
    var container = $("#tmpLegend");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $("#msgBox,#vDiv").remove();
    }
});
//Create Message Box in Javascript for AJAX Call 
function CreateMessageBox(strType, strMsg)
{ 
	if (strType.toLowerCase()=="information") {
	    tmpImg = "infoMsg";
	}
	else if (strType.toLowerCase()=="failure") {
	    tmpImg = "failMsg";
	}
	else if (strType.toLowerCase()=="success") {
	    tmpImg = "sucsMsg";
	}
	else {
	    tmpImg = "";
	}
	tmpMsg = "<table class='msg-table'>";
    tmpMsg = tmpMsg + "<tr>";
	tmpMsg = tmpMsg + "<td class='msg-icon'>";
	tmpMsg = tmpMsg + "<img src='/images/" + tmpImg + ".png' width='50px' height='50px'>";
	tmpMsg = tmpMsg + "</td>";
    tmpMsg = tmpMsg + "<td>";
    tmpMsg = tmpMsg + "<span class='msg-text'>" + strMsg + "</span>";
    tmpMsg = tmpMsg + "</td>";
    tmpMsg = tmpMsg + "</tr>";
    tmpMsg = tmpMsg + "</table>";
    tmpMsg = tmpMsg + "<br><div align='center'><input type='button' class='btn btn-success' name='btnMsg' id='btnMsg' value='ok' onclick=\"closeMessageBox()\" /></div>";
	tmpMsg = "<div id='msgBox'><div id='tmpLegend'>" + tmpMsg + "</div></div>";
	$('body').append(tmpMsg + "<div id='vDiv'></div>");
}