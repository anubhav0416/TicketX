const btn = document.getElementById("findTickets")
const date = document.getElementById("date")
const slot = document.getElementById("slot")

btn.onclick = () => {
    if (date.value === "" || slot.value === "") {
        alert("Please select date and time slot")
    } else {
        alert(`Searching tickets for ${date.value} (${slot.value})`)
    }
}
function bookMovie(name) {
    localStorage.setItem("selectedMovie", name)
    alert(name + " selected. Seat selection coming next.")
}
const movieTitle = document.getElementById("movieTitle")
const seats = document.querySelectorAll(".seat:not(.booked)")
const countEl = document.getElementById("count")
const totalEl = document.getElementById("total")
const payBtn = document.getElementById("payBtn")

const price = 200

if (movieTitle) {
    movieTitle.innerText = localStorage.getItem("selectedMovie") || "Select Seats"
}

seats.forEach(seat => {
    seat.onclick = () => {
        seat.classList.toggle("selected")
        updateTotal()
    }
})

function updateTotal() {
    const selected = document.querySelectorAll(".seat.selected").length
    countEl.innerText = selected
    totalEl.innerText = selected * price
}

if (payBtn) {
    payBtn.onclick = () => {
        const selected = document.querySelectorAll(".seat.selected").length
        if (selected === 0) {
            alert("Please select at least one seat")
        } else {
            alert("Redirecting to payment gateway...")
        }
    }
}
document.querySelectorAll(".offer-card").forEach(card => {
    const price = Number(card.dataset.price)
    const discount = Number(card.dataset.discount)
    const final = price - (price * discount / 100)
    card.querySelector(".final-price").innerText = final
})

function bookOffer(movie) {
    localStorage.setItem("selectedMovie", movie)
    alert(movie + " booked with offer. Select seats next.")
    window.location.href = "seats.html"
}
const sendBtn = document.getElementById("sendMsg")
const chatInput = document.getElementById("chatInput")
const chatBox = document.getElementById("chatBox")

if (sendBtn) {
    sendBtn.onclick = () => {
        if (chatInput.value.trim() !== "") {
            const userMsg = document.createElement("div")
            userMsg.className = "user"
            userMsg.innerText = chatInput.value
            chatBox.appendChild(userMsg)

            setTimeout(() => {
                const botMsg = document.createElement("div")
                botMsg.className = "bot"
                botMsg.innerText = "Thanks for reaching out. Our team will assist you shortly."
                chatBox.appendChild(botMsg)
                chatBox.scrollTop = chatBox.scrollHeight
            }, 800)

            chatInput.value = ""
        }
    }
}

function callSupport() {
    alert("Calling TicketX Support: +91 98765 43210")
}

function emailSupport() {
    window.location.href = "mailto:support@ticketx.com"
}
let isLogin = true
const title = document.getElementById("authTitle")
const btn = document.getElementById("authBtn")

function toggleAuth() {
    isLogin = !isLogin
    title.innerText = isLogin ? "Sign In" : "Register"
    btn.innerText = isLogin ? "Sign In" : "Register"
}

function forgot() {
    alert("Password reset link sent to your email / phone")
}

if (btn) {
    btn.onclick = () => {
        alert(isLogin ? "Login Successful" : "Registration Successful")
    }
}