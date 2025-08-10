// Select DOM elements
const submit = document.getElementById("searchBtn");
const details = document.getElementById("movieDetails");
const errorMessage = document.getElementById("errorMessage");

// Trigger search on button click
submit.addEventListener("click", getDetails);

// Fetch and display movie details
async function getDetails(event) {
    try {
        const title = document.getElementById("movieInput").value.trim(); // Get user input
        const response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=1780685`); // API request
        const movieDetails = await response.json(); // Convert response to JSON

        // Display movie info
        details.innerHTML = `
            <img src="${movieDetails.Poster}">
            <p>Title: ${movieDetails.Title}</p>
            <p>Year: ${movieDetails.Year}</p>
            <p>Plot: ${movieDetails.Plot}</p>
        `;
    } catch (error) {
        errorMessage.innerHTML = '<p>Unable to fetch data</p>'; // Show error message
    }
}
