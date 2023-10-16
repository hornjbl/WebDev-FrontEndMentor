// URL of the JSON file on your server
const urlData = "./data.json";

// Use the Fetch API to make an HTTP GET request to the file
fetch(urlData)
    .then((response) => {
        // Check if the response status is OK (200)
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        // Parse the JSON data from the response
        return response.json();
    })
    .then((data) => {
        // Handle the JSON data
        const elSummaryReaction = document.getElementById("summary-reaction");
        const elSummaryMemory = document.getElementById("summary-memory");
        const elSummaryVerbal = document.getElementById("summary-verbal");
        const elSummaryVisual = document.getElementById("summary-visual");
        const elResultScore = document.getElementById("result-score");

        const valSummaryReaction = data[0].score;
        const valSummaryMemory = data[1].score;
        const valSummaryVerbal = data[2].score;
        const valSummaryVisual = data[3].score;
        const valResultScore = Math.round(((valSummaryReaction + valSummaryMemory + valSummaryVerbal + valSummaryVisual) / 400) * 100);

        elSummaryReaction.innerText = valSummaryReaction;
        elSummaryMemory.innerText = valSummaryMemory;
        elSummaryVerbal.innerText = valSummaryVerbal;
        elSummaryVisual.innerText = valSummaryVisual;
        elResultScore.innerText = valResultScore;
    })
    .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("Fetch error:", error);
    });
