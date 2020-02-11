export class LoggingService {
  constructor() { }

  logStatus(status: string) {
    console.log(`A server status has changed, new status: ${status}`);
  }
}
