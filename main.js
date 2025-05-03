document.addEventListener("DOMContentLoaded", () => {
    const send = document.getElementById("send");
    send.addEventListener("click", (e) => {
        const options = {
            method: 'POST',
            body: JSON.stringify({
                parameter: "Hello, world!"
            }),
            mode: "cors",
            headers: {
                "Content-Type": "text/json",
            },
        }

        fetch('https://script.google.com/macros/s/AKfycbzhPCk_rGQP87mFAlVO3grNVrCtdtrPmabQfs1fqA/exec', options)
            .then(response => response.text())
            .then(data => console.log('Success:', data))
            .catch(error => console.error('Error:', error));
    })
})