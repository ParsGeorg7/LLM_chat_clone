import { nanoid } from 'nanoid';

import { getMockData } from '@/app/api/chat';
import { IChartData } from '@/entities/dialogs/ts/interfaces';

export const createChatResponce = (content: string) => {
  let resObj: IChartData =  {}, resAr: IChartData[] = []

  content.split(' ').forEach(item => {
    if(item && isNaN(Number(item))) {
      resObj.name = item
    }
    else {
      resObj.uv = +item
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