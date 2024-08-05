document.addEventListener('DOMContentLoaded', function () {
    const helloText = "Hello, My Name is ";
    const nameText = "Abdullah Khan";
    const jobText = "I am a Web Developer.";
    
    function typeEffect(element, text, delay) {
        let index = 0;
        function type() {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, delay);
            }
        }
        type();
    }
    typeEffect(document.getElementById('hello-text'), helloText, 100);
    setTimeout(() => typeEffect(document.getElementById('name-text'), nameText, 100), helloText.length * 100 + 500);
    setTimeout(() => typeEffect(document.getElementById('job-text'), jobText, 100), (helloText.length + nameText.length) * 100 + 1000);
});  
