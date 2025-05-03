document.addEventListener("DOMContentLoaded", () => {
    const send = document.getElementById("send");
    send.addEventListener("click", (e) => {
        console.log("Updated!");
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

        fetch('https://script.google.com/macros/s/AKfycbzEKjbrZypNdK5KIupviqZrdamM5InSRwAH6CcSeYtz_OG6Gp6RNm9aCkqNTcmENH8/exec', options)
            .then(response => response.text())
            .then(data => console.log('Success:', data))
            .catch(error => console.error('Error:', error));
    })
})
