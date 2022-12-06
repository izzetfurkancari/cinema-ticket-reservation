const container = document.querySelector('.container');
const count = document.getElementById("count");
const amount = document.getElementById("amount")
const select = document.querySelector("#movie")

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
    let selectedSeatCount = container.querySelectorAll(".seat.selected").length;
    let price = select.value;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * price
}