// function has one one argument "contactForm"
function sendMail(contactForm) {

    const templateParams = {
        "from_name": contactForm.name.value,
        "project_request": contactForm.projectsummary.value,
        "from_email": contactForm.emailaddress.value
    };

    const serviceID = "service_golcdlt";
    const templateID = "template_7qaoafp";

    // Service ID, Template ID, template parameters
    emailjs.send(serviceID, templateID, templateParams)
        .then(
            function(response) {
                console.log("SUCCESS", response)
            },
            function(error) {
                console.log("Error: Unable to send", error)
            }
        );

        return false; // To block from loading a new page
};
