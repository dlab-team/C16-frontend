const getAllVideos = async (page='1', title='')=>{
    let response
    if(title==''){
        response = await fetch(`https://c16-backend.onrender.com/api/materials?page=${page}`)
    } else{
        console.log(1)
        response = await fetch(`https://c16-backend.onrender.com/api/materials?page=${page}&title=${title}`, {cache: "no-store"})
    }
    return response
}


export {
    getAllVideos,
    }