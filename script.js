// Set avatar initials
document.querySelectorAll(".card").forEach(function (card) {
  const name = card.querySelector(".name").textContent.trim();
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  card.querySelector(".avatar").textContent = initials;
});

// Hapus card saat tombol x diklik
document.querySelectorAll(".close").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const card = this.closest(".card");
    card.classList.add("fade-out");
    setTimeout(() => card.remove(), 300);
  });
});
