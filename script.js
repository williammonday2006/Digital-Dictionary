fetch('https://freedictionaryapi.com/api/v1/entries/en/hello')
    .then(response => {
        if (!response.ok) {
            throw new Error('Request failed');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    });