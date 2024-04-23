
const getAllPosts = async (page='1') => {
    const response = await fetch(`https://c16-backend.onrender.com/api/posts/?page=${page}`, {cache: "no-store"})
    const posts = await response.json()
    return posts
}
const getByComuna = async (page='1', comuna) => {
    const response = await fetch(`https://c16-backend.onrender.com/api/posts/?comuna=${comuna}&page=${page}`,{cache: "no-store"})
    const posts = await response.json()
    return posts
}
const getPostActividad = async (uid, page='1') => {
    const response = await fetch(`https://c16-backend.onrender.com/api/posts/?userId=${uid}&page=${page}`,{cache: "no-store"})
    const posts = await response.json()
    return posts
}
const createPost = async (idToken, data) => {
    const response = await fetch(`https://c16-backend.onrender.com/api/posts/`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
        },

        body: JSON.stringify(data), 
    });
    return response.json()
}

const editPost = async (idToken, data, pid) => {
    const response = await fetch(`https://c16-backend.onrender.com/api/posts/${pid}`, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({content:data}), 
    })

    return response
}
const deletePost = async (idToken, pid) => {
    const response = await fetch(`https://c16-backend.onrender.com/api/posts/${pid}`, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
        },
    })

    return response
}
const reportPost = async (idToken, pid) => {
    const id = pid.toString()
    const response = await fetch(`https://c16-backend.onrender.com/api/reports/`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
        },

        body: JSON.stringify({postId:id}), 
    })
    return response.json()
}

const getPostById = async (pid) => {
    const response = await fetch(`https://c16-backend.onrender.com/api/posts/${pid}`, { cache: "no-store" })

    /* if(!response.ok){
        throw new Error("Error al obtener la publicación, puede que haya sido eliminado")
    } */

    const info = await response.json()

    return info.data
}

const searchByKeyword = async (keyword) => {
    const response = await fetch(`https://c16-backend.onrender.com/api/posts?search=${keyword}`, { cache: "no-store" })

    /* if(!response.ok){
        throw new Error("Error al obtener las publicaciones")
    } */

    const info = await response.json()

    return info
}

export {
    searchByKeyword,
    getPostById,
    getAllPosts,
    createPost,
    reportPost,
    deletePost,
    editPost,
    getByComuna,
    getPostActividad,
}