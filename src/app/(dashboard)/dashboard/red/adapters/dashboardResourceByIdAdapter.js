const resourceByIdAdapter = (data) => {
  return {
    id: data?.id,
    userId: data?.userId,
    description: data?.description,
    name: data?.name,
    url: data?.url,
    image: data?.image,
    createdAt: data?.createdAt,
    updatedAt: data?.updatedAt,
  }
}

export default resourceByIdAdapter
