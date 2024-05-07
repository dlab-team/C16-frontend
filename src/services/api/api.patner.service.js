const BASE_URL = process.env.NEXT_API_URL

const getPartners = async () => {
    try {
        const response = await fetch(`${BASE_URL}partners/`,{cache:"no-store"});
        if (!response.ok) {
            throw new Error(`Error al obtener los partners: ${response.statusText}`);
        }
        const data = await response.json();
        return data; // Devuelve la lista de partners
    } catch (error) {
        console.error('Error al obtener los partners:', error);
        return []; // Devuelve una lista vacía en caso de error
    }
};
const addPartners = async () => {
    const response = await fetch(`${BASE_URL}partners/`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
        },

        body: JSON.stringify(data),
    });
    return response
}
export {
    getPartners,


}