var matched, browser;

jQuery.uaMatch = function (ua) {
    ua = ua.toLowerCase();

    var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
            /(webkit)[ \/]([\w.]+)/.exec(ua) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
            /(msie) ([\w.]+)/.exec(ua) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
            [];

    return {
        browser: match[ 1 ] || "",
        version: match[ 2 ] || "0"
    };
};

matched = jQuery.uaMatch(navigator.userAgent);
browser = {};

if (matched.browser) {
    browser[ matched.browser ] = true;
    browser.version = matched.version;
}

// Chrome is Webkit, but Webkit is also Safari.
if (browser.chrome) {
    browser.webkit = true;
} else if (browser.webkit) {
    browser.safari = true;
}

jQuery.browser = browser;



function validateLogin() {
    var email = $("#email").val();
    var password = $("#password").val();

    var css_error = ({
        'border-color': 'red'
    });
    var css_original = ({
        'border-color': 'rgb(204, 204, 204)'
    });

    $("#email").css(css_original);
    $("#password").css(css_original);

    var filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email == "" || !filter.test(email)) {
        $("#email").css(css_error);
        return false;
    } else if (password == "") {
        $("#password").css(css_error);
        return false;
    } else {
        return true;
    }
}

function userDelete(id) {
    if (confirm("Are you sure want to delete this User?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_user',
                'user_id': id
            },
            success: function (res) {
                $("#user_" + id).slideUp('slow');
            }
        });
    }
}

function beneficiosDelete(id) {
    if (confirm("Are you sure want to delete this Beneficios?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_beneficios',
                'beneficios_id': id
            },
            success: function (res) {
                $("#beneficios_" + id).slideUp('slow');
            }
        });
    }
}
function specialtyDelete(id) {
    if (confirm("Are you sure want to delete this Specialty?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_specialty',
                'specialty_id': id
            },
            success: function (res) {
                // alert(res);
                $("#specialty_" + id).slideUp('slow');
            }
        });
    }
}

function videoDelete(id) {
    if (confirm("Are you sure want to delete this Video?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                 'action': 'delete_video',
                'video_id': id
            },
            success: function (res) {
                $("#video_" + id).slideUp('slow');

            }
        });
    }
}

function interestDelete(id) {
    if (confirm("Are you sure want to delete this Interest?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                 'action': 'delete_interest',
                'interest_id': id
            },
            success: function (res) {
                $("#interest_" + id).slideUp('slow');

            }
        });
    }
}


function adminDelete(id) {
    if (confirm("Are you sure want to delete this Manager?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_admin',
                'user_id': id
            },
            success: function (res) {
                $("#user_" + id).slideUp('slow');
            }
        });
    }
}


function restaurantDelete(id) {
    if (confirm("Are you sure want to delete this Restaurant?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_restaurant',
                'restaurant_id': id
            },
            success: function (res) {
                $("#restaurant_" + id).slideUp('slow');
            }
        });
    }
}
function nightlifeDelete(id) {
    if (confirm("Are you sure want to delete this Nightlife?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_nightlife',
                'nightlife_id': id
            },
            success: function (res) {
                $("#nightlife_" + id).slideUp('slow');
            }
        });
    }
}
function validateAddEditNews() {



    $("#img_error").hide();

    var title = $("#title").val();

    // var latitude = $("#latitude").val();
    // var longitude = $("#longitude").val();

    var css_error = ({
        'border-color': 'red'
    });
    var css_original = ({
        'border-color': 'rgb(204, 204, 204)'
    });

    $("#title").css(css_original);

    var file = $("#image").val();
    var exts = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];


    var imageValidate = "1";
    if (file) {
        var get_ext = file.split('.');
        get_ext = get_ext.reverse();
        
        if ($.inArray(get_ext[0].toLowerCase(), exts) > -1) {
            imageValidate = "1";
        } else {
            $("#img_error").slideDown("slow");
            imageValidate = "0";
            return false;
        }
    }

    // var lat =/^[-]?(([0-8]?[0-9])\.(\d+))|(90(\.0+)?)$/;
    // var long = /^[-]?((((1[0-7][0-9])|([0-9]?[0-9]))\.(\d+))|180(\.0+)?)$/;

    if (title == "") {
        $("#title").css(css_error).focus();
        return false;
    }
    // else if (latitude == "" || !lat.test(latitude)) {
    //     $("#latitude").css(css_error);
    //     return false;
    // }
    //  else if (longitude == "" || !long.test(longitude)) {
    //     $("#longitude").css(css_error);
    //     return false;
    // }
     else if (imageValidate == "0") {
        $("#img_error").slideDown("slow");
        return false;
    }

    else {
        return true;
    }
}
function validateAddEditstudent_weblinks() {



    // $("#img_error").hide();

    var title = $("#title").val();

    // var latitude = $("#latitude").val();
    // var longitude = $("#longitude").val();

    var css_error = ({
        'border-color': 'red'
    });
    var css_original = ({
        'border-color': 'rgb(204, 204, 204)'
    });

    $("#title").css(css_original);


    if (title == "") {
        $("#title").css(css_error).focus();
        return false;
    }
    
    else {
        return true;
    }
}
function validateAddEditadmission() {



    $("#img_error").hide();

    var title = $("#title").val();

    // var latitude = $("#latitude").val();
    // var longitude = $("#longitude").val();

    var css_error = ({
        'border-color': 'red'
    });
    var css_original = ({
        'border-color': 'rgb(204, 204, 204)'
    });

    $("#title").css(css_original);

    var file = $("#image").val();
    var exts = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];


    var imageValidate = "1";
    if (file) {
        var get_ext = file.split('.');
        get_ext = get_ext.reverse();
        
        if ($.inArray(get_ext[0].toLowerCase(), exts) > -1) {
            imageValidate = "1";
        } else {
            $("#img_error").slideDown("slow");
            imageValidate = "0";
            return false;
        }
    }
     var file = $("#inside_image").val();
    var exts = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];


    var imageValidate1 = "1";
    if (file) {
        var get_ext = file.split('.');
        get_ext = get_ext.reverse();
        
        if ($.inArray(get_ext[0].toLowerCase(), exts) > -1) {
            imageValidate1 = "1";
        } else {
            $("#img_error1").slideDown("slow");
            imageValidate1 = "0";
            return false;
        }
    }
    var file = $("#pdf").val();
    var exts = ['pdf'];


    var imageValidate2 = "1";
    if (file) {
        var get_ext = file.split('.');
        get_ext = get_ext.reverse();
        
        if ($.inArray(get_ext[0].toLowerCase(), exts) > -1) {
            imageValidate2 = "1";
        } else {
            $("#pdf").slideDown("slow");
            imageValidate2 = "0";
            return false;
        }
    }

    // var lat =/^[-]?(([0-8]?[0-9])\.(\d+))|(90(\.0+)?)$/;
    // var long = /^[-]?((((1[0-7][0-9])|([0-9]?[0-9]))\.(\d+))|180(\.0+)?)$/;

    if (title == "") {
        $("#title").css(css_error).focus();
        return false;
    }
    // else if (latitude == "" || !lat.test(latitude)) {
    //     $("#latitude").css(css_error);
    //     return false;
    // }
    //  else if (longitude == "" || !long.test(longitude)) {
    //     $("#longitude").css(css_error);
    //     return false;
    // }
    //  else if (imageValidate == "0") {
    //     $("#img_error").slideDown("slow");
    //     return false;
    // }
    
    else {
        return true;
    }
}
function validateAddEditdirectories_items() {

    $("#img_error").hide();
    var css_error = ({
        'border-color': 'red'
    });
    var css_original = ({
        'border-color': 'rgb(204, 204, 204)'
    });
    var file = $("#image").val();
    var exts = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];
    var imageValidate = "1";
    if (file) {
        var get_ext = file.split('.');
        get_ext = get_ext.reverse();
        
        if ($.inArray(get_ext[0].toLowerCase(), exts) > -1) {
            imageValidate = "1";
        } else {
            $("#img_error").slideDown("slow");
            imageValidate = "0";
            return false;
        }
    }
    else {
        return true;
    }
}
function validateAddEditstudent_category() {



    $("#img_error").hide();

    var title = $("#title").val();

    // var latitude = $("#latitude").val();
    // var longitude = $("#longitude").val();

    var css_error = ({
        'border-color': 'red'
    });
    var css_original = ({
        'border-color': 'rgb(204, 204, 204)'
    });

    $("#title").css(css_original);

    var file = $("#image").val();
    var exts = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];


    var imageValidate = "1";
    if (file) {
        var get_ext = file.split('.');
        get_ext = get_ext.reverse();
        
        if ($.inArray(get_ext[0].toLowerCase(), exts) > -1) {
            imageValidate = "1";
        } else {
            $("#img_error").slideDown("slow");
            imageValidate = "0";
            return false;
        }
    }
     
    // var lat =/^[-]?(([0-8]?[0-9])\.(\d+))|(90(\.0+)?)$/;
    // var long = /^[-]?((((1[0-7][0-9])|([0-9]?[0-9]))\.(\d+))|180(\.0+)?)$/;

    if (title == "") {
        $("#title").css(css_error).focus();
        return false;
    }
   
    
    else {
        return true;
    }
}
function validateAddEditcourse() {



    $("#img_error").hide();

    var title = $("#title").val();

    // var latitude = $("#latitude").val();
    // var longitude = $("#longitude").val();

    var css_error = ({
        'border-color': 'red'
    });
    var css_original = ({
        'border-color': 'rgb(204, 204, 204)'
    });

    $("#title").css(css_original);

    var file = $("#image").val();
    var exts = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];


    var imageValidate = "1";
    if (file) {
        var get_ext = file.split('.');
        get_ext = get_ext.reverse();
        
        if ($.inArray(get_ext[0].toLowerCase(), exts) > -1) {
            imageValidate = "1";
        } else {
            $("#img_error").slideDown("slow");
            imageValidate = "0";
            return false;
        }
    }
     
    // var lat =/^[-]?(([0-8]?[0-9])\.(\d+))|(90(\.0+)?)$/;
    // var long = /^[-]?((((1[0-7][0-9])|([0-9]?[0-9]))\.(\d+))|180(\.0+)?)$/;

    if (title == "") {
        $("#title").css(css_error).focus();
        return false;
    }
   
    
    else {
        return true;
    }
}
function validateAddEditbanner() {



    $("#img_error").hide();

    var title = $("#title").val();

    // var latitude = $("#latitude").val();
    // var longitude = $("#longitude").val();

    var css_error = ({
        'border-color': 'red'
    });
    var css_original = ({
        'border-color': 'rgb(204, 204, 204)'
    });

    $("#title").css(css_original);

    var file = $("#image").val();
    var exts = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];


    var imageValidate = "1";
    if (file) {
        var get_ext = file.split('.');
        get_ext = get_ext.reverse();
        
        if ($.inArray(get_ext[0].toLowerCase(), exts) > -1) {
            imageValidate = "1";
        } else {
            $("#img_error").slideDown("slow");
            imageValidate = "0";
            return false;
        }
    }
     
    // var lat =/^[-]?(([0-8]?[0-9])\.(\d+))|(90(\.0+)?)$/;
    // var long = /^[-]?((((1[0-7][0-9])|([0-9]?[0-9]))\.(\d+))|180(\.0+)?)$/;

    if (title == "") {
        $("#title").css(css_error).focus();
        return false;
    }
   
    
    else {
        return true;
    }
}
function validatecareer() {



    $("#img_error").hide();

    var title = $("#title").val();

    // var latitude = $("#latitude").val();
    // var longitude = $("#longitude").val();

    var css_error = ({
        'border-color': 'red'
    });
    var css_original = ({
        'border-color': 'rgb(204, 204, 204)'
    });

    $("#title").css(css_original);

    var file = $("#image").val();
    var exts = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];


    var imageValidate = "1";
    if (file) {
        var get_ext = file.split('.');
        get_ext = get_ext.reverse();
        
        if ($.inArray(get_ext[0].toLowerCase(), exts) > -1) {
            imageValidate = "1";
        } else {
            $("#img_error").slideDown("slow");
            imageValidate = "0";
            return false;
        }
    }
     
    // var lat =/^[-]?(([0-8]?[0-9])\.(\d+))|(90(\.0+)?)$/;
    // var long = /^[-]?((((1[0-7][0-9])|([0-9]?[0-9]))\.(\d+))|180(\.0+)?)$/;

    if (title == "") {
        $("#title").css(css_error).focus();
        return false;
    }
   
    
    else {
        return true;
    }
}
function validatecompany(){

    var contact_email_ids = [];
    $("#myTags1").find(".tagit-label").each(function () {
        contact_email_ids.push($(this).html()); //I don't know what you want, I am assuming the Html
    })
    var contact_email_ids1 = contact_email_ids.toString();
   
    $("#allowed_user_domain").val(contact_email_ids1);

}
function companyDelete(id) {
    if (confirm("Are you sure want to delete this Company?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_company',
                'company_id': id
            },
            success: function (res) {
                $("#company_" + id).slideUp('slow');
            }
        });
    }
}
function egresadosDelete(id) {
    if (confirm("Are you sure want to delete this Item?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_egresados',
                'g_id': id
            },
            success: function (res) {
                $("#g_" + id).slideUp('slow');
            }
        });
    }
}

function careerDelete(id) {
    if (confirm("Are you sure want to delete this Career?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_career',
                'career_id': id
            },
            success: function (res) {
                $("#career_" + id).slideUp('slow');
            }
        });
    }
}
function faqsDelete(id) {
    if (confirm("Are you sure want to delete this FAQ?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_faqs',
                'f_id': id
            },
            success: function (res) {
                $("#f_" + id).slideUp('slow');
            }
        });
    }
}
function student_weblinksDelete(id) {
    if (confirm("Are you sure want to delete this Item?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_students_weblinks',
                'url_id': id
            },
            success: function (res) {
                $("#url_" + id).slideUp('slow');
            }
        });
    }
}
function videosDelete(id) {
    if (confirm("Are you sure want to delete this Item?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_videos',
                'video_id': id
            },
            success: function (res) {
                $("#video_" + id).slideUp('slow');
            }
        });
    }
}
function student_categoryDelete(id) {
    if (confirm("Are you sure want to delete this Item?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_students_category',
                's_category_id': id
            },
            success: function (res) {
                console.log(res);
                $("#s_" + id).slideUp('slow');
            }
        });
    }
}
function directories_itemsDelete(id) {
    if (confirm("Are you sure want to delete this Item?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_directories_items',
                'item_id': id
            },
            success: function (res) {
                console.log(res);
                $("#item_" + id).slideUp('slow');
            }
        });
    }
}
function directorydelete(id) {
    if (confirm("Are you sure want to delete this Item?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'directoryDelete',
                'directory_id': id
            },
            success: function (res) {
                console.log(res);
                $("#directory_" + id).slideUp('slow');
            }
        });
    }
}
function activitydelete(id) {
    if (confirm("Are you sure want to delete this Item?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_activity',
                'act_id': id
            },
            success: function (res) {
                console.log(res);
                $("#act_" + id).slideUp('slow');
            }
        });
    }
}
function career_categoriesDelete(id) {
    if (confirm("Are you sure want to delete this Category?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_career_categories',
                'category_id': id
            },
            success: function (res) {
                $("#career_categories_" + id).slideUp('slow');
            }
        });
    }
}

function calendarcategoryDelete(id) {
    if (confirm("Are you sure want to delete this Category?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_calendar_category',
                'category_id': id
            },
            success: function (res) {
                $("#calendar_category_" + id).slideUp('slow');
            }
        });
    }
}

function itemDelete(id) {
    if (confirm("Are you sure want to delete this Item?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_item',
                'item_id': id
            },
            success: function (res) {
                $("#item_" + id).slideUp('slow');
            }
        });
    }
}
function bannerDelete(id) {
    if (confirm("Are you sure want to delete this Banner?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_banner',
                'banner_id': id
            },
            success: function (res) {
                $("#banner_" + id).slideUp('slow');
            }
        });
    }
}
function validateSendPushLocation() {
    var push_text = $("#push_text").val();
    var latitude=  $("#latitude").val();
    var longitude=  $("#longitude").val();

    var css_error = ({
        'border-color': 'red'
    });
    var css_original = ({
        'border-color': 'rgb(204, 204, 204)'
    });

    $("#push_text").css(css_original);
    var lat =/^[-]?(([0-8]?[0-9])\.(\d+))|(90(\.0+)?)$/;
    var long = /^[-]?((((1[0-7][0-9])|([0-9]?[0-9]))\.(\d+))|180(\.0+)?)$/;

    if (push_text == "") {
        $("#push_text").css(css_error);
        return false;
    } else if (latitude == "" || !lat.test(latitude)) {
        $("#latitude").css(css_error);
        return false;
    }
     else if (longitude == "" || !long.test(longitude)) {
        $("#longitude").css(css_error);
        return false;
    } else {
        return true;
    }
}


function validateAddEditEvent() {

    $("#img_error").hide();

    var event_title = $("#event_title").val();
    // var time = $("#time").val();
    var date = $("#date").val();
    // var event_type = $("#event_type").val();
    // var age = $("#age").val();
    var email = $("#email").val();
    // var latitude = $("#latitude").val();
    // var longitude = $("#longitude").val();

    var css_error = ({
        'border-color': 'red'
    });
    var css_original = ({
        'border-color': 'rgb(204, 204, 204)'
    });

    $("#event_title").css(css_original);

    var file = $("#image").val();
    var exts = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];

    var imageValidate = "1";
    if (file) {
        var get_ext = file.split('.');
        get_ext = get_ext.reverse();
        if ($.inArray(get_ext[0].toLowerCase(), exts) > -1) {
            imageValidate = "1";
        } else {
            $("#img_error").slideDown("slow");
            imageValidate = "0";
            return false;
        }
    }
    var file = $("#pdf").val();
    var exts = ['jpg', 'jpeg', 'png', 'gif', 'bmp','pdf'];

    var pdfValidate = "1";
    if (file) {
        var get_ext = file.split('.');
        get_ext = get_ext.reverse();
        if ($.inArray(get_ext[0].toLowerCase(), exts) > -1) {
            pdfValidate = "1";
        } else {
            $("#pdf_error").slideDown("slow");
            pdfValidate = "0";
            return false;
        }
    }

    var filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (event_title == "") {
        $("#event_title").css(css_error).focus();
        return false;
    }
    else if (email == "" || !filter.test(email)) {
        $("#email").css(css_error);
        return false;
    } 
    
     else if (imageValidate == "0") {
        $("#img_error").slideDown("slow");
        return false;
    } else if (date == "") {
        $("#date").css(css_error).focus();
        return false;
    }
    else {
        return true;
    }
}
function validateBanner() {
    $("#img_error").hide();

    var banner_type = $("#banner_type").val();

    var css_error = ({
        'border-color': 'red'
    });
    var css_original = ({
        'border-color': 'rgb(204, 204, 204)'
    });

    $("#banner_type").css(css_original);

    var file = $("#image").val();
    var exts = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];

    var imageValidate = "1";
    if (file) {
        var get_ext = file.split('.');
        get_ext = get_ext.reverse();
        if ($.inArray(get_ext[0].toLowerCase(), exts) > -1) {
            imageValidate = "1";
        } else {
            $("#img_error").slideDown("slow");
            imageValidate = "0";
            return false;
        }
    }

    if (banner_type == "") {
        $("#banner_type").css(css_error).focus();
        return false;
    }
     else if (imageValidate == "0") {
        $("#img_error").slideDown("slow");
        return false;
    } 
    else {
        return true;
    }
}
function pushNotificationDelete(id) {
    if (confirm("Are you sure want to delete this Data?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_push',
                'push_notification_id': id
            },
            success: function (res) {
                $("#push_" + id).slideUp('slow');
            }
        });
    }
}


function validateAddEditEntertainment() {
    $("#img_error").hide();

    var entertainment_title = $("#entertainment_title").val();
    var type = $("#type").val();
    var time = $("#time").val();
    var section = $("#section").val();
    var latitude = $("#latitude").val();
    var longitude = $("#longitude").val();
    var spanish_entertainment_title = $("#spanish_entertainment_title").val();
    var spanish_type = $("#spanish_type").val();

    var css_error = ({
        'border-color': 'red'
    });
    var css_original = ({
        'border-color': 'rgb(204, 204, 204)'
    });

    $("#entertainment_title").css(css_original);
    $("#spanish_entertainment_title").css(css_original);

    var file = $("#image").val();
    var exts = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];

    var imageValidate = "1";
    if (file) {
        var get_ext = file.split('.');
        get_ext = get_ext.reverse();
        if ($.inArray(get_ext[0].toLowerCase(), exts) > -1) {
            imageValidate = "1";
        } else {
            $("#img_error").slideDown("slow");
            imageValidate = "0";
            return false;
        }
    }

    var filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var lat =/^[-]?(([0-8]?[0-9])\.(\d+))|(90(\.0+)?)$/;
    var long = /^[-]?((((1[0-7][0-9])|([0-9]?[0-9]))\.(\d+))|180(\.0+)?)$/;
    // if (email == "" || !filter.test(email)) {
    //     $("#email").css(css_error);
    //     return false;
    // }
    // else 
        if (entertainment_title == "") {
        $("#entertainment_title").css(css_error).focus();
        return false;
    }else  if (spanish_entertainment_title == "") {
        $("#spanish_entertainment_title").css(css_error).focus();
        return false;
    }
     else if (latitude == "" || !lat.test(latitude)) {
        $("#latitude").css(css_error);
        return false;
    }
     else if (longitude == "" || !long.test(longitude)) {
        $("#longitude").css(css_error);
        return false;
    }
    else if (type == "") {
        $("#type").css(css_error).focus();
        return false;
    }
     else if (spanish_type == "") {
        $("#spanish_type").css(css_error).focus();
        return false;
    }
     else if (section == "") {
        $("#section").css(css_error).focus();
        return false;
    }else if (time == "") {
        $("#time").css(css_error).focus();
        return false;
    }
     else if (imageValidate == "0") {
        $("#img_error").slideDown("slow");
        return false;
    } 
    else {
        return true;
    }
}
function validateAddEditCalendario() {
    $("#img_error").hide();

    var title = $("#title").val();
    var release_date = $("#release_date").val();
    var description = $("#description").val();


    var css_error = ({
        'border-color': 'red'
    });
    var css_original = ({
        'border-color': 'rgb(204, 204, 204)'
    });

    $("#entertainment_title").css(css_original);

    var file = $("#image").val();
    var exts = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];

    var imageValidate = "1";
    if (file) {
        var get_ext = file.split('.');
        get_ext = get_ext.reverse();
        if ($.inArray(get_ext[0].toLowerCase(), exts) > -1) {
            imageValidate = "1";
        } else {
            $("#img_error").slideDown("slow");
            imageValidate = "0";
            return false;
        }
    }

    if (title == "") {
        $("#title").css(css_error).focus();
        return false;
    }
    else if (release_date == "") {
        $("#release_date").css(css_error).focus();
        return false;
    }
     else if (description == "") {
        $("#description").css(css_error).focus();
        return false;
    }
     else if (imageValidate == "0") {
        $("#img_error").slideDown("slow");
        return false;
    } 
    else {
        return true;
    }
}

function validateAddEditRestaurant() {
    $("#img_error").hide();
     $("#pdf_error").hide();
  

    var restaurant_title = $("#restaurant_title").val();
    var time = $("#time").val();
    var close_time = $("#close_time").val();
    var address = $("#address").val();
    var section = $("#section").val();
    var specialty = $("#specialty").val();
    var email = $("#email").val();
    var latitude = $("#latitude").val();
    var longitude = $("#longitude").val();
    var english_restaurant_title = $("#english_restaurant_title").val();
    var english_address = $("#english_address").val();
    var english_specialty = $("#english_specialty").val();

    var css_error = ({
        'border-color': 'red'
    });
    var css_original = ({
        'border-color': 'rgb(204, 204, 204)'
    });

    var pdfValidate = "1";

    var file = $("#pdf").val();
    var exts = ['pdf', 'PDF'];
    if (file) {
        var get_ext = file.split('.');
        get_ext = get_ext.reverse();
        if ($.inArray(get_ext[0].toLowerCase(), exts) > -1) {
            pdfValidate = "1";
        } else {
            $("#pdf_error").slideDown("slow");
            pdfValidate = "0";
            return false;
        }
    }

    $("#restaurant_title").css(css_original);

    var file = $("#restaurant_image").val();
    var exts = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];

    var imageValidate = "1";
    if (file) {
        var get_ext = file.split('.');
        get_ext = get_ext.reverse();
        if ($.inArray(get_ext[0].toLowerCase(), exts) > -1) {
            imageValidate = "1";
        } else {
            $("#img_error").slideDown("slow");
            imageValidate = "0";
            return false;
        }
    }

    var filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var lat =/^[-]?(([0-8]?[0-9])\.(\d+))|(90(\.0+)?)$/;
    var long = /^[-]?((((1[0-7][0-9])|([0-9]?[0-9]))\.(\d+))|180(\.0+)?)$/;

    if (email == "" || !filter.test(email)) {
        $("#email").css(css_error);
        return false;
    } else if (latitude == "" || !lat.test(latitude)) {
        $("#latitude").css(css_error);
        return false;
    }
     else if (longitude == "" || !long.test(longitude)) {
        $("#longitude").css(css_error);
        return false;
    }
    else if (restaurant_title == "") {
        $("#restaurant_title").css(css_error).focus();
        return false;
    } else if (english_restaurant_title == "") {
        $("#english_restaurant_title").css(css_error).focus();
        return false;
    }

     else if (time == "") {
        $("#time").css(css_error).focus();
        return false;
    }
     else if (specialty == "") {
        $("#specialty").css(css_error).focus();
        return false;
    } else if (english_specialty == "") {
        $("#english_specialty").css(css_error).focus();
        return false;
    }else if (pdfValidate == "0") {
        $("#pdf_error").slideDown("slow");
        return false;
    }
    else if (address == "") {
        $("#address").css(css_error).focus();
        return false;
    } else if (english_address == "") {
        $("#english_address").css(css_error).focus();
        return false;
    }
     else if (section == "") {
        $("#section").css(css_error).focus();
        return false;
    }
     else if (imageValidate == "0") {
        $("#img_error").slideDown("slow");
        return false;
    } 
    else {
        return true;
    }
}
function validateAddEditHotel() {
    $("#img_error").hide();

    var title = $("#title").val();
    var time = $("#time").val();
    var type = $("#type").val();
    var close_time = $("#close_time").val();
    var date = $("#date").val();
    var email = $("#email").val();
    var latitude = $("#latitude").val();
    var longitude = $("#longitude").val();
    var english_title = $("#english_title").val();
    var english_type = $("#english_type").val();

    var css_error = ({
        'border-color': 'red'
    });
    var css_original = ({
        'border-color': 'rgb(204, 204, 204)'
    });

    $("#title").css(css_original);

    var file = $("#image").val();
    var exts = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];

    var imageValidate = "1";
    if (file) {
        var get_ext = file.split('.');
        get_ext = get_ext.reverse();
        if ($.inArray(get_ext[0].toLowerCase(), exts) > -1) {
            imageValidate = "1";
        } else {
            $("#img_error").slideDown("slow");
            imageValidate = "0";
            return false;
        }
    }

    // var filter1 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var lat =/^[-]?(([0-8]?[0-9])\.(\d+))|(90(\.0+)?)$/;
    var long = /^[-]?((((1[0-7][0-9])|([0-9]?[0-9]))\.(\d+))|180(\.0+)?)$/;

    if (title == "") {
        $("#title").css(css_error).focus();
        return false;
    } if (english_title == "") {
        $("#english_title").css(css_error).focus();
        return false;
    }
    else if(email == "" || !filter.test(email)) {
        $("#email").css(css_error);
        alert("plz enter valid email format");
        return false;
    } 
     else if (imageValidate == "0") {
        $("#img_error").slideDown("slow");
        return false;
    } 
    else if (type == "") {
        $("#type").slideDown("slow");
        return false;
    } else if (english_type == "") {
        $("#english_type").slideDown("slow");
        return false;
    }else if (date == "") {
        $("#date").slideDown("slow");
        return false;
    }else if (time == "") {
        $("#time").css(css_error).focus();
        return false;
    } 
    else if (close_time == "") {
        $("#close_time").css(css_error).focus();
        return false;
    }
    else if (latitude == "" || !lat.test(latitude)) {
        $("#latitude").css(css_error);
        return false;
    }
     else if (longitude == "" || !long.test(longitude)) {
        $("#longitude").css(css_error);
        return false;
    }

    else {
        return true;
    }
}
function validateAddEditHospital() {
    $("#img_error").hide();

    var title = $("#title").val();
    // var time = $("#time").val();
    var type = $("#type").val();
    var section = $("#section").val();
    // var date = $("#date").val();
    var email = $("#email").val();
    var latitude = $("#latitude").val();
    var longitude = $("#longitude").val();
    var english_title = $("#english_title").val();
    var english_type = $("#english_type").val();
   
    var css_error = ({
        'border-color': 'red'
    });
    var css_original = ({
        'border-color': 'rgb(204, 204, 204)'
    });

    $("#title").css(css_original);
    $("#english_title").css(css_original);

    var file = $("#image").val();
    var exts = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];

    var imageValidate = "1";
    if (file) {
        var get_ext = file.split('.');
        get_ext = get_ext.reverse();
        if ($.inArray(get_ext[0].toLowerCase(), exts) > -1) {
            imageValidate = "1";
        } else {
            $("#img_error").slideDown("slow");
            imageValidate = "0";
            return false;
        }
    }

    // var filter1 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var lat =/^[-]?(([0-8]?[0-9])\.(\d+))|(90(\.0+)?)$/;
    var long = /^[-]?((((1[0-7][0-9])|([0-9]?[0-9]))\.(\d+))|180(\.0+)?)$/;

    if (title == "") {
        $("#title").css(css_error).focus();
        return false;
    }
     if (english_title == "") {
        $("#english_title").css(css_error).focus();
        return false;
    }
    else if(email == "" || !filter.test(email)) {
        $("#email").css(css_error);
        alert("plz enter valid email format");
        return false;
    } 
    //  else if (imageValidate == "0") {
    //     $("#img_error").slideDown("slow");
    //     return false;
    // } 
    else if (latitude == "" || !lat.test(latitude)) {
        $("#latitude").css(css_error);
        return false;
    }
     else if (longitude == "" || !long.test(longitude)) {
        $("#longitude").css(css_error);
        return false;
    }
    else if (type == "") {
        $("#type").css(css_error).focus();
        return false;
    } else if (english_type == "") {
        $("#english_type").css(css_error).focus();
        return false;
    }
    else if (section == "") {
        $("#section").css(css_error).focus();
        return false;
    }
    else {
        return true;
    }
}

function validateAddEditNightlife() {
    $("#img_error").hide();

    var nightlife_title = $("#nightlife_title").val();
    var time = $("#time").val();
    var close_time = $("#close_time").val();
    var zone = $("#zone").val();
    var section = $("#section").val();
    var email = $("#email").val();
    var latitude = $("#latitude").val();
    var longitude = $("#longitude").val();
    var english_nightlife_title = $("#english_nightlife_title").val();
    var english_zone = $("#english_zone").val();
   
    var css_error = ({
        'border-color': 'red'
    });
    var css_original = ({
        'border-color': 'rgb(204, 204, 204)'
    });

    $("#nightlife_title").css(css_original);
    $("#english_nightlife_title").css(css_original);

    var file = $("#nightlife_image").val();
    var exts = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];

    var imageValidate = "1";
    if (file) {
        var get_ext = file.split('.');
        get_ext = get_ext.reverse();
        if ($.inArray(get_ext[0].toLowerCase(), exts) > -1) {
            imageValidate = "1";
        } else {
            $("#img_error").slideDown("slow");
            imageValidate = "0";
            return false;
        }
    }

    var filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var lat =/^[-]?(([0-8]?[0-9])\.(\d+))|(90(\.0+)?)$/;
    var long = /^[-]?((((1[0-7][0-9])|([0-9]?[0-9]))\.(\d+))|180(\.0+)?)$/;

    if (email == "" || !filter.test(email)) {
        $("#email").css(css_error);
        return false;
    }
    else if (nightlife_title == "") {
        $("#nightlife_title").css(css_error).focus();
        return false;
    } 
    else if (english_nightlife_title == "") {
        $("#english_nightlife_title").css(css_error).focus();
        return false;
    }
    else if (time == "") {
        $("#time").css(css_error).focus();
        return false;
    }
    else if (zone == "") {
        $("#zone").css(css_error).focus();
        return false;
    }  
    else if (english_zone == "") {
        $("#english_zone").css(css_error).focus();
        return false;
    }
     else if (section == "") {
        $("#section").css(css_error).focus();
        return false;
    }else if (latitude == "" || !lat.test(latitude)) {
        $("#latitude").css(css_error);
        return false;
    }
     else if (longitude == "" || !long.test(longitude)) {
        $("#longitude").css(css_error);
        return false;
    }
     else if (imageValidate == "0") {
        $("#img_error").slideDown("slow");
        return false;
    }
   
    else {
        return true;
    }
}

function validateZone() {
    var title = $("#title").val();
    var english_title = $("#english_title").val();

    var css_error = ({
        'border-color': 'red'
    });
    var css_original = ({
        'border-color': 'rgb(204, 204, 204)'
    });

    $("#title").css(css_original);
    $("#english_title").css(css_original);

  
    if (title == "") {
        $("#title").css(css_error);
        return false;
    } else if (english_title == "") {
        $("#english_title").css(css_error);
        return false;
    } else {
        return true;
    }
}

function validateEntertainment_type() {
    var title = $("#title").val();
    var english_title = $("#english_title").val();

    var css_error = ({
        'border-color': 'red'
    });
    var css_original = ({
        'border-color': 'rgb(204, 204, 204)'
    });

    $("#title").css(css_original);
    $("#english_title").css(css_original);

  
    if (title == "") {
        $("#title").css(css_error);
        return false;
    } else if (english_title == "") {
        $("#english_title").css(css_error);
        return false;
    } else {
        return true;
    }
}

function validateSpecialty() {
    var title = $("#title").val();
    var english_title = $("#english_title").val();

    var css_error = ({
        'border-color': 'red'
    });
    var css_original = ({
        'border-color': 'rgb(204, 204, 204)'
    });

    $("#title").css(css_original);
    $("#english_title").css(css_original);

  
    if (title == "") {
        $("#title").css(css_error);
        return false;
    } else if (english_title == "") {
        $("#english_title").css(css_error);
        return false;
    } else {
        return true;
    }
}
function validateAddEditTourism() {
    $("#img_error").hide();

    var tourism_title = $("#tourism_title").val();
    var time = $("#time").val();
    var close_time = $("#close_time").val();
    var email = $("#email").val();
    var latitude = $("#latitude").val();
    var longitude = $("#longitude").val();

    var css_error = ({
        'border-color': 'red'
    });
    var css_original = ({
        'border-color': 'rgb(204, 204, 204)'
    });

    $("#tourism_title").css(css_original);

    var file = $("#tourism_image").val();
    var exts = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];

    var imageValidate = "1";
    if (file) {
        var get_ext = file.split('.');
        get_ext = get_ext.reverse();
        if ($.inArray(get_ext[0].toLowerCase(), exts) > -1) {
            imageValidate = "1";
        } else {
            $("#img_error").slideDown("slow");
            imageValidate = "0";
            return false;
        }
    }

    var filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var lat =/^[-]?(([0-8]?[0-9])\.(\d+))|(90(\.0+)?)$/;
    var long = /^[-]?((((1[0-7][0-9])|([0-9]?[0-9]))\.(\d+))|180(\.0+)?)$/;

    if (email == "" || !filter.test(email)) {
        $("#email").css(css_error);
        return false;
    }else if (latitude == "" || !lat.test(latitude)) {
        $("#latitude").css(css_error);
        return false;
    }
     else if (longitude == "" || !long.test(longitude)) {
        $("#longitude").css(css_error);
        return false;
    }

    else if (tourism_title == "") {
        $("#tourism_title").css(css_error).focus();
        return false;
    }
    else if (time == "") {
        $("#time").css(css_error).focus();
        return false;
    }
     else if (imageValidate == "0") {
        $("#img_error").slideDown("slow");
        return false;
    } 
    else {
        return true;
    }
}
function validateAddEditPromotion() {
    $("#img_error").hide();

    var title = $("#title").val();
    var time = $("#time").val();
    var close_time = $("#close_time").val();
    var category = $("#category").val();
    var email = $("#email").val();
    var latitude = $("#latitude").val();
    var longitude = $("#longitude").val();
   
    var css_error = ({
        'border-color': 'red'
    });
    var css_original = ({
        'border-color': 'rgb(204, 204, 204)'
    });

    $("#title").css(css_original);

    var file = $("#image").val();
    var exts = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];

    var imageValidate = "1";
    if (file) {
        var get_ext = file.split('.');
        get_ext = get_ext.reverse();
        if ($.inArray(get_ext[0].toLowerCase(), exts) > -1) {
            imageValidate = "1";
        } else {
            $("#img_error").slideDown("slow");
            imageValidate = "0";
            return false;
        }
    }

    var filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var lat =/^[-]?(([0-8]?[0-9])\.(\d+))|(90(\.0+)?)$/;
    var long = /^[-]?((((1[0-7][0-9])|([0-9]?[0-9]))\.(\d+))|180(\.0+)?)$/;

    if (email == "" || !filter.test(email)) {
        $("#email").css(css_error);
        return false;
    }
    else if (title == "") {
        $("#title").css(css_error).focus();
        return false;
    }
    else if (time == "") {
        $("#time").css(css_error).focus();
        return false;
    }else if (close_time == "") {
        $("#close_time").css(css_error).focus();
        return false;
    }
    else if (category == "") {
        $("#category").css(css_error).focus();
        return false;
    }else if (latitude == "" || !lat.test(latitude)) {
        $("#latitude").css(css_error);
        return false;
    }
     else if (longitude == "" || !long.test(longitude)) {
        $("#longitude").css(css_error);
        return false;
    }
  
     else if (imageValidate == "0") {
        $("#img_error").slideDown("slow");
        return false;
    } 
    else {
        return true;
    }
}
function validateSendPushLocation() {

    var push_text = $("#push_text").val();
    var latitude = $("#latitude").val();
    var longitude = $("#longitude").val();
    
   
    var css_error = ({
        'border-color': 'red'
    });
    var css_original = ({
        'border-color': 'rgb(204, 204, 204)'
    });

   
    var lat =/^[-]?(([0-8]?[0-9])\.(\d+))|(90(\.0+)?)$/;
    var long = /^[-]?((((1[0-7][0-9])|([0-9]?[0-9]))\.(\d+))|180(\.0+)?)$/;
    if (push_text == "") {
        $("#push_text").css(css_error);
        return false;
    }
    if (latitude == "" || !lat.test(latitude)) {
        $("#latitude").css(css_error);
        return false;
    }
     else if (longitude == "" || !long.test(longitude)) {
        $("#longitude").css(css_error);
        return false;
    }
    else {
        return true;
    }
}


function newsDelete(id) {
    if (confirm("Are you sure want to delete this News?")) {
                                                                                        
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_news',
                'news_id': id
            },
            success: function (res) {
                console.log(res);
                $("#news_" + id).slideUp('slow');
            }
        });
    }
}
function tipsDelete(id) {
    if (confirm("Are you sure want to delete this Items?")) {
                                                                                        
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_tips',
                'tips_id': id
            },
            success: function (res) {
                console.log(res);
                $("#tips_" + id).slideUp('slow');
            }
        });
    }
}
function admissionDelete(id) {
    if (confirm("Are you sure want to delete this Admission?")) {
                                                                                        
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_admission',
                'admission_id': id
            },
            success: function (res) {
                console.log(res);
                $("#admission_" + id).slideUp('slow');
            }
        });
    }
}
function courseDelete(id) {
    if (confirm("Are you sure want to delete this Course?")) {
                                                                                        
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_course',
                'course_id': id
            },
            success: function (res) {
                console.log(res);
                $("#course_" + id).slideUp('slow');
            }
        });
    }
}

function eventDelete(id) {
    if (confirm("Are you sure want to delete this Event?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_event',
                'event_id': id
            },
            success: function (res) {
                $("#event_" + id).slideUp('slow');
            }
        });
    }
}
function event_typeDelete(id) {
    if (confirm("Are you sure want to delete this Type?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_event_type',
                'event_type_id': id
            },
            success: function (res) {
                $("#event_type_" + id).slideUp('slow');
            }
        });
    }
}
function entertainmentDelete(id) {
    if (confirm("Are you sure want to delete this Entertainment?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_entertainment',
                'entertainment_id': id
            },
            success: function (res) {
                $("#entertainment_" + id).slideUp('slow');
            }
        });
    }
}
function entertainment_typeDelete(id) {
  
    if (confirm("Are you sure want to delete this Type?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_entertainment_type',
                'entertainment_type_id': id
            },
            success: function (res) {
                $("#entertainment_type_" + id).slideUp('slow');
            }
        });
    }
}
// function specialtyDelete(id) {
//     if (confirm("Are you sure want to delete this Specialty?")) {
//         $.ajax({
//             url: 'admin_ops.php',
//             type: 'post',
//             data: {
//                 'action': 'delete_specialty',
//                 'specialty_id': id
//             },
//             success: function (res) {
//                 $("#specialty_" + id).slideUp('slow');
//             }
//         });
//     }
// }
function categoryDelete(id) {
    if (confirm("Are you sure want to delete this Category?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                 'action': 'delete_category',
                'category_id': id
            },
            success: function (res) {
                // alert(res);
                $("#category_" + id).slideUp('slow');

            }
        });
    }
}
function zoneDelete(id) {
    if (confirm("Are you sure want to delete this Zone?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_zone',
                'zone_id': id
            },
            success: function (res) {
                $("#zone_" + id).slideUp('slow');
            }
        });
    }
}
function promotion_categoryDelete(id) {
    if (confirm("Are you sure want to delete this Category?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_promotion_category',
                'promotion_category_id': id
            },
            success: function (res) {
                $("#promotion_category_" + id).slideUp('slow');
            }
        });
    }
}

function calendarioDelete(id) {
    if (confirm("Are you sure want to delete this Calendario?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_calendario',
                'calendario_id': id
            },
            success: function (res) {
                $("#calendario_" + id).slideUp('slow');
            }
        });
    }
}

function promotionDelete(id) {
    if (confirm("Are you sure want to delete this Promotion?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_promotion',
                'promotion_id': id
            },
            success: function (res) {
                $("#promotion_" + id).slideUp('slow');
            }
        });
    }
}
function bannerDelete(id) {
    if (confirm("Are you sure want to delete this Banner?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_banner',
                'banner_id': id
            },
            success: function (res) {
                $("#banner_" + id).slideUp('slow');
            }
        });
    }
}
function hotelDelete(id) {
    if (confirm("Are you sure want to delete this Hotel?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_hotel',
                'hotel_id': id
            },
            success: function (res) {
                $("#hotel_" + id).slideUp('slow');
            }
        });
    }
}


function hospitalDelete(id) {
    if (confirm("Are you sure want to delete?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_hospital',
                'hospital_id': id
            },
            success: function (res) {
                $("#hospital_" + id).slideUp('slow');
            }
        });
    }
}

function promotionDelete(id) {
    if (confirm("Are you sure want to delete this promotion?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_promotion',
                'promotion_id': id
            },
            success: function (res) {
                $("#promotion_" + id).slideUp('slow');
            }
        });
    }
}

function tourismDelete(id) {
    if (confirm("Are you sure want to delete this tourism?")) {
        $.ajax({
            url: 'admin_ops.php',
            type: 'post',
            data: {
                'action': 'delete_tourism',
                'tourism_id': id
            },
            success: function (res) {
                $("#tourism_" + id).slideUp('slow');
            }
        });
    }
}


function validateChangePassword() {
    var password = $("#password").val();
    var re_password = $("#re-password").val();

    var isReturn = "true";

    var css_error = ({
        'border-color': 'red'
    });
    var css_original = ({
        'border-color': 'rgb(204, 204, 204)'
    });

    $("#password").css(css_original);
    $("#re-password").css(css_original);
    $("#change_pwd_error").hide();


    if (password == "") {
        $("#password").css(css_error);
        isReturn = "false";
        return false;
    } else if (re_password == "") {
        $("#re-password").css(css_error);
        isReturn = "false";
        return false;
    } else if (password != re_password) {
        $("#password").css(css_error);
        $("#re-password").css(css_error);

        $("#change_pwd_error").show();

        isReturn = "false";
        return false;
    }

    if (isReturn == "true") {
//        code for form submit
        $("#change_password").submit();
    }
}

function validateUpdateAppUser() {
    
    $("#checkbox_select_error_lbl").hide();

    if($(".enterprise_chkbox_class:checkbox:checked").length <= 0){
        $("#checkbox_select_error_lbl").show();
        return false;
    } else {
        return true;
    }
}
