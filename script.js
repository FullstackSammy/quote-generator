let apiQuotes = [];

// Show New Quote
function newQuote() {
    
}


// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {

    };
};


// On load
getQuotes();
