// src/ai/flows/ai-conversation-moderator.ts
'use server';

/**
 * @fileOverview AI-powered conversation moderation to ensure respectful dialogue.
 *
 * - moderateConversation - A function that moderates conversations by detecting and addressing disrespectful language or behavior.
 * - ModerateConversationInput - The input type for the moderateConversation function.
 * - ModerateConversationOutput - The return type for the moderateConversation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ModerateConversationInputSchema = z.object({
  message: z.string().describe('The message to be checked for disrespectful language or behavior.'),
  conversationHistory: z.string().describe('The history of the conversation. Include prior bot messages.'),
});
export type ModerateConversationInput = z.infer<typeof ModerateConversationInputSchema>;

const ModerateConversationOutputSchema = z.object({
  isRespectful: z.boolean().describe('Whether the message is respectful or not.'),
  explanation: z.string().describe('An explanation of why the message is respectful or not, and suggestions for improvement if not respectful.'),
});
export type ModerateConversationOutput = z.infer<typeof ModerateConversationOutputSchema>;

export async function moderateConversation(input: ModerateConversationInput): Promise<ModerateConversationOutput> {
  return moderateConversationFlow(input);
}

const moderateConversationPrompt = ai.definePrompt({
  name: 'moderateConversationPrompt',
  input: {schema: ModerateConversationInputSchema},
  output: {schema: ModerateConversationOutputSchema},
  prompt: `You are an AI conversation moderator. Your job is to ensure that conversations are respectful and civil.

  Here's the history of the conversation:
  {{conversationHistory}}

  Here's the message to check:
  {{message}}

  Based on the message and the conversation history, determine if the message is respectful. If it is not, explain why and suggest improvements.
  Return a JSON object with the following format:
  {
    "isRespectful": true or false,
    "explanation": "Explanation of why the message is respectful or not. Be polite and constructive."
  }`,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const moderateConversationFlow = ai.defineFlow(
  {
    name: 'moderateConversationFlow',
    inputSchema: ModerateConversationInputSchema,
    outputSchema: ModerateConversationOutputSchema,
  },
  async input => {
    const {output} = await moderateConversationPrompt(input);
    return output!;
  }
);

