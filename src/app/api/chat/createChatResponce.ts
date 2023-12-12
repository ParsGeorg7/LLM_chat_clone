import { nanoid } from 'nanoid';

import { getMockData } from '@/app/api/chat';

export const createChatResponce = (content: string) => {
  let resObj: any =  {}, resAr: any = []

  content.split(' ').forEach(item => {
    if(item && isNaN(Number(item))) {
      resObj.name = item
    }
    else {
      resObj.uv = item
      resAr = [...resAr, resObj]
      resObj = {}
    }
  })

  return {
    id: nanoid(),
    type: 'chat-responce',
    content,
    chartData: getMockData(resAr)
  }
};
