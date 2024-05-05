const resourceByIdAdapter = (data) => {
  return {
    id: data?.id,
    userId: data?.userId,
    description: data?.description,
    comuna: data?.comuna,
    url: data?.url,
    highlighted: data?.highlighted,
    image: data?.image,
    createdAt: data?.createdAt,
    updatedAt: data?.updatedAt,
  }
}

export default resourceByIdAdapter
