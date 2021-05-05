"use strict";
const bookTockets = [];
const BookTicket = function (ticketName, numberOfTicket=1, price=200) {
    //ES5 (short circuit)
//   ticketName = ticketName || "tkt1";
//   numberOfTicket = numberOfTicket || 1;
//   price = price || 200;

  const newTicket = {
    ticketName,
    numberOfTicket,
    price,
  };
  console.log(newTicket);
  bookTockets.push(newTicket);
  console.log(bookTockets);
};

BookTicket("tkt1", 1, 200);
BookTicket("tkt2", 2, 300);
BookTicket()
BookTicket('tkt1',1)
BookTicket('tkt1',undefined,200) // ('tkt1',undefined,200)//more priority
BookTicket('tkt1',1,200)

