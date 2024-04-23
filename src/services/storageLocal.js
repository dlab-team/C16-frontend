// Guarda el token recibido por argumento en local storage
const saveTokenStorage = (idToken) => {
    localStorage.setItem('data', idToken)
}

// Obtiene el token de localstorage y lo retorna
const getTokenStorage = () => {
    return localStorage.getItem("data");
}

// Elimina el token de localstorage
const deleteTokenStorage = () => {
    localStorage.removeItem("data");
}

// Guarda el token recibido por argumento en local storage
const saveUserStorage = (idToken) => {
    localStorage.setItem('info', idToken)
}

// Obtiene el token de localstorage y lo retorna
const getUserStorage = () => {
    return localStorage.getItem("info");
}

// Elimina el token de localstorage
const deleteUserStorage = () => {
    localStorage.removeItem("info");
}

export {
    saveTokenStorage,
    getTokenStorage,
    deleteTokenStorage,
    saveUserStorage,
    getUserStorage,
    deleteUserStorage,
}