import * as tslib_1 from "tslib";
var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.prototype.Log = function () {
        console.log("Console logger is used");
    };
    return LoggerService;
}());
export { LoggerService };
var FileLoggerService = /** @class */ (function (_super) {
    tslib_1.__extends(FileLoggerService, _super);
    function FileLoggerService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileLoggerService.prototype.Log = function () {
        console.log("File logger is used");
    };
    return FileLoggerService;
}(LoggerService));
export { FileLoggerService };
var DbLoggerService = /** @class */ (function (_super) {
    tslib_1.__extends(DbLoggerService, _super);
    function DbLoggerService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DbLoggerService.prototype.Log = function () {
        console.log("Db logger is used");
    };
    return DbLoggerService;
}(LoggerService));
export { DbLoggerService };
//# sourceMappingURL=logger.service.js.map