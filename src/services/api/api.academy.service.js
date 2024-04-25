const getAllVideos = async (page='1', search='')=>{
    let response
    if(search==''){
        response = await fetch(`https://c16-backend.onrender.com/api/materials?page=${page}`)
    } else{
        response = await fetch(`https://c16-backend.onrender.com/api/materials?page=${page}&search=${search}`, {cache: "no-store"})
    }
    return response
}


export {
    getAllVideos,
    }