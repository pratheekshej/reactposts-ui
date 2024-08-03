export const API = 'http://localhost:8080';

export const postAPI = (payload) => ({
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getAPI = () => ({
    method: 'GET'
});