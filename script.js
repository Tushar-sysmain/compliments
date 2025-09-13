document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.txt');

    elements.forEach(element => {
        const html = element.innerHTML;
        element.innerHTML = '';
        let index = 0;

        function type() {
            if (index < html.length) {
                if (html.substring(index, index + 4) === '&nbsp;') {
                    element.innerHTML += '&nbsp;';
                    index += 6; // length of &nbsp;
                } else if (html.substring(index, index + 4) === '<br>') {
                    element.innerHTML += '<br>';
                    index += 4;
                } else {
                    element.innerHTML += html.charAt(index);
                    index++;
                }
                setTimeout(type, 30); // typing speed in ms
            }
        }

        type();
    });
});
