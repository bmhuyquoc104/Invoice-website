export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: number;
      MONGO_URI?: string;
      HOSTNAME?: string;
      ENV: "test" | "dev" | "prod";
    }
  }
}
