function prikaziVise(e){let a=["Režiser: Kajsa Nass","Žanr: Animirani","Trajanje: 91 min","Distributer: MegaCom Film","Zemlja porekla: NO","Godina proizvodnje: 2023"],l=["Glumci: John Cena","Žanr: Akcioni, Komedija","Trajanje: 109 min","Distributer: Blitz Film Video doo","Zemlja porekla: US","Godina proizvodnje: 2023"],t=["Režiser: Ridley Scott","Glumci: Joaquin Phoenix","Žanr: Drama","Trajanje: 158 min","Distributer: CON Film","Zemlja porekla: US"],n=document.getElementById("polje"),o="<ul>Informacije o filmu:";if(0===e){for(a.splice(1,0,"Glumci: Jovan Ginic"),i=0;i<a.length;i++)o+=`<li>${a[i]}</li>`;o+="</ul>",n.innerHTML=o}else if(1===e){for(l.unshift("Režiser: Pierre Morel"),i=0;i<l.length;i++)o+=`<li>${l[i]}</li>`;o+="</ul>",n.innerHTML=o}else{for(t.push("Godina proizvodnje: 2023"),i=0;i<t.length;i++)o+=`<li>${t[i]}</li>`;o+="</ul>",n.innerHTML=o}}function povecajSliku(e,a){let l=document.getElementById(e);a?(l.style.height="260px",l.style.borderRadius="10px",l.style.boxShadow="0 4px 10px 0 rgba(0, 0, 0, 0.5)"):(l.style.height="250px",l.style.borderRadius=null,l.style.boxShadow=null)}function izbaciPoruku(){let e=document.getElementById("ime").value.trim(),a=document.getElementById("prezime").value.trim(),l=document.getElementById("email"),t=document.getElementById("tel"),n=e.concat(" ",a);""==e.value||""==a.value||""==l.value||""==t.value?alert("Morate uneti Vaše podatke!"):"anita"===e||"Anita"===e?alert(`Čestitamo ${n.toUpperCase()}, ostvarili ste 20% popusta na Vašu rezervaciju!`):alert(`${n.toUpperCase()} uspešno ste obavili Vašu rezervaciju!`)}