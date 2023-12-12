// import { IMessage } from '@/entities';

import { BASE_URL } from "@/app/constants";
import { LOCALE } from "@/app/locale";

export const sendMessage = async (
  message: string,
): Promise<any> => {//IMessage | null
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(message),
    });
    return await res.json();
  } catch {
    console.error(LOCALE.chatErrText);
  }
  return null;
};
