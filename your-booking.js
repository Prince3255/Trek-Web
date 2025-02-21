import trekData from "./trek-data.js";

document.addEventListener("DOMContentLoaded", () => {
  const bookingsContainer = document.getElementById("bookings-container");
  const bookings = JSON.parse(localStorage.getItem("trekBookings")) || [];

  if (bookings.length === 0) {
    bookingsContainer.innerHTML = "<p>You have no bookings yet.</p>";
  } else {
    const bookingsHTML = bookings
      .map((trekId) => {
        const trek = trekData.find((t) => t.id == trekId);
        if (!trek) return "";

        return `
        <div class="booking-card">
          <img src="${trek.backgroundImage}" alt="${trek.title}">
          <div class="booking-info">
            <h2>${trek.title}</h2>
            <p>${trek.summary}</p>
            <p><strong>Duration:</strong> ${trek.duration}</p>
            <p><strong>Difficulty:</strong> ${trek.difficulty}</p>
            <p><strong>Price:</strong> ₹${trek.amount.toLocaleString()}</p>
            <a href="trek-detail.html?id=${
              trek.id
            }" class="view-details-btn">View Details</a>
          </div>
        </div>
      `;
      })
      .join("");

    bookingsContainer.innerHTML = bookingsHTML;
  }
});
