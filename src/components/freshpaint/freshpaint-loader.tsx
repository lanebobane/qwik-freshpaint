// src/components/FreshpaintLoader.tsx
import { component$ } from '@builder.io/qwik';
import { useFreshpaint } from './useFreshpaint';

interface FreshpaintProps {
    envId: string;
  }

// '95629632-e650-498b-b78d-98afb6fb7d90'
export const FreshpaintLoader = component$<FreshpaintProps>((props) => {
  useFreshpaint(props.envId); // Replace with your actual envId

  return null; // No visible output needed
});