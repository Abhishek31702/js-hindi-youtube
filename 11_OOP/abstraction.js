class TrainTicket {
    // private properties
    #name;
    #destination;
    #fare = 0;

    // setter for passenger name
    set passenger(name) {
        this.#name = name;
    }

    // setter for destination
    set travel(destination) {
        this.#destination = destination;
    }

    // private method to calculate fare (hidden logic)
    #calculateFare() {
        if (this.#destination === "Mumbai") {
            this.#fare = 200;
        } else if (this.#destination === "Delhi") {
            this.#fare = 500;
        } else if (this.#destination === "Chennai") {
            this.#fare = 400;
        } else {
            this.#fare = 300; // default fare
        }
    }

    // getter to show ticket info
    get ticketInfo() {
        return `
Passenger Name: ${this.#name}
Destination: ${this.#destination}
Fare: ₹${this.#fare}
`;
    }

    // public method to book ticket
    bookTicket() {
        this.#calculateFare(); // hidden logic call
        console.log("✅ Your ticket has been booked successfully!");
    }
}

// Object creation and testing
const ticket = new TrainTicket();
ticket.passenger = "Abhishek";
ticket.travel = "Delhi";
ticket.bookTicket();
console.log(ticket.ticketInfo);
