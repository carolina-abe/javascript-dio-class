/**
 * 1 - debit
 * 2 - cash
 * 3 - pix
 * 4 - credit
 */

function calculatePayment(price, paymentMethod, installments) {
  console.log(price);

  if (paymentMethod === 1){ 
    var totalPrice = price - (price * 0.1);
    console.log('Price with 10% discount: ', totalPrice);
  } else if (paymentMethod === 2 || paymentMethod === 3){
    var totalPrice = price - (price * 0.15);
    console.log('Price with 15% discount: ', totalPrice);
  } else if(paymentMethod === 4 && installments > 2) {
    var totalPrice = price + (price * 0.1);
    console.log('Price + 10%: ', totalPrice);
  } else {
    console.log('Price: ', price)
  }
}

calculatePayment(75, 1, 3)