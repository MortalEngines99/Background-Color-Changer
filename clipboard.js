// Instantiate Clipboard JS  
let clipboard = new ClipboardJS('#rgbParagraph');
const alert = document.getElementById("alert");

clipboard.on('success', function(e) {

    message = `${e.text} copied to clipboard`;

    alert.classList.add("show");
    alert.innerText = message;

    setTimeout(() => {
        alert.classList.remove("show");
    }, 3000);


    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);

    alert.classList.add("show");
    alert.innerText = e.error;

    setTimeout(() => {
        alert.classList.remove("show");
    }, 3000);
});