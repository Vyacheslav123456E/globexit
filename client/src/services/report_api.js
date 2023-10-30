
export const getReport = async () => {
    return new Promise(async (resolve, reject) => {
        fetch('http://localhost:3000')
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => console.error(error));
    })
}
export const getUserFilter = async (payload) => {
    return new Promise(async (resolve, reject) => {
        fetch(`http://localhost:3000?term=${payload}`)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => console.error(error));
    })
}