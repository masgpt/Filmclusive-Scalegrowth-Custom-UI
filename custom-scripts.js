(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}; // Initializes the clarity tracking function
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i; // Creates a script element for Clarity
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y); // Inserts the script element into the DOM
})(window, document, "clarity", "script", "noj7kojgpi");

// Google tag (gtag.js)
window.dataLayer = window.dataLayer || []; // Initializes the dataLayer array for Google Analytics
function gtag(){dataLayer.push(arguments);} // Function to send data to Google Analytics
gtag('js', new Date()); // Sends the current date to Google Analytics
gtag('config', 'G-KCM1R8VHQZ'); // Configures Google Analytics with the tracking ID

document.addEventListener("DOMContentLoaded", function() { // Waits for the DOM to fully load
    const emailButtons = document.querySelectorAll('.email-button'); // Selects all email buttons

    emailButtons.forEach(button => { // Iterates over each button
        const emailAddress = button.getAttribute('data-email'); // Gets the email from a data attribute
        button.textContent = emailAddress; // Sets the email address as the button text
    });
});