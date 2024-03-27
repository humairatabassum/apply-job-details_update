

// JavaScript Document
$(document).on("click", 'input.btn-login', function() {
    var $this = $(this);
    $this.button('loading');
    setTimeout(function() {
        $this.button('reset');
    }, 8000);
});
$(document).ready(function() {
    $('.right.action-section .panel-body .stj [data-toggle="tooltip"]').tooltip();
    $(document).on("click", "#printjob", function() {
        job_id = $(this).attr("jid");
        printPage(job_id);
    });
    $(document).mouseup(function(e) {
        var container = $(".login-form,.login");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.login-form').slideUp();
        }
        container = $(".career-list");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.career-list .dropdown-menu').fadeOut(100);
        }
    });
    $(document).on("click", ".career-list", function(e) {
        $(this).find("span.badge.bubble").fadeOut(100);
        $(".career-list .dropdown-menu").fadeOut(100);
        $(this).find("ul.dropdown-menu").eq(0).toggle();
    });
    $(document).on("click", ".m-list", function(e) {
        $('.m-list').find(".m-down-list").fadeOut(100);
        $(this).find("ul.m-down-list").eq(0).toggle();
    });
    $(document).on("click", ".mobile-menu", function(e) {
        $(".career-list .dropdown-menu").fadeOut(100);
        $(".phone-show.dropdown-menu .m-down-list").fadeOut(100);
        $(".modal-backdrop.in.header-mobile-menu").toggleClass("active");
        $(".phone-show.dropdown-menu").animate({ right: '0px' }, '400');
    });
    $(document).on("click", ".login-form .btn-group .btn", function() {
        $(".login-form .btn-group .btn").removeClass("active");
        $(this).addClass("active");
    });

    $(document).on("click", ".login-form .btn.corporate", function() {
        $(".login-form .login-jobseeker").hide();
        $(".login-form .login-corporate").show();
    });

    $(document).on("click", ".login-form .btn.mybdjobs", function() {
        $(".login-form .login-corporate").hide();
        $(".login-form .login-jobseeker").show();
    });
    $(document).on("click", ".login a.btn-login", function() {
        $(".login-form").slideToggle();
    });
    enquire.register("screen and (max-width: 767px)", {
        match: function() {
            $($(".navbar-nav>li.m-menu").get().reverse()).each(function() {
                $(".phone-show.dropdown-menu").append(this.outerHTML);
            });
            // $(".navbar-nav>li.m-menu").hide();
            $(".phone-show.dropdown-menu li.m-menu li.divider").remove();
            $(".phone-show.dropdown-menu li.active").removeClass("active");
            $(".phone-show.dropdown-menu li.career-list").addClass('m-list').removeClass("career-list").find(".dropdown-menu").addClass('m-down-list').removeClass("dropdown-menu");
        },
        unmatch: function() {
            // $(".navbar-nav>li.m-menu").show();
            $(".phone-show.dropdown-menu li.m-menu").remove();
        }
    });
    $(document).on("click", ".close-btn,.header-mobile-menu", function() {
        $(".phone-show.dropdown-menu").animate({ right: '-500px' }, '400');
        $(".modal-backdrop.in.header-mobile-menu").toggleClass("active");
    });
    $(document).on("click", ".btn-signout", function() {

    });

    $(".training .panel-body").on("mouseleave", function() {
        $('#training-slider').carousel('next');
    });
});

$(document).ready(function() {

    $(".actionCaller").focus(function() {

        if ($(this).val() == $(this).attr('cattr')) {
            $(this).val("");
        }
    });

    $(".actionCaller").blur(function() {
        if (!$(this).val()) {
            $(this).val($(this).attr('cattr'));
        }
    });

    $("#showhide_leftmenu").toggle(function() {
            $(this).removeClass("show_left_menu");
            $(this).addClass("hide_left_menu");
            $(".left_menu").slideDown("fast");
        },
        function() {
            $(this).removeClass("hide_left_menu");
            $(this).addClass("show_left_menu");
            $(".left_menu").slideUp("fast");
        });

    $(".toggle_showhide").toggle(
        function() {
            $(this).addClass("show_toggle");
            $($(this).attr("trgtcls")).slideUp("fast");
        },
        function() {
            $(this).removeClass("show_toggle");
            $($(this).attr("trgtcls")).slideDown("fast");
        });
});

// Color Box
$(document).ready(function() {
    $(".pop_msg").on('click', function() {
        $.colorbox({
            html: '<p class="title row" style="text-align:center">' + $(this).attr("msg") + '</p>',
            width: '75%',
            height: '75%'
        });
        $('#cboxLoadedContent').css('overflow-x', 'hidden');
    });

    $(document).on('click', ".sub_window_new,.sub_window", function() {
        $.colorbox({
            iframe: true,
            width: '75%',
            height: '75%',
            href: $(this).attr('path') || $(this).attr('data-path'),
            scrolling: true,
            innerWidth: '545px',
            fastIframe: false,
            onComplete: function() {
                $.colorbox.resize({ width: '85%', height: '85%' });
            }
        });
    });

    $(document).on('click', ".sub_window_new_update", function() {
        var focusId = $(this).attr('id');
        $.colorbox({
            iframe: true,
            width: '75%',
            height: '75%',
            href: $(this).attr('path') || $(this).attr('data-path'),
            scrolling: true,
            innerWidth: '545px',
            fastIframe: false,
            onClosed: function() {
                $('#cboxClose').removeAttr("tabindex");
                isColorBoxOpen = false;
                $("#" + focusId).focus();
                //$("html *").toggleClass("bcursor");

                var isClicked = $("div.larrw-wrap #f-larrw").hasClass("bcursor");
                //reGenarateBigCursor($affectedElements,isClicked,true)
            },
            onComplete: function() {
                //$.colorbox.resize({ width: '85%', height: '85%' });
                $("#cboxClose").attr("tabindex", "0");
                trapTabColorbox();
                //$("html *").toggleClass("bcursor");
                $(this).parents('#appliTermsModal').toggleClass('bangla english');
                //$("html *").toggleClass("bcursor");

                var isClicked = $("div.larrw-wrap #f-larrw").hasClass("bcursor");
                //reGenarateBigCursor($affectedElements,isClicked,true)
            }
        });
    });

    $(window).on('resize', function() {
        if ($("#colorbox").is(":visible"))
            $.colorbox.resize({ width: '85%', height: '85%' });
    });
});

function trapTab(divId) {
    var focusableElements = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), object, embed, [tabindex], [contenteditable], iframe";
    var elements = $("#" + divId).find("*").filter(focusableElements);
    elements.get(0).focus();
    $(window).on("keydown", function(e) {
        if (e.which == 9) {
            var item = $(':focus');
            var index = elements.index(item);
            if (e.shiftKey) {
                if (index == 0) {
                    elements.get(elements.length - 1).focus();
                    e.preventDefault();
                }
            } else {
                if (index == (elements.length - 1)) {
                    elements.get(0).focus();
                    e.preventDefault();
                }
            }
        }
    });
}

function trapTabColorbox() {
    isColorBoxOpen = true;
    var focusableElements = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), object, embed, *[tabindex], *[contenteditable], iframe';
    var elements = $(".cboxIframe").contents().find("*").not(":hidden").filter(focusableElements);
    // elements[elements.length] = $("#cboxClose")[0];
    elements[elements.length] = elements.get(0);
    //console.log(elements);
    elements.get(elements.length).focus();
    $(window).on("keydown", function(e) {
        if (e.which == 9) {
            var item = $(':focus');
            var index = elements.index(item);
            if (e.shiftKey) {
                if (index == 0) {
                    elements.get(elements.length - 1).focus();
                } else {
                    elements.get(index - 1).focus();
                }
            } else {
                if (index == (elements.length - 1)) {
                    elements.get(0).focus();
                } else {
                    elements.get(index + 1).focus();
                }
            }
            if (isColorBoxOpen) {
                e.preventDefault();
            }
        }
    });
}

$(document).on('click', ".Send_Mail_Message", function() {
    var strJID = $(this).attr('jid');
    var strCVS = $(this).attr('prm1');
    var strPGT = $(this).attr('prm2');
    //strPath= '';
    var strTChk = $('#TCheckBox').attr('value');

    if (strTChk < 0) {
        alert("You must select at least one checkbox from the left side.");
        return false;
    } else {
        var SelectedIds = "";
        var SelectedRows = "";
        var CheckBoxNo = "";
        var tmpValue;

        for (i = 1; i <= strTChk; i++) {
            if ($('#ActionP_ID' + i).is(':checked') && !($('#ActionP_ID' + i).is(':disabled'))) {
                var arrValue;
                tmpValue = $('#ActionP_ID' + i).attr('value');
                arrValue = tmpValue.split("/");
                if (SelectedIds == "") {
                    SelectedIds = arrValue[0]; //Applicant's ID
                } else {
                    SelectedIds = SelectedIds + "," + arrValue[0]; //Applicant's ID
                }
            }
        }

        if (SelectedIds == "" && strCVS == '-1') {
            alert("You must select at least one checkbox from the left side.");
        } else {
            strPath = "MessageToApplicant/Message_Sender.asp?JobID=" + strJID + "&AppID=" + SelectedIds + "&CVStatus=" + strCVS + "&PGType=" + strPGT;
            $(this).attr('path', strPath);
            $.colorbox({
                iframe: true,
                width: $(this).attr('width'),
                height: $(this).attr('height'),
                href: $(this).attr('path'),
                scrolling: true,
                innerWidth: '545px'
            });
        }

    }
});

$(document).on("keypress", "#cboxClose[role=button]", function(e) {
    if (e.key === "Enter") {
        $(this).trigger("click");
    }
});

function popbox() {}