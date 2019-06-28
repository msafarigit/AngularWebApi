export interface ILoggerService {
    Log();
}

export class LoggerService implements ILoggerService {
    Log() {
        console.log("Console logger is used");
    }
}

export class FileLoggerService extends LoggerService {
    Log() {
        console.log("File logger is used");
    }
}

export class DbLoggerService extends LoggerService {
    Log() {
        console.log("Db logger is used");
    }
} 