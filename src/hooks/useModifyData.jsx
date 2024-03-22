import { useState, useEffect } from 'react'

// Hook para POST, PUT, PATCH
/**
 * Fetches data from a specified URL using Axios.
 * @param {string} url - The API endpoint URL.
 * @param {string} - HTTP method (POST, PUT, etc.).
 * @param {object} [body] - Data to send in the request body.
 */
const useModifyData = (url, method, body) => {
  const [response, setResponse] = useState([])
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const modifyData = async () => {
      setLoading(true)
      try {
        const result = await fetch(
          `${url}`,
          {
            method,
            body: body ? JSON.stringify(body) : {},
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )

        const jsonData = await result.json()
        if (result.ok) {
          setResponse(jsonData)
        } else {
          setIsError(true)
          setError(jsonData)
        }
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    modifyData()
  }, [])

  return { response, loading, isError, error }
}

export default useModifyData
