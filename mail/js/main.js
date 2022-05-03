const mail = prompt("Inserisci mail")
const list = ["boolean@mail.com", "mimmo@mail.com", "pinco@mail.com", "palla@mail.com"]

if (list.includes(mail)) {
    alert("login effettuato!");
} else {
    alert("mail non registrata!")
}