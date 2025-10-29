class TicketBooking {
    bookTicket(userName, movie, seats){
        this.#checkAvailability();
        this.#processPayment();
        this.#generateTicket();
        console.log("Your Movie Ticket has been Booked");


        #checkAvailability() {
            console.log("Processing your request…");
        }

        #processPayment() {
            console.log("Payment successful…")
        }

        #generateTicket() {
            console.log("generateTicket()")
        }

    }
}

const newTicket = new TicketBooking();
newTicket.bookTicket('abhishek','KGF',"Center")