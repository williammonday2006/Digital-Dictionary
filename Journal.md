### Phase 1

I used return response.json() in the first .then() to pass the parsed response to the next .then(). The second .then() receives this data as the data parameter and logs it to the console.

### Phase 2

A Promise represents a value that will be available after an asynchronous operation finishes. In this code, the fetch request returns a Promise while the dictionary server processes the request.

If the API is down or the request fails, an error can occur. The `.catch()` block handles the error and displays a clear error message instead of letting the program fail without an explanation.

### Phase 3

Using the Fetch API allows the page to update only the dictionary results instead of reloading the entire page. This makes the application feel faster and smoother because the user can search for another word without waiting for the whole page to reload.

### Phase 4

I prefer async/await because I find it easier to read than multiple `.then()` calls. The code looks more like a normal sequence of steps: wait for the fetch, check the response, then wait for the JSON data. This makes it easier for me to follow what the program is doing.
