const resourcesAdapter = (data) => {
  const resourcesAdapted = data?.map((resource) => {
    return {
      id: resource?.id,
      userId: resource?.userId,
      description: resource?.description,
      name: resource?.name,
      url: resource?.url,
      image: resource?.image,
      createdAt: resource?.createdAt,
      updatedAt: resource?.updatedAt,
    }
  })

  return resourcesAdapted
}

export default resourcesAdapter
