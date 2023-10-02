console.log("test");

const walidacjaFormularza = (event) => {
    event.preventDefault();

    let pierwszeImie = document.querySelector("[name=fname]");
    let drugieImie = document.querySelector("[name=lname]");

    console.log(`Imie: ${pierwszeImie.value}, Nazwisko: ${drugieImie.value}`);
}

let form = document.getElementById("form");
form.addEventListener("submit", walidacjaFormularza);

