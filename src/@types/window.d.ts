export {};

declare global {
  const NODE_ENV: string;

  interface Window {
    NODE_ENV: string;
  }
}
