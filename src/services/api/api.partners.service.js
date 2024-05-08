const BASE_URL = process.env.NEXT_PUBLIC_API_URL

// Trae todos los Socios de la API
export const getAllPartners = async (page = '1', idToken) => {
  const response = await fetch(`${BASE_URL}/partners/?page=${page}`, {
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

// Trae todos los Socios de la API
export const getAllPartnersCarusel = async (idToken) => {
  const response = await fetch(`${BASE_URL}/partners`, {
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

// Trae los Socios por ID desde la API

export const getPartnerById = async (partnerId, idToken) => {
  const response = await fetch(`${BASE_URL}/partners/${partnerId}`, {
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

//Elimina un Socio por ID de la API

export const deletePartnerById = async (partnerId, idToken) => {
  const response = await fetch(`${BASE_URL}/partners/${partnerId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`,
    },
  })

  return response
}

//Actualiza los Socios por ID desde la API

export const updatePartnerById = async (partnerId, newData, idToken) => {
  const url = `${BASE_URL}/partners/${partnerId}`;
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
    body: newData,
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response;
};

//Crear un Socio en la la API

export const createPartner = async (data, idToken) => {
  const response = await fetch(`${BASE_URL}/partners`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
    body: data,
  })
  return response
}

// Trae un Socio por palabra desde la API

export const getPartnerByWord = async (search, page = '1', idToken) => {
  const response = await fetch(
    `${BASE_URL}/partners?search=${search}&page=${page}`,
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
