export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: number;
      MONGO_URL: string;
      HOSTNAME?: string;
      ENV: "test" | "dev" | "prod";
    }
  }
}
