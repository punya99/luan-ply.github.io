if (window.innerWidth < 640) {
    document.getElementById('info-wrp').setAttribute("uk-accordion", "collapsible: true")
}
$('#submitenquiry').click(function(e) {
    e.preventDefault();
    var valid = !0;
    var name = $('#name').val();
    var mobileno = $('#mobileno').val();
    var emailid = $('#emailid').val();
    var query = $('#query').val();
    var consent = $('#consent').prop("checked");
    if (name == '' || mobileno == '' || emailid == '' || query == '' || consent == '') {
        valid = !1;
        alert("Please provide all details..")
    }
    if (valid == !0) {
        var frm_enquiry = $("#enquire_form").serialize();
        $.ajax({
            url: root + "apis/form_api/",
            type: 'POST',
            data: frm_enquiry,
            dataType: "json",
            success: function(response) {
                $('#enquire_form').trigger('reset');
                grecaptcha.reset(0);
                grecaptcha.reset(1);
                if (response.lead == 'failed') {
                    alert("Some error occured please try after some time")
                } else {
                    alert("Thanks for your Enquiry, a representative shall get in touch with you shortly")
                }
            },
            error: function(error) {
                console.log(error)
            }
        })
    }
})
$('#submit_contact').click(function(e) {
    e.preventDefault();
    var valid = !0;
    var name = $('#full_name').val();
    var mobileno = $('#mobile_no').val();
    var emailid = $('#email_id').val();
    var query = $('#message').val();
    var consent = $('#con_sent').prop("checked");
    if (name == '' || mobileno == '' || emailid == '' || query == '' || consent == '' || consent == 'off' || consent == !1) {
        valid = !1;
        alert("Please provide all details..")
    }
    if (valid == !0) {
        var frm_enquiry = $("#frm_contact").serialize();
        $.ajax({
            url: root + "apis/form_api/",
            type: 'POST',
            data: frm_enquiry,
            dataType: "json",
            success: function(response) {
                $('#frm_contact').trigger('reset');
                grecaptcha.reset(0);
                grecaptcha.reset(1);
                if (response.lead == 'failed') {
                    alert("Some error occured please try after some time")
                } else {
                    alert("Thanks for your Enquiry, a representative shall get in touch with you shortly")
                }
            },
            error: function(error) {
                console.log(error)
            }
        })
    }
})
$(document).ready(function() {
    $('.tab-sidebar').each(function() {
        var tab = $(this).find(".tab-sidebar");
        tab.on("click", function() {
            $(this).addClass("active")
        })
    });
    $("#header-search").submit(function(e) {
        e.preventDefault()
    });
    $('#top-search').keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        console.log(keycode);
        var st = $('#top-search').val();
        if (keycode == '13') {
            var st = $('#top-search').val();
            console.log('st=', st);
            var tt = root + "search-page/?q=" + st;
            console.log(tt);
            window.location.href = root + "search-page/?q=" + st
        }
    })
})