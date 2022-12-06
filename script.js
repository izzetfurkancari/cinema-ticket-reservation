const container = document.querySelector('.container');
const count = document.getElementById("count");
const amount = document.getElementById("amount")
const select = document.querySelector("#movie")
const seats = document.querySelectorAll(".seat:not(.reserved)")

container.addEventListener('click', (e) => {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("reserved")){
        e.target.classList.toggle("selected")
        calculateTotal()
    }
})

select.addEventListener("change", (e) => {
    calculateTotal()
})

function calculateTotal() {
    const selectedSeats = container.querySelectorAll(".seat.selected")

    const selectedSeatsArr = [];
    const seatsArr =[];

    selectedSeats.forEach((seat)=>{
        selectedSeatsArr.push(seat)
    })

    seats.forEach((seat)=>{
        seatsArr.push(seat);
    });

    let selectedSeatIndex = selectedSeatsArr.map((seat)=>{
        return seatsArr.indexOf(seat)
    } )

    console.log(selectedSeatIndex);

    let selectedSeatCount = selectedSeats.length;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value

    saveToLocalStorage(selectedSeatIndex)
}

function saveToLocalStorage(index) {
    localStorage.setItem("selectedSeats", JSON.stringify(index))
    localStorage.setItem("selectedMovieIndex", select.selectedIndex)
}