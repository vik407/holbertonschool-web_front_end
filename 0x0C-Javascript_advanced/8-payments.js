const processPayment = (amount) =>
    console.log(`Collecting payment of ${amount}`);

const processOrder = (orderId, amount) => {
    console.log(`${orderId} is being processed`);
    processPayment(amount);
    console.log(`${orderId} has been fully processed`);
};

console.log("Processing orders");
processOrder(123121, 10.99);
processOrder(123122, 12.99);
processOrder(123123, 15.0);
console.log("All the orders have been processed");
