//common functions
function getInputValue(id) {
  const value = document.getElementById(id).value;
  return parseInt(value);
}

function multiplyQuantityWithPrice(priceId, quantity) {
  const productQuantity = getInputValue(quantity);
  if(isNaN(productQuantity)){
    alert('Input valid Quantity')
  }else{

    const productPrice = document.getElementById(priceId).innerText;
    const eachProductTotalPrice = productQuantity * productPrice;
    return eachProductTotalPrice;
  }
}
//total sum
function total() {
  const budgetString = document.getElementById("budget").innerText;
  const budget = parseInt(budgetString);
  const chocolate = document.getElementById("chocolate").innerText;
  const rose = document.getElementById("rose").innerText;
  const diary = document.getElementById("diary").innerText;

  const totalSum = parseInt(chocolate) + parseInt(rose) + parseInt(diary);
  if (totalSum > budget) {
    alert("You dont't have that much Money Bro");
  } else {
    setElementInnerText("total", totalSum);
  }
}
function setElementInnerText(elementID, value) {
  document.getElementById(elementID).innerText = value;
}

//buy buttons
document.getElementById("kitkat-buy-btn").addEventListener("click", function () {
  const totalChocolate = multiplyQuantityWithPrice("kitkat-price", "kitkat-quantity");
  setElementInnerText("chocolate", totalChocolate);
  total();
});
document.getElementById("rose-buy-btn").addEventListener("click", function () {
  const totalRose = multiplyQuantityWithPrice("rose-price", "rose-quantity");
  setElementInnerText("rose", totalRose);
  total();
});
document.getElementById("diary-buy-btn").addEventListener("click", function () {
  const totalDiary = multiplyQuantityWithPrice("diary-price", "diary-quantity");
  setElementInnerText("diary", totalDiary);
  total();
});

document.getElementById("promo-apply-btn").addEventListener("click", function () {
  const promoCode = getInputValue("promo-code");
  const totalString = document.getElementById("total").innerText;
  const total = parseFloat(totalString);
  if (promoCode === 101) {
    const discount = (total * 10) / 100;
    setElementInnerText("all-total", total - discount);
    this.setAttribute("disabled", true);
  } else {
    alert("Please input A Valid Discount CODE");
  }
});
