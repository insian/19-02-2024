document.getElementById('greetButton').addEventListener('click', function () {
	var name = document.getElementById('nameInput').value;
	var quotation = "The only way to do great work is to love what you do. – Steve Jobs";
	var greetingMessage = "Hello, " + name + "! Here's a quote for you: \"" + quotation + "\"";
	document.getElementById('greetingMessage').innerText = greetingMessage;
});