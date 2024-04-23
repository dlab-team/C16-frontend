
// crea un nuevo usuario en la base de datos (backend) y lo retorna
// si el usuario yá existe solo lo retorna
const createUser = async (idToken) => {
    const response = await fetch(`https://c16-backend.onrender.com/api/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
        },
    })

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json()
}

// consulto un usuario por medio de su ID
const getUser = async (uid) => {
    const response = await fetch(`https://c16-backend.onrender.com/api/users/${uid}`)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json()
}


// Actualizo un los campos de un usuario por medio de su ID
const updateUser = async (uid, newData, idToken) => {
    console.log('new data:, ', newData)
    console.log(uid)
    const response = await fetch(`https://c16-backend.onrender.com/api/users/${uid}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify(newData)
    })

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json()
}

export {
    createUser,
    getUser,
    updateUser,
}