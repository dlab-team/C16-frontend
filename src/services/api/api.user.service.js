const BASE_URL = process.env.NEXT_PUBLIC_API_URL

// crea un nuevo usuario en la base de datos (backend) y lo retorna
// si el usuario yá existe solo lo retorna
const createUser = async (idToken) => {
    console.log(BASE_URL)
    const response = await fetch(`${BASE_URL}/users`, {
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
    const response = await fetch(`${BASE_URL}/users/${uid}`)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json()
}

// consulto todos los usuarios
const getAllUsers = async (page = 1, name = "") => {
    const response = await fetch(`${BASE_URL}/users?page=${page}&name=${name}`)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json()
}

// Actualizo un los campos de un usuario por medio de su ID
const updateUser = async (uid, newData, idToken) => {
    console.log('new data:, ', newData)
    console.log(uid)
    const response = await fetch(`${BASE_URL}/users/${uid}`, {
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

const updateUserPhoto = async (uid, formData, idToken) => {

    const response = await fetch(`${BASE_URL}/users/${uid}/uploadUserImage`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${idToken}`,
        },
        body: formData
    })

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json()
}

//Descargar excel de usuarios

const downloadExcel = async (idToken) => {
    try {
        const response = await fetch(`${BASE_URL}/users/downloadExcel`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${idToken}`,
            },
        });
       return response

    } catch (error) {
        console.error('Error descargando el archivo:', error);
    }
}

// elimino un usuario por medio de su ID
const deleteUser = async (uid, idToken) => {
    const response = await fetch(`${BASE_URL}/users/${uid}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
        },
    })

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response
}

const disableUser = async (uid, idToken, enabled) => {
    const response = await fetch(`${BASE_URL}/users/${uid}/toggleEnabled`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({enabled})
    })

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json()
}

export {
    createUser,
    getUser,
    getAllUsers,
    updateUser,
    downloadExcel,
    updateUserPhoto,
    deleteUser,
    disableUser
}