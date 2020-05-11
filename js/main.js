//
// (function ($) {
//     "use strict";
//
//
//     /*==================================================================
//     [ Focus input ]*/
//     $('.input100').each(function(){
//         $(this).on('blur', function(){
//             if($(this).val().trim() != "") {
//                 $(this).addClass('has-val');
//             }
//             else {
//                 $(this).removeClass('has-val');
//             }
//         })
//     })
//
//
//     /*==================================================================
//     [ Validate ]*/
//     var input = $('.validate-input .input100');
//
//     $('.validate-form').on('submit',function(){
//         var check = true;
//
//         for(var i=0; i<input.length; i++) {
//             if(validate(input[i]) == false){
//                 showValidate(input[i]);
//                 check=false;
//             }
//         }
//
//         return check;
//     });
//
//
//     $('.validate-form .input100').each(function(){
//         $(this).focus(function(){
//            hideValidate(this);
//         });
//     });
//
//     function validate (input) {
//         if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
//             if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
//                 return false;
//             }
//         }
//         else {
//             if($(input).val().trim() == ''){
//                 return false;
//             }
//         }
//     }
//
//     function showValidate(input) {
//         var thisAlert = $(input).parent();
//
//         $(thisAlert).addClass('alert-validate');
//     }
//
//     function hideValidate(input) {
//         var thisAlert = $(input).parent();
//
//         $(thisAlert).removeClass('alert-validate');
//     }
//
//
// })(jQuery);

$("#myForm").on("submit", function(event) {
  if (event.isDefaultPrevented()) {
        console.log("error");
        // submitFailed();
    } else {
        event.preventDefault();
        setInputDate("#submitDate");
        csubmitForm();
        submitSuccess();
        console.log("Success");
    }
});

function setInputDate(_id){
    var _dat = document.querySelector(_id);
    var hoy = new Date(),
        d = hoy.getDate(),
        m = hoy.getMonth()+1,
        y = hoy.getFullYear(),
        t = hoy.toTimeString(),
        data;

    if(d < 10){
        d = "0"+d;
    };
    if(m < 10){
        m = "0"+m;
    };

    data = y+"-"+m+"-"+d+" ("+t+")";
    console.log(data);
    _dat.value = data;
};

// $('#myModal').modal({ show: false});
function submitSuccess() {
  $('#myModal').modal('show');
}
// setInputDate("#submitDate");

function csubmitForm() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyFxQ-V3Rjg0MYtJ60a-tVPZdZxUQYl-aj3NSA4al2Q2gdsyQ/exec'
  const form = document.forms['contact-form']
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .then(response => submitSuccess())

    .catch(error => console.error('Error!', error.message))
}
