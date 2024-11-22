function prikaziVise(x) {
    const niz1 = ["Režiser: Kajsa Nass", "Žanr: Animirani", "Trajanje: 91 min", "Distributer: MegaCom Film", "Zemlja porekla: NO", "Godina proizvodnje: 2023"];
    const niz2 = ["Glumci: John Cena", "Žanr: Akcioni, Komedija", "Trajanje: 109 min", "Distributer: Blitz Film Video doo", "Zemlja porekla: US", "Godina proizvodnje: 2023"];
    const niz3 = ["Režiser: Ridley Scott", "Glumci: Joaquin Phoenix", "Žanr: Drama", "Trajanje: 158 min", "Distributer: CON Film", "Zemlja porekla: US"];
    const polje = document.getElementById("polje");

    let lista = "<ul>Informacije o filmu:";
    if (x === 0) {
        niz1.splice(1, 0, "Glumci: Jovan Ginic");
        for (i = 0; i < niz1.length; i++) {
            lista += `<li>${niz1[i]}</li>`;
        }
        lista += "</ul>";
        polje.innerHTML = lista;
    } else if (x === 1) {
        niz2.unshift("Režiser: Pierre Morel")
        for (i = 0; i < niz2.length; i++) {
            lista += `<li>${niz2[i]}</li>`;
        }
        lista += "</ul>";
        polje.innerHTML = lista;
    } else {
        niz3.push("Godina proizvodnje: 2023");
        for (i = 0; i < niz3.length; i++) {
            lista += `<li>${niz3[i]}</li>`;
        }
        lista += "</ul>";
        polje.innerHTML = lista;
    }
}

function povecajSliku(id, povecaj) {
    let slika = document.getElementById(id);
    if (povecaj) {
        slika.style.height = "260px";
        slika.style.borderRadius = "10px";
        slika.style.boxShadow = "0 4px 10px 0 rgba(0, 0, 0, 0.5)";
    } else {
        slika.style.height = "250px";
        slika.style.borderRadius = null;
        slika.style.boxShadow = null;
    }
}

function izbaciPoruku() {
    let ime = document.getElementById("ime").value.trim();
    let prezime = document.getElementById("prezime").value.trim();
    let email = document.getElementById("email");
    let tel = document.getElementById("tel");

    let imeiPrezime = ime.concat(" ", prezime);

    if (ime.value == "" || prezime.value == "" || email.value == "" || tel.value == "") {
        alert("Morate uneti Vaše podatke!");
    } else if (ime === "anita" || ime === "Anita") {
        alert(`Čestitamo ${imeiPrezime.toUpperCase()}, ostvarili ste 20% popusta na Vašu rezervaciju!`);
    } else {
        alert(`${imeiPrezime.toUpperCase()} uspešno ste obavili Vašu rezervaciju!`);
    }
}