(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "noj7kojgpi");

// Google tag (gtag.js)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-KCM1R8VHQZ');

document.addEventListener("DOMContentLoaded", function() {
    const emailButtons = document.querySelectorAll('.email-button');

    emailButtons.forEach(button => {
        // Assuming the email address is stored in a data attribute on the button
        const emailAddress = button.getAttribute('data-email'); // Get the email from a data attribute

        // Set the email address as the button text
        button.textContent = emailAddress;
    });

    const submissionLinks = document.querySelectorAll('.field-sg_aam_show_cta_s_user_link');

    submissionLinks.forEach(link => {
        const dynamicUrl = link.getAttribute('data-url'); // Get the dynamic URL from a data attribute
        link.setAttribute('href', dynamicUrl); // Set the href attribute to the dynamic URL
        link.innerText = 'View Submission'; // Set the text to "View Submission"
    });
});