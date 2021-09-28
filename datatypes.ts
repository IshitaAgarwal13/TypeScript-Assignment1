export{};

let customerId: number = 1234;
let customerName: string = "Jones";
let isMarried: boolean = true;
let customerAddress: object = {
 city: "Hyderabad",
 state: "TS",
 country: "India",
};
let customerContact: any = 8833224455;
console.log("CustomerId: " + customerId);
console.log("CustomerName: " + customerName);
console.log("Married Status: " + isMarried);
console.log("Customer Address: " + JSON.stringify(customerAddress));
console.log("Customer Contact: " + customerContact);