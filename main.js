$(document).ready(function () {
    // When the sidebar header is clicked
    $('#sidebar h2').click(function () {
        // Toggle the visibility of the sidebar links
        $('#sidebar ul').slideToggle('fast');
    });

    // Add a click event listener to each node
    document.querySelectorAll('.node').forEach(function(node) {
        node.addEventListener('click', function() {
            // Toggle the 'complete' class
            this.classList.toggle('complete');
        });
    });

    // Get the necessary elements
    const chatContainer = document.querySelector('.chat-container');
    const userInput = document.querySelector('.user-input');
    const inputField = userInput.querySelector('input');
    const sendButton = userInput.querySelector('button');

    // Function to handle sending a message
    function sendMessage() {
    const messageText = inputField.value;
    
    // Create a new message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    
    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.innerHTML = `<p>${messageText}</p>`;
    
    const messageTimestamp = document.createElement('div');
    messageTimestamp.classList.add('message-timestamp');
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    messageTimestamp.textContent = timestamp;
    
    messageElement.appendChild(messageContent);
    messageElement.appendChild(messageTimestamp);
    
    chatContainer.appendChild(messageElement);
    
    // Clear the input field
    inputField.value = '';
    }

    // Event listener for sending a message
    sendButton.addEventListener('click', sendMessage);

});