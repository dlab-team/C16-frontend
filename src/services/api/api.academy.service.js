const BASE_URL = process.env.NEXT_PUBLIC_API_URL

const getAllVideos = async (page = '1', search = '') => {
  let response
  if (search == '') {
    response = await fetch(`${BASE_URL}/materials?page=${page}`, {
      cache: 'no-store',
    })
  } else {
    response = await fetch(
      `${BASE_URL}/materials?page=${page}&search=${search}`,
      { cache: 'no-store' },
    )
  }
  return response
}

const getVideoById = async (id, idToken) => {
  const response = await fetch(`${BASE_URL}/materials/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`,
    },
  })
  return response.json()
}

const createVideo = async (data, idToken) => {
  const response = await fetch(`${BASE_URL}/materials`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`,
    },
    body: JSON.stringify(data),
  })
  return response.json()
}

const updateVideo = async (id, data, idToken) => {
  const response = await fetch(`${BASE_URL}/materials/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`,
    },
    body: JSON.stringify(data),
  })
  return response
}

const deleteVideo = async (id, idToken) => {
  const response = await fetch(`${BASE_URL}/materials/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`,
    },
  })
  return response
}

export { getAllVideos, createVideo, deleteVideo, getVideoById, updateVideo }
