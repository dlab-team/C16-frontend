import { formatDate } from '@/utils'

export const resourcesInfoAdapter = (data) => {
  return data?.map((item) => {
    return {
      id: item?.id,
      title: item?.title,
      content: item?.content,
      type: item?.type,
      imgUrl: item?.imgUrl,
      createdAt: formatDate(item?.createdAt),
      author: item?.author,
    }
  })
}
