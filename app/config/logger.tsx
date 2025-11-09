// src/utils/logger.js

interface Logger {
    env: string;
    
}
interface LogMessage {
    level?: string;
    message?: string;
}
class Logger implements Logger {
    constructor() {
        this.env = process.env.NODE_ENV || "development";
    }
    log(level="info", message="") {
    if (this.env === "development") {
      console.log(`[${level.toUpperCase()}]`, message);
    }
  }
}

export const logger = new Logger();
