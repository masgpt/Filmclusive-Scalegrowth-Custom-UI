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
    const emailButton = document.querySelector('.email-button');

    // Assuming the email address is stored in a data attribute on the button
    const emailAddress = emailButton.getAttribute('data-email'); // Get the email from a data attribute

    // Set the email address as the button text
    emailButton.textContent = emailAddress;
});