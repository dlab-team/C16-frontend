const BASE_URL = process.env.NEXT_PUBLIC_API_URL

const getAllPosts = async (page='1') => {
    const response = await fetch(`${BASE_URL}/posts/?page=${page}`, {cache: "no-store"})
    const posts = await response.json()
    return posts
}
const getByComuna = async (page='1', comuna) => {
    const response = await fetch(`${BASE_URL}/posts/?comuna=${comuna}&page=${page}`,{cache: "no-store"})
    const posts = await response.json()
    return posts
}
const getPostActividad = async (uid, page='1') => {
    const response = await fetch(`${BASE_URL}/posts/?userId=${uid}&page=${page}`,{cache: "no-store"})
    const posts = await response.json()
    return posts
}
const createPost = async (idToken, data) => {
    const response = await fetch(`${BASE_URL}/posts/`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
        },

        body: JSON.stringify(data), 
    });
    return response
}
const editPost = async (idToken, data, pid) => {
    const response = await fetch(`${BASE_URL}/posts/${pid}`, {
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
    const response = await fetch(`${BASE_URL}/posts/${pid}`, {
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
    const response = await fetch(`${BASE_URL}/reports/`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
        },

        body: JSON.stringify({postId:id}), 
    })
    return response
}


const getPostById = async (pid, page='1') => {
    const response = await fetch(`${BASE_URL}/posts/${pid}/?page=${page}`, { cache: "no-store" })

    /* if(!response.ok){
        throw new Error("Error al obtener la publicación, puede que haya sido eliminado")
    } */

    const info = await response.json()

    return info
}

const searchByKeyword = async (keyword, page='1') => {
    const response = await fetch(`${BASE_URL}/posts?search=${keyword}&page=${page}`, { cache: "no-store" })
    const info = await response.json()

    return info
}
const like = async (idToken, pid) => {
    const response = await fetch(`${BASE_URL}/posts/${pid}/like`, { 
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
        },
        cache: "no-store" 
    })

    return response
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
    like,
}
