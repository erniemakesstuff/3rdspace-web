// src/components/analytics/ClarityScript.tsx
"use client";

import { useEffect } from 'react';
import { clarity } from '@microsoft/clarity';

const CLARITY_PROJECT_ID = "s0grazgx09";

export default function ClarityScript() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && CLARITY_PROJECT_ID) {
      clarity.init(CLARITY_PROJECT_ID);
    }
  }, []);

  return null; // This component doesn't render anything
}
