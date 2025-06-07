'use server';
/**
 * @fileOverview AI-powered Third Space Recommendation Flow.
 *
 * This file defines a Genkit flow that recommends third spaces to users based on their profile of needs and services.
 *
 * - recommendThirdSpaces - A function that initiates the third space recommendation process.
 * - RecommendThirdSpacesInput - The input type for the recommendThirdSpaces function.
 * - RecommendThirdSpacesOutput - The return type for the recommendThirdSpaces function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema
const RecommendThirdSpacesInputSchema = z.object({
  userNeeds: z
    .string()
    .describe('The user input describing their needs.'),
  userServices: z
    .string()
    .describe('The user input describing their offered services.'),
  userLocation: z
    .string()
    .describe('The general location of the user, e.g. city, neighborhood.'),
});

export type RecommendThirdSpacesInput = z.infer<typeof RecommendThirdSpacesInputSchema>;

// Define the output schema
const RecommendThirdSpacesOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      spaceName: z.string().describe('The name of the third space.'),
      spaceDescription: z.string().describe('A brief description of the third space.'),
      suitabilityReason: z.string().describe('Why this space is a good match for the user.'),
    })
  ).describe('A list of recommended third spaces.'),
});

export type RecommendThirdSpacesOutput = z.infer<typeof RecommendThirdSpacesOutputSchema>;

// Exported function to call the flow
export async function recommendThirdSpaces(input: RecommendThirdSpacesInput): Promise<RecommendThirdSpacesOutput> {
  return recommendThirdSpacesFlow(input);
}

// Define the prompt
const recommendThirdSpacesPrompt = ai.definePrompt({
  name: 'recommendThirdSpacesPrompt',
  input: {schema: RecommendThirdSpacesInputSchema},
  output: {schema: RecommendThirdSpacesOutputSchema},
  prompt: `You are an AI assistant designed to recommend third spaces to users based on their needs, services and location.

  Given the following information about the user:
  - Needs: {{{userNeeds}}}
  - Services: {{{userServices}}}
  - Location: {{{userLocation}}}

  Recommend third spaces in their area that would be a good fit for them. Consider community centers, libraries, parks, social clubs, and other shared spaces.
  Explain why each space is a good match for the user, considering how their needs and services align with the space's purpose and activities. Prioritize local community improvement projects.

  Format your response as a JSON object with a "recommendations" array. Each object in the array should have the keys "spaceName", "spaceDescription", and "suitabilityReason".
  `,
});

// Define the flow
const recommendThirdSpacesFlow = ai.defineFlow(
  {
    name: 'recommendThirdSpacesFlow',
    inputSchema: RecommendThirdSpacesInputSchema,
    outputSchema: RecommendThirdSpacesOutputSchema,
  },
  async input => {
    const {output} = await recommendThirdSpacesPrompt(input);
    return output!;
  }
);
