const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", async function () {

    const topic = document.getElementById("topic").value;
    const result = document.getElementById("result");

    if (topic === "") {
        alert("Please enter a topic");
        return;
    }

    result.innerText = "Sending request to backend...";

    try {

        const response = await fetch("http://127.0.0.1:5000/api/blog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                topic: topic
            })
        });

        const data = await response.json();

        result.innerText =
            data.message + "\n\nTopic: " + data.topic;

    } catch (error) {

        result.innerText =
            "Error connecting to backend.";

        console.error(error);
    }
});