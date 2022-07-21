window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // generate a five digit number for the contact_number variable

        // these IDs from the previous steps
        emailjs.sendForm('service_ahd6yr7', 'template_jli0ypm', this)
            .then(function() {
                console.log('SUCCESS!');
                document.getElementById("contact-form").reset();
                document.querySelector('contact-alert').style.display = 'block';
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}




