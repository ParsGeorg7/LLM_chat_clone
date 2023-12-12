import { NextRequest } from 'next/server';
import { nanoid } from 'nanoid';

import { createChatResponce } from '@/app/api/chat';
import { LOCALE } from '@/app/locale';

export const POST = async (req: NextRequest) => {
  const normalizedData = await req.json();
 
  switch (normalizedData) {
    case LOCALE.question1: 
      return new Response(JSON.stringify(createChatResponce(LOCALE.response1)))
    case LOCALE.question2:
      return new Response(JSON.stringify(createChatResponce(LOCALE.response2)))
    case LOCALE.question3:
      return new Response(JSON.stringify(createChatResponce(LOCALE.response3)))
    case '': return new Response(
      JSON.stringify({
        id: nanoid(),
        type: LOCALE.messageChatResponseText,
        content: LOCALE.emptyQuestionResponse,
      }),
    );
    default:
      return new Response(
        JSON.stringify({
          id: nanoid(),
          type: LOCALE.messageChatResponseText,
          content: LOCALE.defaultResponse
        })
      );
  }
};
