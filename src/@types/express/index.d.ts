declare global {
  namespace Express {
    interface Request {
      user: {
        id: number;
        admin: boolean;
        active: boolean;
      };
    }
  }
}
export {};
