"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Applicant = void 0;
var Applicant = /** @class */ (function () {
    function Applicant(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Applicant.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Applicant.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Applicant;
}());
exports.Applicant = Applicant;
//create instance 
