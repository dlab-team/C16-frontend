export const modifyData =  async (url, method, data) => {
  const response = await fetch (url,{
    method: method, // *GET, POST,PUT DELETE, ETC.
    headers:{
      "Content-Type":"aplication/json",
      Authorization: `Bearer ${data}`,
    },
  });
  return response.json();
}   