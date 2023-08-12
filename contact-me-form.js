

function contactForm (name, email, subject, message) {

    let data = {
        service_id: 'service_cf9n0zl',
        template_id: 'template_o82suek',
        user_id: 'QN8EhX4ApY_fsmSnd',

        template_params: {
            name: name,
            email: email,
            subject: subject,
            message: message,
        }
    }

    return data;

}

const sendBtn = document.getElementById('send-button');

const nameInput = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');



sendBtn.addEventListener('click', function() {
    jQuery.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(contactForm (nameInput.value, email.value, subject.value, message.value)),
    contentType: 'application/json',
    }).done(function() {
        alert('Your message is sent!');
    }).fail(function(error) {
        alert('Oops! There is an error' + JSON.stringify(error));
    });
})

const content = document.getElementById('content');
const contact = document.getElementById('contact');

function getStarCoord(min, max) {
    return (Math.random() * (max - min + 1) + min);
}

function generateStar() {
    let star = document.createElement("div");
    star.classList.add("stars");
    let x = getStarCoord(0, 100);
    let y = getStarCoord(0, 100);
    star.style.transform = `translate(${x}vw, ${y}vh)`;
    // content.insertBefore(star, contact);
    content.appendChild(star);
    return star;
}

for (let i = 0; i < 1000; i++) {
    generateStar();
}