function placeOrder() {
  // Ambil nilai input
  const gameName = document.getElementById('gameName').value;
  const priceList = document.getElementById('priceList').value;
  const paymentList = document.getElementById('paymentList').value;

  if (!gameName || !priceList || !paymentList) {
    showWarning();
    return;
  }

  const orderData = `CHEAT GAME : ${gameName}\nBUY CHEAT : ${priceList}\nPayment Method : ${paymentList}`;

  // Encode orderData
  const encodedOrderData = encodeURIComponent(orderData);

  // Link WhatsApp (ganti dengan nomor WhatsApp yang sebenarnya)
  const whatsappLink = `https://wa.me/6282321098084?text=${encodedOrderData}`;

  // Redirect ke link WhatsApp
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

function openFile() {
  window.location.href = 'cheatdown/index.html';  // Ganti 'info.html' dengan nama file lain yang ingin dibuka
}

