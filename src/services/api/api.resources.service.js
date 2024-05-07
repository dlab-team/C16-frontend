const BASE_URL = 'https://c16-backend.onrender.com/api'

// function to get all resources from API
export const getAllResources = async (page = '1', idToken) => {
  const response = await fetch(`${BASE_URL}/resources?page=${page}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`,
    },
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return response.json()
}

// function to get a resource by ID from API
export const getResourceById = async (id, idToken) => {
  const response = await fetch(`${BASE_URL}/resources/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`,
    },
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return response.json()
}

//function to delete a resource by ID from API
export const deleteResourceById = async (id, idToken) => {
  const response = await fetch(`${BASE_URL}/resources/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`,
    },
  })

  return response
}

//function to update a resource by ID from API
export const updateResourceById = async (id, newData, idToken) => {
  const response = await fetch(`${BASE_URL}/resources/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
    body: newData,
  })
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return response
}

//function to create a resource from API
export const createResource = async (data, idToken) => {
  const response = await fetch(`${BASE_URL}/resources`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
    body: data,
  })
  return response
}

// function to get resources by words from API
export const getResourcesByWord = async (search, page = '1', idToken) => {
  const response = await fetch(
    `${BASE_URL}/resources?search=${search}&page=${page}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${idToken}`,
      },
    },
  )

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return response.json()
}

// function to get resources by comuna from API
export const getResourcesByComuna = async (comuna, page = '1', idToken) => {
  const response = await fetch(
    `${BASE_URL}/resources?comuna=${comuna}&page=${page}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${idToken}`,
      },
    },
  )

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return response.json()
}
