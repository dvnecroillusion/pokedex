//funzioni di incremento e decremento n° pkmn
let i=1;
next = () =>{
    if (i==802){
        i=1;
        console.log(i);
    }else{
        i++;
    }
}
prev = () =>{
    if (i>1){
    i--;
    console.log(i);
    }else{
       i=802; 
    }
}

let shiny=false;

function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            res = JSON.parse(xhttp.responseText);// assegnamo ad una variabile res il parse in file JSON delle info recuperate sul pokemon in questione. Questo vuol semplicemente dire che parsiamo(convertiamo) le info che inizialmente sono una enorme stringa di testo in un file leggibile, tipo mega oggettone, al quale possiamo accedere secondo res.quelcazzochevoglio.
            document.getElementById("id").innerHTML = res.id;
            document.getElementById("name").innerHTML = res.name;
            document.getElementById("weight").innerHTML = res.weight;
            if (shiny===true)
            {

                document.getElementById("image").src = res.sprites.front_shiny;
            }else{
                document.getElementById("image").src = res.sprites.front_default;
            }
            document.getElementById("image").style.visibility = "visible";
            document.getElementById("hp").innerHTML = res.stats[5].base_stat;
            document.getElementById("def").innerHTML = res.stats[3].base_stat;
            document.getElementById("sdef").innerHTML = res.stats[1].base_stat;
            document.getElementById("atk").innerHTML = res.stats[4].base_stat;
            document.getElementById("satk").innerHTML = res.stats[2].base_stat;
            document.getElementById("spd").innerHTML = res.stats[0].base_stat;
           // sezione per tipi pokemon
            document.getElementById("type1").innerHTML = res.types[0].type.name;
            for(let i =0; i < res.types.length; i++) {
                i === 0 ? document.getElementById("type2").innerHTML = ""
                        :  document.getElementById("type2").innerHTML = res.types[1].type.name     
             }
        }
      /*else{
          window.alert("DAMMI TEMPO");
      }*/
    };
    xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${i}/`, true);
    xhttp.send();
  }


getSearch = () => {
    i = document.getElementById("search").value;
    return i;
}

searchRefresh = () =>{
    getSearch(), loadDoc();
}


nextPkmn = () =>{
    next(), loadDoc();
}
prevPkmn = () =>{
    prev(), loadDoc();
}

shinyButt = () =>{
    shiny = true;
    document.getElementById("shiny-button").style.backgroundColor="#fdd246";
    document.getElementById("normal-button").style.backgroundColor="#c79800";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            res = JSON.parse(xhttp.responseText);
            document.getElementById("image").src = res.sprites.front_shiny;
      }
    };
    xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${i}/`, true);
    xhttp.send();
    return shiny;
}

normalButt = () =>{
    shiny = false;
    document.getElementById("normal-button").style.backgroundColor="#fdd246";
    document.getElementById("shiny-button").style.backgroundColor="#c79800";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            res = JSON.parse(xhttp.responseText);
            document.getElementById("image").src = res.sprites.front_default;
      }
    };
    xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${i}/`, true);
    xhttp.send();
    return shiny;
}