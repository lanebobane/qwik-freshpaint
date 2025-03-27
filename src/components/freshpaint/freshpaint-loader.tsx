// src/components/FreshpaintLoader.tsx
import { component$ } from '@builder.io/qwik';
import { useFreshpaint } from './useFreshpaint';

export const FreshpaintLoader = component$(() => {
  useFreshpaint('95629632-e650-498b-b78d-98afb6fb7d90'); // Replace with your actual envId

  return null; // No visible output needed
});