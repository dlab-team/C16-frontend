const BASE_URL = process.env.NEXT_PUBLIC_API_URL

const getAllVideos = async (page='1', search='')=>{
    let response
    if(search==''){
        response = await fetch(`${BASE_URL}/materials?page=${page}`, {cache: "no-store"})
    } else{
        response = await fetch(`${BASE_URL}/materials?page=${page}&search=${search}`, {cache: "no-store"})
    }
    return response
}


export {
    getAllVideos,
    }