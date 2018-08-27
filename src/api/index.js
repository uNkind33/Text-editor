export const getSynonyms = (value) => {
    const API_PREFIX = 'https://api.datamuse.com/words?ml=';
    return fetch(`${API_PREFIX}${value}`)
        .then(data => data.json())
        .catch(error => console.log(error));
}
