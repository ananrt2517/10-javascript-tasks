// skripta mora da se pokrene pomocu noda u consoli nikako u brow
// Napisati metodu koja za date podatke vraca listu ljudi koji su stariji od 20 godina (lista objekata, kao i u json-u)
// Metoda mora da ima kao ulazni parametar funkciju koja izracunava godine (moze da ima i druge parametre, bitno je samo da je jedan od njih funkcija);

const ljudi = require("./ljudi.json");

function vratiListuLjudi(fn, num) {
  let novaListaLjudi = [];
  for (let user of ljudi) {
    let funkc = fn(user.godiste);
    user.age = funkc;
    if (funkc > num) {
      novaListaLjudi.push(user);
      
    }
  }

  return novaListaLjudi;
}

const listaStarijihOd40 = vratiListuLjudi(izrGodine, 21);
console.log(listaStarijihOd40)


function izrGodine(godRodjenja) {
  return 2020 - godRodjenja;
}

