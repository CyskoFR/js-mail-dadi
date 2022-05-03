const mail = prompt("Inserisci mail")
const list = ["boolean@mail.com", "mimmo@mail.com", "pinco@mail.com", "palla@mail.com"]

for (let i = 0; i < list.length; i++) {
    if (mail === list[i]) {
        alert("login effettuato!");
    } else {
        alert("mail non registrata!")
    }
    break
}


// if (list.includes(mail)) {
//     alert("login effettuato!");
// } else {
//     alert("mail non registrata!")
// }