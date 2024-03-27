var topMain;
var topAnimate;
topMain = '220px';
var headline_count;
var headline_interval;
var old_headline = 0;
var current_headline = 0;
var isFirstTime = true;

var ie8plus;
var xmlHttp; 
var ActType;

function popReport(strJobID) {
    window.open('jobview_print.asp?id=' + strJobID, 'sharer', 'scrollbars=no,position=absolute,status=no,location=no,toolbar=no,menubar=no,width=1,height=1,left=-1000,top=-1000');
}
$(document).ready(function() {
    $('.jaguid .jacm [data-toggle="tooltip"]').tooltip();
    $('.intp').hide();
    $('.showintp').click(function() {
        $('.intp').slideToggle(500);
        $("html, body").animate({ scrollTop: $(document).height() }, 500);
    });
    $('.intp ul li').click(function() {
        $('.intp').slideUp(500);
    });
});

function popbox() {}

function EmailToFriend(width, height) {
    var x = (640 - width) / 2,
        y = (480 - height) / 2;
    if (screen) {
        y = (screen.availHeight - height) / 2;
        x = (screen.availWidth - width) / 2;
    }
    document.getElementById("frmEmailToFriend").submit();
}

function GetXmlHttpObject() {
    xmlHttp = null;
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlHttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlHttp;
}

function stateChanged() {
    var strResponseText;
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            if (LoadType == "FLW") {
                strResponseText = xmlHttp.responseText;
                if (strResponseText.trim() == "") {
                    CreateMessageBox("failure", 'Invalid request! ');
                    ActType = 1;
                } else {
                    $("#btnImg").toggleClass("icon-plus icon-times-o");
                    if (strResponseText == "1") {
                        CreateMessageBox("success", 'You have already followed this employer.');
                        ActType = 2;
                        document.getElementById("btnText").innerHTML = "Unfollow";
                    } else if (strResponseText == "2") {
                        CreateMessageBox("success", 'You have successfully followed this employer. You can see this employer at your <b>My Bdjobs</b> Account.');
                        ActType = 2;
                        document.getElementById("btnText").innerHTML = "Unfollow";
                    } else if (strResponseText == "3") {
                        CreateMessageBox("success", 'You have successfully unfollowed this employer. This employer will be removed from your Following Employer list at your <b>My Bdjobs</b> Account. ');
                        ActType = 1;
                        document.getElementById("btnText").innerHTML = "Follow";

                    } else if (strResponseText == "4") {
                        CreateMessageBox("information", 'Please <b>Sign in</b> to use this feature.');
                        ActType = 1;
                        document.getElementById("btnText").innerHTML = "Follow";
                        $("#btnImg").toggleClass("icon-plus icon-times-o");
                    } else {
                        CreateMessageBox("failure", 'Invalid request! ');
                        ActType = 1;
                        $("#btnImg").toggleClass("icon-plus icon-times-o");
                        document.getElementById("btnText").innerHTML = "Follow";
                    }
                }
            }


        }
    }
}

function stateChangedUpdate(jobid) {
    var strResponseText;
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            if (LoadType == "FLW") {
                strResponseText = xmlHttp.responseText;
                if (strResponseText.trim() == "") {
                    CreateMessageBox("failure", 'Invalid request! ');
                    ActType = 1;
                } else {
                    $("#btnImg").toggleClass("icon-plus icon-times-o");
                    if (strResponseText == "1") {
                        CreateMessageBox("success", 'You have already followed this employer.');
                        ActType = 2;
                        document.getElementById("btnText").innerHTML = "Unfollow";
                    } else if (strResponseText == "2") {
                        CreateMessageBox("success", 'You have successfully followed this employer. You can see this employer at your <b>My Bdjobs</b> Account.');
                        ActType = 2;
                        document.getElementById("btnText").innerHTML = "Unfollow";
                    } else if (strResponseText == "3") {
                        CreateMessageBox("success", 'You have successfully unfollowed this employer. This employer will be removed from your Following Employer list at your <b>My Bdjobs</b> Account. ');
                        ActType = 1;
                        document.getElementById("btnText").innerHTML = "Follow";

                    } else if (strResponseText == "4") {
                        CreateMessageBox("information", 'Please <b>Sign in</b> to use this feature.');
                        ActType = 1;
                        document.getElementById("btnText").innerHTML = "Follow";
                        $("#btnImg").toggleClass("icon-plus icon-times-o");
                    } else {
                        CreateMessageBox("failure", 'Invalid request! ');
                        ActType = 1;
                        $("#btnImg").toggleClass("icon-plus icon-times-o");
                        document.getElementById("btnText").innerHTML = "Follow";
                    }
                }
            }

            if (LoadType = "sl") {
                document.getElementById("shortlist").innerHTML = "<a  href=\"javascript:ShortlistJobs(" & jobid & ",0)\" style=\"color: #337ab7 !important;\" onclick=\"ga('send', 'event', '', 'click', 'Shortlist this job', 2);\" ><i class=\"icon-star\" ></i>&nbsp;Shortlisted</a>";
                alert("Successfully shortlisted.");
            }
        }
    }
}

function Shortlistjobs(jobid) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            shortlistedjobs = this.responseText;
            if (shortlistedjobs == "1") {

                document.getElementById("sljobs").innerHTML = '<a style="color: #337ab7 !important;"  href="javascript:Shortlistjobs(' + jobid + ');" onclick="ga(\'send\', \'event\', \'jobdetails\', \'click\', \'Shortlist this job\', 2);" ><i class="icon-star" ></i>&nbsp;Shortlisted</a>';
                //document.getElementById("sljobs").innerHTML ='<a  href="#" style="color: #337ab7 !important;" ><i class="icon-star" ></i>&nbsp;Shortlisted</a>';
            } else if (shortlistedjobs = "2") {
                document.getElementById("sljobs").innerHTML = '<a title="Cancel Shortlist"   href="javascript:Shortlistjobs(' + jobid + ');" onclick="ga(\'send\', \'event\', \'jobdetails\', \'click\', \'Shortlist this job\', 2);" ><i class="icon-star" ></i>&nbsp;Shortlist this job </a>'
            }

        }
    };
    url = "shortlistmyjobs.asp?jobid=" + jobid;
    xhttp.open("GET", url, true);
    xhttp.send();

}

function FollowEmployers(ComID, ComName) {
    xmlHttp = GetXmlHttpObject();
    if (xmlHttp == null) {
        window.location.href = gURL;
        return;
    }
    if (ActType == 1) {
        tmpActType = "Fei";
    }
    if (ActType == 2) {
        tmpActType = "Fed";
    }
    url = "//jobs.bdjobs.com/followeremployer.asp?id=" + ComID + "&name=" + ComName + "&ActType=" + tmpActType;
    LoadType = "FLW";

    xmlHttp.onreadystatechange = stateChanged;
    xmlHttp.open("POST", url, true);

    if (ie8plus == true) {
        xmlhttp.send();
    } else {
        xmlHttp.setRequestHeader("Content-length", url.length);
        xmlHttp.send(url);
    }

}

$(document).ready(function() {
   // enquire.register("screen and (max-width: 991px)", {
//        match: function() {
//            $(".job-preview .m-view").appendTo(".job-preview .m-class");
//        },
//        unmatch: function() {
//            $(".job-preview .m-view").appendTo(".job-preview .right-wrapper");
//        }
//    });
    $(document).on("click", '.assessment .btn-question', function() {
        if ($(this).attr("aria-describedby") != undefined) {
            $(this).popover('destroy');
        } else {
            $(".assessment .btn-question").popover('destroy');
            $(this).popover({
                content: function() {
                    return $(this).attr('data-html');
                },
                html: true,
                placement: 'auto',
                trigger: 'manual'
            }).popover('show');
        }
    });
    $(document).on("click", ".assessment .close", function() {
        $(".assessment .btn-question").popover('destroy');
    });
    $(document).mouseup(function(e) {
        var container = $(".btn-question,.popover");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $(".assessment .btn-question").popover('destroy');
        }
    });
});

//NVDA update work add here
var isHighlightLink=false;
$(document).on("click", "#f-linkh", function() {                    
    isHighlightLink=(isHighlightLink?false:true);
});

var isHighLightedHeading=false;
$(document).on("click", "#f-sheadns", function() { 
  isHighLightedHeading=(isHighLightedHeading?false:true);
});

slAction = "";

function ShortlistJobsUpdate(jobid, ActType, ln) {

    text = "";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            shortlistedjobs = this.responseText;
            if (shortlistedjobs == "0") {
                //alert("1");

                if (parseInt(ActType) == 1) {
                    text = "Remove from shortlist";

                    showToastMessage(3000, "This job has been successfully shortlisted.");
                    document.getElementById("shortlist").innerHTML = "<a style=\"color: #337ab7 !important;\" href=\"javascript:ShortlistJobsUpdate(" + jobid + ",0,'" + ln + "');\" onclick=\"ga('send\', 'event', 'jobdetails','click\, 'Shortlist this job', 2);\" ><i class=\"icon-star\" ></i>&nbsp;" + text + "</a>";
                    //document.getElementById("sljobs").innerHTML ='<a  href="#" style="color: #337ab7 !important;" ><i class="icon-star" ></i>&nbsp;Shortlisted</a>';

                } else if (parseInt(ActType) == 7) {
                    showToastMessage(3000, "This job has already been shortlisted.");
                } else if (parseInt(ActType) == 0) {
                    text = "Shortlist this job";

                    showToastMessage(3000, "You have removed this job from shortlist.");
                    document.getElementById("shortlist").innerHTML = "<a style=\"\" href=\"javascript:ShortlistJobsUpdate(" + jobid + ",1,'" + ln + "');\" onclick=\"ga('send\', 'event', 'jobdetails','click\, 'Shortlist this job', 2);\" ><i class=\"icon-star\" ></i>&nbsp;" + text + "</a>";

                }

                //NVDA update work add here
                if(isHighlightLink){
                    $("a").removeClass("lnk-highlited").addClass("lnk-highlited");
                    $("button").removeClass("lnk-highlited").addClass("lnk-highlited");
                    $('input[type="submit"],input[type="button"]').removeClass("lnk-highlited").addClass("lnk-highlited");
                }

                if(isHighLightedHeading){
                    var $affectedElementsmm = $("h1, h2, h3, h4, h5, h6, [role=heading]");
                    $affectedElementsmm.each(function () {
                        $(this).removeClass("headings-highlited").addClass("headings-highlited");
                    });
                }
            }

        }
    };
    url = "//jobs.bdjobs.com/ajShortlistJob.asp?jobid=" + jobid + "&ln=" + ln + "&ActType=" + ActType;
    xhttp.open("Post", url, true);
    xhttp.send();


}

function FollowComUpdate(comid, ActType, ln, ComName) {

    text = "";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            followjobs = this.responseText;

            if (followjobs == "0") {

                text = "Unfollow";

                showToastMessage(3000, "You have successfully followed this employer.");

                document.getElementById("followbutton").innerHTML = "<a  class=\"btn btn-default\"  href=\"javascript:FollowComUpdate(" + comid + ",'fed','en','" + encodeURI(ComName) + "');\"><i id=\"btnImg\" class=\"icon-times-o\"></i>&nbsp;<span id=\"btnText\">" + text + "</span></a>";

            } else if (followjobs == "7") {
                text = "Unfollow";
                showToastMessage(3000, "You have already followed this employer.");
                document.getElementById("followbutton").innerHTML = "<a  class=\"btn btn-default\"  href=\"javascript:FollowComUpdate(" + comid + ",'fed','en','" + encodeURI(ComName) + "');\"><i id=\"btnImg\" class=\"icon-times-o\"></i>&nbsp;<span id=\"btnText\">" + text + "</span></a>";
            } else if (followjobs == "9") {
                text = "Follow";

                showToastMessage(3000, "You have removed this employer from your followed employer list.");
                document.getElementById("followbutton").innerHTML = "<a  class=\"btn btn-default\"  href=\"javascript:FollowComUpdate(" + comid + ",'fei','bn','" + encodeURI(ComName) + "');\"><i id=\"btnImg\" class=\"icon-plus\"></i>&nbsp;<span id=\"btnText\">" + text + "</span></a>";
                //alert("2");

            }


            //NVDA update work add here
            if(isHighlightLink){
                $("a").removeClass("lnk-highlited").addClass("lnk-highlited");
                $("button").removeClass("lnk-highlited").addClass("lnk-highlited");
                $('input[type="submit"],input[type="button"]').removeClass("lnk-highlited").addClass("lnk-highlited");
            }

            if(isHighLightedHeading){
                var $affectedElementsmm = $("h1, h2, h3, h4, h5, h6, [role=heading]");
                $affectedElementsmm.each(function () {
                    $(this).removeClass("headings-highlited").addClass("headings-highlited");
                });
            }

        }
    };

    url = "//jobs.bdjobs.com/ajfollow.asp";
    params = "id=" + comid + "&name=" + ComName + "&ActType=" + ActType;
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(params);


}

function showToastMessage(param, strText) {

    $(".confirmation-message").animate({ opacity: '1', bottom: '50px' }).addClass('show');
    $(".confirmation-message").attr({"tabIndex":"-1", "aria-live":"assertive"});
    setTimeout(function() {
        $(".confirmation-message.show").animate({ opacity: '0', bottom: '-100px' }).fadeOut('slow');
        $(".confirmation-message").removeAttr("tabIndex","aria-live");
    }, param);

    document.getElementById("toastmessagebox").innerHTML = strText;
}

function NoJobApply(jobid) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            IntNoJobApply = this.responseText;
        }
    }
    url = "NoJobApply.asp?jobid=" + jobid;
    xhttp.open("GET", url, true);
    xhttp.send();
}

function CreateHTMLPOpUP(ComName, IsBangla, JobNo) {
    //IsBangla=1
    var strJobDetailsPopUp = "";
    if (IsBangla == "0") {
        strJobDetailsPopUp += "<div  class=\"ap-title\">Online Application<\/div>            ";
        strJobDetailsPopUp += "<div class=\"oap-des\">This employer will be able to review your application and may call you for the interview. Will you appear if the employer calls for the interview? If you do not appear then the employer (" + ComName + ") can report to Bdjobs.com which will affect your future applications to other employers.  Are you sure that you will appear for the interview?<\/div>";
        strJobDetailsPopUp += "<div class=\"adbtn\">";
        strJobDetailsPopUp += "    <div class=\"row\">";
        strJobDetailsPopUp += "        <div class=\"col-sm-6 text-center\">";
        strJobDetailsPopUp += "            <a class=\"btn acpt\" href=\"javascript:document.getElementById('frmJobApplication').submit();\">Yes, I will appear in interview<\/a>";
        strJobDetailsPopUp += "        <\/div>";
        strJobDetailsPopUp += "        <div class=\"col-sm-6 text-center\">";
        strJobDetailsPopUp += "            <a class=\"btn deny\" data-dismiss=\"modal\" onclick=\"NoJobApply(" + JobNo + ")\" aria-label=\"Close\">Not interested to apply<\/a>";
        strJobDetailsPopUp += "        <\/div>";
        strJobDetailsPopUp += "    <\/div>";
        strJobDetailsPopUp += "<\/div>";
        strJobDetailsPopUp += "<div class=\"btr-txt-bn\">";
        strJobDetailsPopUp += "    <a href=\"javascript:CreateHTMLPOpUP('" + ComName + "', 1);\">বাংলায় দেখুন<\/a>";
        strJobDetailsPopUp += "<\/div>";
    } else {
        strJobDetailsPopUp += "<div class=\"ap-title\">Online Application<\/div>";
        strJobDetailsPopUp += "<div class=\"oap-des-bn\">আপনার আবেদনের প্রেক্ষিতে এই নিয়োগকারী প্রতিষ্ঠান (" + ComName + ") আপনাকে ইন্টারভিউ এর জন্য কল করতে পারে।  কোন কারনে আপনি ইন্টারভিউতে উপস্থিত না হলে এই নিয়োগকর্তা Bdjobs.com এ রিপোর্ট করতে পারে। যার ফলে অন্য প্রতিষ্ঠানে আপনার ইন্টারভিউ কল পাবার সম্ভাবনা কমে যেতে পারে। আপনি কি নিশ্চিত যে আপনি ইন্টারভিউ কল পেলে ইন্টারভিউ দিতে উপস্থিত থাকবেন?<\/div>";
        strJobDetailsPopUp += "<div class=\"adbtn\">";
        strJobDetailsPopUp += "    <div class=\"row\">";
        strJobDetailsPopUp += "        <div class=\"col-sm-6 text-center\">";
        strJobDetailsPopUp += "            <a class=\"btn acpt-bn\" href=\"javascript:document.getElementById('frmJobApplication').submit();\">হ্যাঁ, আমি ইন্টারভিউ দিবো<\/a>";
        strJobDetailsPopUp += "        <\/div>";
        strJobDetailsPopUp += "        <div class=\"col-sm-6 text-center\">";
        strJobDetailsPopUp += "            <a class=\"btn deny-bn\" onclick=\"NoJobApply(" + JobNo + ")\"  data-dismiss=\"modal\" aria-label=\"Close\">অ্যাপ্লাই করতে ইচ্ছুক না<\/a>";
        strJobDetailsPopUp += "        <\/div>";
        strJobDetailsPopUp += "    <\/div>";
        strJobDetailsPopUp += "<\/div>";
        strJobDetailsPopUp += "<div class=\"btr-txt\">";
        strJobDetailsPopUp += "    <a href=\"javascript:CreateHTMLPOpUP('" + ComName + "', 0);\">Translate into English<\/a>";
        strJobDetailsPopUp += "<\/div>";
    }
    $("#modal-body").html(strJobDetailsPopUp) 
} 

function CreateHTMLPopup_new(ComName, IsBangla, JobNo) {
    //IsBangla=1
    var strJobDetailsPopUp1 = "";
    strJobDetailsPopUp1 += "	<div class=\"modal-dialog alert-danger\" role=\"document\">";
    strJobDetailsPopUp1 += "		<div class=\"modal-content\">";
    strJobDetailsPopUp1 += "			<div class=\"modal-header\">";
    strJobDetailsPopUp1 += "				<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"close\">&times;<\/button>";
    strJobDetailsPopUp1 += "				<h4 class=\"modal-title\"><span class=\"bn\" style=\" font-weight: 600;\">সতর্কবার্তা<\/span><span class=\"en\" style=\" font-weight: 600;\">Warning Message<\/span>";
    strJobDetailsPopUp1 += "				<\/h4>";
    strJobDetailsPopUp1 += "			<\/div>";
    strJobDetailsPopUp1 += "			<div class=\"modal-body\">";
    strJobDetailsPopUp1 += "				<p style=\"margin-bottom: 20px;\"><span class=\"bn\" style=\"font-size: 14px;\">বিডিজবস শুধুমাত্রই নিয়োগকর্তা এবং চাকরিপ্রার্থীদের মাঝে যোগাযোগ মাধ্যম";
    strJobDetailsPopUp1 += "						হিসেবে কাজ করে। বিডিজবস ওয়েবসাইটের মাধ্যমে চাকরিতে";
    strJobDetailsPopUp1 += "						আবেদন করার পর কোম্পানি যদি আপনার সাথে কোনো আর্থিক লেনদেন অথবা অনিয়ম/প্রতারণা করে তার জন্য";
    strJobDetailsPopUp1 += "						Bdjobs.com Limited";
    strJobDetailsPopUp1 += "						দায়ী থাকবে না। <\/span><span class=\"en\" style=\"font-size: 14px !important;\">Bdjobs.com only works as a mean of communication between employers and job-seekers.";
    strJobDetailsPopUp1 += "						Bdjob.com Limited will not be responsible for ";
    strJobDetailsPopUp1 += "						any financial transaction or irregularity/ fraud by the company after ";
    strJobDetailsPopUp1 += "						applying through the bdjobs.com website.";
    strJobDetailsPopUp1 += "					<\/span>";
    strJobDetailsPopUp1 += "				<\/p>";
    strJobDetailsPopUp1 += "";
    strJobDetailsPopUp1 += "				<div class=\"checkbox term-agree\">";
    strJobDetailsPopUp1 += "					<label><input type=\"checkbox\" style=\"\" id =\"chkApplybtn\" value=\"\"><span class=\"bn\" style=\"font-size: 14px;\" >উপরোক্ত সতর্ক বার্তাটি আমি পড়েছি ";
    strJobDetailsPopUp1 += "							<\/span><span class=\"en\" style=\"font-size: 14px !important;\" >I have read the above warning message.";
    strJobDetailsPopUp1 += "							<\/span><\/label>";
    strJobDetailsPopUp1 += "				<\/div>";
    strJobDetailsPopUp1 += "				<div class=\"apply-btn text-center\" style=\"margin-top: 25px;\">";
    strJobDetailsPopUp1 += "					<button class=\"btn acptCondition\" disabled=\"disabled\" id=\"applyBtnId\" data-dismiss=\"modal\" onclick = \"formSubmit()\"><span class=\"bn\">আবেদন<\/span><span";
    strJobDetailsPopUp1 += "							class=\"en\">Apply<\/span><\/button>";
    strJobDetailsPopUp1 += "				<\/div>";
    strJobDetailsPopUp1 += "			<\/div>";
    strJobDetailsPopUp1 += "			<div class=\"translate text-right\"><button class=\"btn\"><span class=\"bn\">Translate into";
    strJobDetailsPopUp1 += "						English<\/span><span class=\"en\">বাংলায় দেখুন<\/span><\/button><\/div>";
    strJobDetailsPopUp1 += "		<\/div>";
    strJobDetailsPopUp1 += "	<\/div>";

    $("#appliTermsModal").html(strJobDetailsPopUp1)


    //NVDA update work add here
    if(isHighlightLink){
        $("a").removeClass("lnk-highlited").addClass("lnk-highlited");
        $("button").removeClass("lnk-highlited").addClass("lnk-highlited");
        $('input[type="submit"],input[type="button"]').removeClass("lnk-highlited").addClass("lnk-highlited");
    }

    if(isHighLightedHeading){
        var $affectedElementsmm = $("h1, h2, h3, h4, h5, h6, [role=heading]");
        $affectedElementsmm.each(function () {
            $(this).removeClass("headings-highlited").addClass("headings-highlited");
        });
    }
}

// $(document).on('click', '#chkApplybtn', function() {

//     if ($(this).prop("checked") == true) {
//         $(".acptCondition").removeClass("disabled");
//     } else {
//         $(".acptCondition").addClass("disabled") 
//     }
// });

$(document).on('click', '#chkApplybtn', function() {

    if ($(this).prop("checked") == true) {
        $("#applyBtnId").removeAttr("disabled");
    } else {
        $("#applyBtnId").attr( "disabled", "disabled" );
    }
});

$(document).on('click', '#appliTermsModal .translate .btn', function() {
    $(this).parents('#appliTermsModal').toggleClass('bangla english');
});

function formSubmit() {
    $('#frmJobApplication').submit();
}

// $('#appliTermsModal .apply-btn .btn').prop("disabled", true);
// $("#appliTermsModal .term-agree label").click(function() {
//     if ($(this).find('input[type="checkbox"]').prop("checked") == true) {
//         $('#appliTermsModal .apply-btn .btn').prop("disabled", false);
//     } else {
//         $('#appliTermsModal .apply-btn .btn').prop("disabled", true);
//     }
// });
function CreateHTMLPopup_bdesh() {
    //IsBangla=1
    var strJobDetailsPopUp1 = "";
    strJobDetailsPopUp1 += "	<div class=\"modal-dialog alert-danger\" role=\"document\">";
    strJobDetailsPopUp1 += "		<div class=\"modal-content\">";
    strJobDetailsPopUp1 += "			<div class=\"modal-header\" style=\"background-color: #ff98004d;\">";
    strJobDetailsPopUp1 += "				<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"close\">&times;<\/button>";
    strJobDetailsPopUp1 += "				<h4 class=\"modal-title\"><span class=\"bn\" style=\" font-weight: bold;\">সতর্কবার্তা<\/span><span class=\"en\">Warning<\/span>";
    strJobDetailsPopUp1 += "				<\/h4>";
    strJobDetailsPopUp1 += "			<\/div>";
    strJobDetailsPopUp1 += "			<div class=\"modal-body\" style=\"background-color: #cddc3917;\">";
    strJobDetailsPopUp1 += "				<p style=\"margin-bottom: 20px;\"><span class=\"bn\" style=\"font-size: 18px;\">এটি একটি বিদেশের চাকরির বিজ্ঞাপন।";
    strJobDetailsPopUp1 += "						এই চাকরির কোনো অসত্য বা অসম্পূর্ণ তথ্যের দায় বিডিজবস-এর নয়। তথ্য /বিজ্ঞাপন বা নিয়োগ-প্রক্রিয়ার দায়-দায়িত্ব স্ব-স্ব নিয়োগকারী প্রতিষ্ঠানের।";
    strJobDetailsPopUp1 += "						চাকরিপ্রার্থীদের নিজ দায়িত্বে  সতর্কতার সাথে চাকরির আবেদনের জন্য পরামর্শ ";
    strJobDetailsPopUp1 += "						দেওয়া হচ্ছে। <\/span><span class=\"en\" style=\"font-size: 16px !important;\">This is an overseas job announcement.";
    strJobDetailsPopUp1 += "						Individual Organizations are responsible for the job description or recruitment process published by Bdjobs.com Website. ";
    strJobDetailsPopUp1 += "						Bdjobs.com Limited is not liable on account of any incomplete or untrue information.";
    strJobDetailsPopUp1 += "						Job seekers are advised to apply with caution.";
    strJobDetailsPopUp1 += "					<\/span>";
    strJobDetailsPopUp1 += "				<\/p>";
    strJobDetailsPopUp1 += "";
    strJobDetailsPopUp1 += "				<div class=\"apply-btn text-center\" style=\"margin-top: 25px;\">";
    strJobDetailsPopUp1 += "					<button class=\"btn\" data-dismiss=\"modal\"><span class=\"bn\">ঠিক আছে <\/span><span";
    strJobDetailsPopUp1 += "							class=\"en\">OK<\/span><\/button>";
    strJobDetailsPopUp1 += "				<\/div>";
    strJobDetailsPopUp1 += "			<\/div>";
    strJobDetailsPopUp1 += "			<div class=\"translate text-right\"><button class=\"btn\"><span class=\"bn\">Translate into";
    strJobDetailsPopUp1 += "						English<\/span><span class=\"en\">বাংলায় দেখুন<\/span><\/button><\/div>";
    strJobDetailsPopUp1 += "		<\/div>";
    strJobDetailsPopUp1 += "	<\/div>";

    $("#appliTermsModal").html(strJobDetailsPopUp1)
}