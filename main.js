var bill_amount = Number(prompt('What is your bill amount?'));
function tip(bill_amount){
  tip_amount = (bill_amount*0.2)
  return total_bill = tip_amount + bill_amount
};

alert("Your total bill, including tip, is " + ('$' + tip(bill_amount)) + ".");

//I also had this initially console.log the final bill amount sentence. I am not sure if there
//is an easy way to have it print on the console AND be an alert, or if that would even be necessary.
//Overall, writing the funtion came back to me pretty quickly which was exciting!
