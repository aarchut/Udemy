var Applicant = /** @class */ (function () {
    function Applicant(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
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
//create instance 
var myApplicant = new Applicant("Anna", "Archut");
console.log(myApplicant.firstName);
console.log(myApplicant.lastName);
