const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

popuLateUI();

let ticketPrice = +movieSelect.value;
// console.log(typeof ticketPrice);

//! save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

//! update total and count
function updatSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  // console.log(selectedSeats);

  //! local storge
  //* 1-copy selected seats into array
  //* 2-map through arry
  //* 3-return a new array indexes
  const seatIndex = [...selectedSeats].map((seat) => {
    return [...seats].indexOf(seat);
  });
  // console.log(seatIndex);

  localStorage.setItem("selectedSeats", JSON.stringify(seatIndex));

  const selectedSeatsCount = selectedSeats.length;
  // console.log(selectedSeatsCount);

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// ^ get data from local storge and populate ui

function popuLateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  // console.log(selectedSeats);

  if (selectedSeats !== null && selectedSeats.length > -1) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

//!movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updatSelectedCount();
});

//! seat click event
container.addEventListener("click", (e) => {
  // console.log(e.target); //! give us the element wich we clicked on it
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
  }

  updatSelectedCount();
});

// * initial count and total seat
updatSelectedCount();
