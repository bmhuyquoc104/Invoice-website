// export {};

// declare global {
// namespace NodeJS {
//   interface ProcessEnv {
//     PORT?: number;
//     MONGO_URI?: string;
//     HOSTNAME?: string;
//     ENV: "test" | "dev" | "prod";
//   }
// }
//   namespace Express {
//     interface Response {
//       invoice: Response<any, Record<string, any>>
//     }
//     interface Request {
//       user:any
//     }
//   }
// }
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
  namespace Express {
    interface Request {
      user: string;
    }
    interface Response {
      invoice: any;
    }
  }
}
