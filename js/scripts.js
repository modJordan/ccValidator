function cardVerify(cardNumber) {
  if (cardNumber.length === 16) {
    let parseNumber = parseInt(cardNumber);
    return "This card number is valid";
  } else {
    return "This card number is not valid";
  }
};