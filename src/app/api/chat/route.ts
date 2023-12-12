import { NextRequest } from 'next/server';
import { nanoid } from 'nanoid';

import { createChatResponce } from '@/app/api/chat';

export const POST = async (req: NextRequest) => {
  const normalizedData = await req.json()//.toLowerCase().replaceAll(/[^a-zA-z0-9\s]+/g, '');
 
  switch (normalizedData) {
    case 'сколько миллионов людей в США и России':
      return new Response(JSON.stringify(createChatResponce(`США: 331 Россия: 150`)))
    case 'Сколько метро в Москве и Новоссибирске':
      return new Response(JSON.stringify(createChatResponce(`Москва: 350 Новоссибирск: 9`)))
    case 'сколько балов у ферзя и ладьи':
      return new Response(JSON.stringify(createChatResponce(`Ферзь: 9 Ладья: 5`)))
    case '': return new Response(
      JSON.stringify({
        id: nanoid(),
        type: 'chat-responce',
        content: 'Ваше сообщение пустое!',
      }),
    );
    default:
      return new Response(
        JSON.stringify({
          id: nanoid(),
          type: 'chat-responce',
          content: 'У меня нет ответа на ваш вопрос'
        }),
      );
  }
};
