// 🎉 Confetti blast on page load
setTimeout(() => {
  confetti({
    particleCount: 160,
    spread: 80,
    origin: { y: 0.6 }
  });
}, 300);

// 🎈 Second light burst
setTimeout(() => {
  confetti({
    particleCount: 100,
    spread: 120,
    startVelocity: 25,
    origin: { y: 0.7 }
  });
}, 900);

// 💳 UPI QR generation (₹1000 prefilled)
const upiLink =
  "upi://pay?pa=9238480905@ybl&pn=Vineet&am=1000&cu=INR";

new QRCode(document.getElementById("qrcode"), {
  text: upiLink,
  width: 220,
  height: 220,
  correctLevel: QRCode.CorrectLevel.H
});
