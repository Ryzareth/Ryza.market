function placeOrder() {
  // Get input values
  const gameName = document.getElementById('gameName').value;
  const priceList = document.getElementById('priceList').value;
  const paymentList = document.getElementById('paymentList').value;

  if (!gameName || !priceList || !paymentList) {
    showWarning();
    return;
  }

  const orderData = `CHEAT GAME : ${gameName}\nPulsa Nasional : Rp.${priceList}\nPayment Method : ${paymentList}`;

  // Encode the orderData
  const encodedOrderData = encodeURIComponent(orderData);

  // WhatsApp link (replace with the actual WhatsApp number)
  const whatsappLink = `https://wa.me/6282321098084?text=${encodedOrderData}`;

  // Redirect to the WhatsApp link
  window.location.href = whatsappLink;
}

function showWarning() {
  const warningMessage = document.getElementById('warningMessage');
  warningMessage.classList.remove('hidden');
}

function hideWarning() {
  const warningMessage = document.getElementById('warningMessage');
  warningMessage.classList.add('hidden');
}

function goBack() {
  window.history.back();
}
