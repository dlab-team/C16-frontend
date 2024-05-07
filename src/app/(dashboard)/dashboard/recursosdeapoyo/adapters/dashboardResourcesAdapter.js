const resourcesAdapter = (data) => {
  const resourcesAdapted = data?.map((resource) => {
    return {
      id: resource?.id,
      userId: resource?.userId,
      description: resource?.description,
      comuna: resource?.comuna,
      url: resource?.url,
      highlighted: resource?.highlighted,
      image: resource?.image,
      createdAt: resource?.createdAt,
      updatedAt: resource?.updatedAt,
      title: resource?.title,
    }
  })

  return resourcesAdapted
}

export default resourcesAdapter
