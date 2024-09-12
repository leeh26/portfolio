function sendEmail(){
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_f7ho3c9", "template_6c7c9uk", params).then(function(res) {
        alert("Success! " + res.status);
    });
}