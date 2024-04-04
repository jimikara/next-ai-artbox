// custom.d.ts
declare module 'tailwind.config.ts' {
  interface TailwindConfig {
    // Specify the structure of your Tailwind config here
    theme: {
      extend: {};
    };
    // Add other top-level properties as needed
  }

  const config: TailwindConfig;
  export default config;
}