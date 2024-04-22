
const getAllPosts = async () => {
    const response = await fetch("https://c16-backend.onrender.com/api/posts")
    const posts = await response.json()
    return posts.data
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
    const response = await fetch(`https://c16-backend.onrender.com/api/reports/`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
        },

        body: JSON.stringify({postId:pid}), 
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
}