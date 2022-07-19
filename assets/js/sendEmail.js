// function has one one argument "contactForm"
function sendMail(contactForm) {

    emailjs.send("service_k3gz7eq","template_46wy6i4",{
        from_name: contactForm.name.value,
        project_request: contactForm.projectsummary.value,
        from_email: contactForm.emailAddress.value
        })
        .then(
            function(response) {
                console.log("SUCESS", response)
            },
            function(error) {
                console.log("Error: Unable to send", error)
            }
        );

        return false; // To block from loading a new page
};
