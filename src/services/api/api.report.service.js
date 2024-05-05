const getReports = async (active, page = '1', idToken) => {
  const estado = active
  if (!active) {
    active = ''
  }
  const response = await fetch(
    `https://c16-backend.onrender.com/api/reports?active=${estado}&page=${page}`,
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

const updateReport = async (id, active, idToken) => {
  const estado = active
  const response = await fetch(
    `https://c16-backend.onrender.com/api/reports/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify({
        active: estado,
      }),
    },
  )
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return response
}

const deleteReport = async (id, idToken) => {
  const response = await fetch(
    `https://c16-backend.onrender.com/api/reports/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${idToken}`,
      },
    },
  )
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return response
}

export { getReports, updateReport, deleteReport }
