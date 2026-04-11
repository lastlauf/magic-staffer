import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';
import { SYSTEM_PROMPT } from '@/lib/chat-system-prompt';

const model = anthropic('claude-haiku-4-5');

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model,
    system: SYSTEM_PROMPT,
    messages,
    maxOutputTokens: 500,
  });

  return result.toUIMessageStreamResponse();
}
