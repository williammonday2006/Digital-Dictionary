const searchBtn = document.getElementById('search-button');
const wordInput = document.getElementById('word-input');
const resultContainer = document.getElementById('result-container');

function searchWord(word) {
    resultContainer.replaceChildren();

    fetch(`https://freedictionaryapi.com/api/v1/entries/en/${word}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Request failed');
            }
            return response.json();
        })
        .then(data => {
            if (!data.entries || data.entries.length === 0) {
                const error = document.createElement('p');
                error.textContent = 'Word not found';
                resultContainer.appendChild(error);
                return;
            }

            const heading = document.createElement('h2');
            heading.textContent = data.word;
            resultContainer.appendChild(heading);

            const list = document.createElement('ul');

            data.entries[0].senses.forEach(sense => {
                const li = document.createElement('li');
                li.textContent = sense.definition;
                list.appendChild(li);
            });

            resultContainer.appendChild(list);
        })
        .catch(error => {
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Could not connect to the dictionary service.';
            resultContainer.appendChild(errorMessage);
        });
}

searchBtn.addEventListener('click', () => {
    const word = wordInput.value.toLowerCase().trim();

    if (word === '') {
        resultContainer.replaceChildren();

        const message = document.createElement('p');
        message.textContent = 'Please enter a word.';
        resultContainer.appendChild(message);
        return;
    }

    searchWord(word);
});