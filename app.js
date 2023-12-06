function convertToBinary() {
    var textInput = document.getElementById("textInput").value;

    var binaryOutput = "";
    for (var i = 0; i < textInput.length; i++) {
        var asciiValue = textInput.charCodeAt(i);

        var binaryValue = asciiValue.toString(2).padStart(8, '0');

        binaryOutput += binaryValue + " ";
    }

    document.getElementById("binaryOutput").value = binaryOutput.trim();
}
