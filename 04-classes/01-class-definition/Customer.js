var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//create instance 
var myCustomer = new Customer("Anna", "Archut");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
