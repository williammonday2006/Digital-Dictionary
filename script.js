const searchBtn = document.getElementById('search-button');
const wordInput = document.getElementById('word-input');
const resultContainer = document.getElementById('result-container');

async function searchWord(word) {
    resultContainer.replaceChildren();

    const response = await fetch(`https://freedictionaryapi.com/api/v1/entries/en/${word}`);

    if (!response.ok) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Service Down';
        resultContainer.appendChild(errorMessage);
        return;
    }

    const data = await response.json();

    if (!data.entries || data.entries.length === 0) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Word not found';
        resultContainer.appendChild(errorMessage);
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