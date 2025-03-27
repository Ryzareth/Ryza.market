// Fungsi untuk menambahkan opsi diamond ke dalam dropdown
function addDiamondOption(value, label, price) {
    var diamondSelect = document.getElementById('diamond');
    var option = document.createElement('option');
    option.value = value;
    option.dataset.price = price;
    option.textContent = label;
    diamondSelect.appendChild(option);
}

// Update the total amount when the selected diamond changes
function updateTopupAmount() {
    var selectedDiamond = document.getElementById('diamond');
    var selectedOption = selectedDiamond.options[selectedDiamond.selectedIndex];
    var diamondPrice = selectedOption.dataset.price;

    var diamondPriceText = document.getElementById('diamondPriceText');
    diamondPriceText.textContent = 'Rp.' + diamondPrice.toLocaleString();
    diamondPriceText.style.display = 'block';
}

// Tambahkan event listener untuk select element
document.getElementById('diamond').addEventListener('change', function() {
    updateTopupAmount();
});

// Tambahkan event listener untuk game selection
document.getElementById('game').addEventListener('change', function() {
    updateDiamondList();
});

function updateDiamondList() {
    var selectedGame = document.getElementById('game').value;
    var diamondSelect = document.getElementById('diamond');
    var gameIDLabel = document.querySelector('label[for="gameID"]');
    var gameIDField = document.getElementById("gameID");

    // Check if the selected game is "Point Blank"
    if (selectedGame === "pointblank") {
        // Hide the "Masukan ID Game" label and input field
        gameIDLabel.style.display = "none";
        gameIDField.style.display = "none";
    } else {
        // Show the "Masukan ID Game" label and input field for other games
        gameIDLabel.style.display = "block";
        gameIDField.style.display = "block";
    }

    // Kosongkan daftar diamond
    diamondSelect.innerHTML = '';

    if (selectedGame === 'gopay') {
        addDiamondOption('10', 'Rp 10.000 : Rp11.000', 11);
        addDiamondOption('15', 'Rp 15.000 : Rp16.000', 16);
        addDiamondOption('20', 'Rp 20.000 : Rp21.000', 21);
        addDiamondOption('25', 'Rp 25.000 : Rp26.000', 26);
        addDiamondOption('30', 'Rp 30.000 : Rp31.000', 31);
        addDiamondOption('35', 'Rp 35.000 : Rp36.000', 36);
        addDiamondOption('40', 'Rp 40.000 : Rp41.000', 41);
        addDiamondOption('45', 'Rp 45.000 : Rp46.000.', 46);
        addDiamondOption('50', 'Rp 50.000 : Rp51.000.', 51);
        addDiamondOption('55', 'Rp 55.000 : Rp56.000.', 56);
        addDiamondOption('60', 'Rp 60.000 : Rp61.000.', 61);
        addDiamondOption('65', 'Rp 65.000 : Rp66.000.', 66);
        addDiamondOption('70', 'Rp 70.000 : Rp71.000.', 71);
        addDiamondOption('75', 'Rp 75.000 : Rp76.000.', 76);
        addDiamondOption('80', 'Rp 80.000 : Rp81.000.', 81);
        addDiamondOption('85', 'Rp 85.000 : Rp86.000.', 86);
        addDiamondOption('90', 'Rp 90.000 : Rp91.000.', 91);
        addDiamondOption('95', 'Rp 95.000 : Rp96.000.', 96);
        addDiamondOption('100', 'Rp 100.000 : Rp100.1000.', 101);

  
    } else if (selectedGame === 'dana') {
        addDiamondOption('1', 'Rp 1.0000 : Rp1.400', 1.4);
        addDiamondOption('2', 'Rp 2.000 : Rp2.400', 2.4);
        addDiamondOption('3', 'Rp 3.000 : Rp3.500', 3.5);
        addDiamondOption('4', 'Rp 4.000 : Rp4.500', 4.5);
        addDiamondOption('5', 'Rp 5.000 : Rp5.500', 5.5);
        addDiamondOption('10', 'Rp 10.000 : Rp11.000', 11);
        addDiamondOption('15', 'Rp 15.000 : Rp16.000', 16);
        addDiamondOption('20', 'Rp 20.000 : Rp21.000', 21);
        addDiamondOption('25', 'Rp 25.000 : Rp26.000', 26);
        addDiamondOption('30', 'Rp 30.000 : Rp31.000', 31);
        addDiamondOption('35', 'Rp 35.000 : Rp36.000', 36);
        addDiamondOption('40', 'Rp 40.000 : Rp41.000', 41);
        addDiamondOption('45', 'Rp 45.000 : Rp46.000.', 46);
        addDiamondOption('50', 'Rp 50.000 : Rp51.000.', 51);
        addDiamondOption('55', 'Rp 55.000 : Rp56.000.', 56);
        addDiamondOption('60', 'Rp 60.000 : Rp61.000.', 61);
        addDiamondOption('65', 'Rp 65.000 : Rp66.000.', 66);
        addDiamondOption('70', 'Rp 70.000 : Rp71.000.', 71);
        addDiamondOption('75', 'Rp 75.000 : Rp76.000.', 76);
        addDiamondOption('80', 'Rp 80.000 : Rp81.000.', 81);
        addDiamondOption('85', 'Rp 85.000 : Rp86.000.', 86);
        addDiamondOption('90', 'Rp 90.000 : Rp91.000.', 91);
        addDiamondOption('95', 'Rp 95.000 : Rp96.000.', 96);
        addDiamondOption('100', 'Rp 100.000 : Rp101.000.', 101);

    } else if (selectedGame === 'ovo') {
        addDiamondOption('10', 'Rp 10.000 : Rp11.000', 11);
        addDiamondOption('15', 'Rp 15.000 : Rp16.000', 16);
        addDiamondOption('20', 'Rp 20.000 : Rp21.000', 21);
        addDiamondOption('25', 'Rp 25.000 : Rp26.000', 26);
        addDiamondOption('30', 'Rp 30.000 : Rp31.000', 31);
        addDiamondOption('35', 'Rp 35.000 : Rp36.000', 36);
        addDiamondOption('40', 'Rp 40.000 : Rp41.000', 41);
        addDiamondOption('45', 'Rp 45.000 : Rp46.000', 46);
        addDiamondOption('50', 'Rp 50.000 : Rp51.000.', 51);
        addDiamondOption('55', 'Rp 55.000 : Rp56.000.', 56);
        addDiamondOption('60', 'Rp 60.000 : Rp61.000.', 61);
        addDiamondOption('65', 'Rp 65.000 : Rp66.000.', 66);
        addDiamondOption('70', 'Rp 70.000 : Rp71.000.', 71);
        addDiamondOption('75', 'Rp 75.000 : Rp76.000.', 76);
        addDiamondOption('80', 'Rp 80.000 : Rp81.000.', 81);
        addDiamondOption('85', 'Rp 85.000 : Rp86.000.', 86);
        addDiamondOption('90', 'Rp 90.000 : Rp91.000.', 91);
        addDiamondOption('95', 'Rp 95.000 : Rp96.000.', 96);
        addDiamondOption('150', 'Rp 150.000 : Rp156.000.', 156);
        addDiamondOption('200', 'Rp 200.000 : Rp201.0000.', 101);

    } else if (selectedGame === 'shopeepay') {
        addDiamondOption('10', 'Rp 10.000 : Rp10.500', 10);
        addDiamondOption('15', 'Rp 15.000 : Rp15.500', 15);
        addDiamondOption('20', 'Rp 20.000 : Rp20.500', 20);
        addDiamondOption('25', 'Rp 25.000 : Rp25.500', 25);
        addDiamondOption('30', 'Rp 30.000 : Rp30.500', 30);
        addDiamondOption('35', 'Rp 35.000 : Rp35.500', 35);
        addDiamondOption('40', 'Rp 40.000 : Rp40.500', 40);
        addDiamondOption('45', 'Rp 45.000 : Rp45.500', 45);
        addDiamondOption('50', 'Rp 50.000 : Rp50.500.', 50);
        addDiamondOption('55', 'Rp 55.000 : Rp55.500.', 55);
        addDiamondOption('60', 'Rp 60.000 : Rp60.500.', 60);
        addDiamondOption('65', 'Rp 65.000 : Rp65.500.', 65);
        addDiamondOption('70', 'Rp 70.000 : Rp70.500.', 70);
        addDiamondOption('75', 'Rp 75.000 : Rp75.500.', 75);
        addDiamondOption('80', 'Rp 80.000 : Rp80.500.', 80);
        addDiamondOption('85', 'Rp 85.000 : Rp85.500.', 85);
        addDiamondOption('90', 'Rp 90.000 : Rp90.500.', 90);
        addDiamondOption('95', 'Rp 95.000 : Rp95.500.', 95);
        addDiamondOption('150', 'Rp 150.000 : Rp150.500.', 150);
        addDiamondOption('200', 'Rp 200.000 : Rp200.500.', 200);

    }

    // Pemanggilan fungsi updateTopupAmount() setelah memperbarui daftar diamond
    updateTopupAmount();
}

// Add this function if it doesn't exist
function submitTopup() {
    var game = document.getElementById('game').value;
    var gameID = document.getElementById('gameID').value;
    var username = document.getElementById('username').value;
    var diamond = document.getElementById('diamond').value;
    var diamondPrice = document.getElementById('diamondPriceText').textContent;

    // Validasi data
    if (!username || (game !== 'pointblank' && !gameID)) {
        alert("Data tidak lengkap");
        return; // Prevent form submission
    }

    // Continue with form submission logic

    // Format pesan untuk dikirim ke WhatsApp dengan menambahkan harga diamond
    var message = `
Payment Name : ${game}
Nomor Tujuan : ${gameID}
Username : ${username}
PriceList Payment : ${diamond}
Total Harga : ${diamondPrice}
    `;

    // Ganti link berikut dengan link WhatsApp Anda
    var whatsappLink = 'https://wa.me/6282321098084?text=' + encodeURIComponent(message);

    // Buka link WhatsApp untuk memulai obrolan
    window.open(whatsappLink, '_blank');
}

// Panggil fungsi updateTopupAmount() saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    updateTopupAmount();
    updateDiamondList(); // Call this to initialize the diamond list based on the initial game selection
});


function goBack() {
    window.history.back();
  }