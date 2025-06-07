// 'use server';
/**
 * @fileOverview An AI flow for generating icebreaker questions based on shared needs and services.
 *
 * - generateIntroduction - A function that generates an introduction and icebreaker question.
 * - IntroductionInput - The input type for the generateIntroduction function.
 * - IntroductionOutput - The return type for the generateIntroduction function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IntroductionInputSchema = z.object({
  user1Services: z.string().describe('The services offered by the first user.'),
  user1Needs: z.string().describe('The needs of the first user.'),
  user2Services: z.string().describe('The services offered by the second user.'),
  user2Needs: z.string().describe('The needs of the second user.'),
});

export type IntroductionInput = z.infer<typeof IntroductionInputSchema>;

const IntroductionOutputSchema = z.object({
  introduction: z.string().describe('A brief introduction of the two users.'),
  icebreaker: z.string().describe('An icebreaker question to start a meaningful conversation.'),
});

export type IntroductionOutput = z.infer<typeof IntroductionOutputSchema>;

export async function generateIntroduction(input: IntroductionInput): Promise<IntroductionOutput> {
  return aiIntroductionFlow(input);
}

const aiIntroductionPrompt = ai.definePrompt({
  name: 'aiIntroductionPrompt',
  input: {schema: IntroductionInputSchema},
  output: {schema: IntroductionOutputSchema},
  prompt: `You are an AI assistant designed to facilitate connections between people in a community.

You will receive information about two users, including their offered services and their needs.
Your task is to generate a brief introduction for the two users and suggest an icebreaker question
to help them start a meaningful conversation based on their shared needs and services.

User 1 Services: {{{user1Services}}}
User 1 Needs: {{{user1Needs}}}
User 2 Services: {{{user2Services}}}
User 2 Needs: {{{user2Needs}}}

Introduction:
Icebreaker Question:`,
});

const aiIntroductionFlow = ai.defineFlow(
  {
    name: 'aiIntroductionFlow',
    inputSchema: IntroductionInputSchema,
    outputSchema: IntroductionOutputSchema,
  },
  async input => {
    const {output} = await aiIntroductionPrompt(input);
    return output!;
  }
);
