const mail = prompt("Inserisci mail")
const list = ["boolean@mail.com", "mimmo@mail.com", "pinco@mail.com", "palla@mail.com"]
let found = false;

for (let i = 0; i < list.length; i++) {
    if (mail === list[i]) {
        found = true;
    }
}

if (found) {
    alert("login effettuato!");
} else {
    alert("mail non registrata!");
}


// if (list.includes(mail)) {
//     alert("login effettuato!");
// } else {
//     alert("mail non registrata!")
// }