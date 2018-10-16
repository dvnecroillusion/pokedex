let i=1;
let shiny=false;
let spritePosition=false;

//funzioni di incremento e decremento n° pkmn + fx input id

getSearchId = () => {
    i = document.getElementById("search").value;
    return i;
}

getSearchName = () =>{
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            res = JSON.parse(xhttp.responseText);
            }
    };
    xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/`, true);
    xhttp.send();
    console.log(res);
    for(let k=1; k<802; k++){
        if(document.getElementById("search").value === res.name){
            i = res.id;
        }
    }
    return i;
}

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

//ajax con restituzione dati in output

function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            res = JSON.parse(xhttp.responseText);// assegnamo ad una variabile res il parse in file JSON delle info recuperate sul pokemon in questione. Questo vuol semplicemente dire che parsiamo(convertiamo) le info che inizialmente sono una enorme stringa di testo in un file leggibile, tipo mega oggettone, al quale possiamo accedere secondo res.quelcazzochevoglio.
            document.getElementById("search").value = res.id;
            document.getElementById("search2").value = res.name;
            document.getElementById("weight").innerHTML = res.weight;
            if (shiny===true)
            {

                document.getElementById("image").src = res.sprites.front_shiny;
            }else{
                document.getElementById("image").src = res.sprites.front_default;
            }
            document.getElementById("image").style.visibility = "visible";
            document.getElementById("hp").innerHTML = res.stats[5].base_stat;
            document.getElementById("hpBar").style.width = ((145*res.stats[5].base_stat)/300);
            document.getElementById("hpBar").innerHTML = res.stats[5].base_stat;
            document.getElementById("def").innerHTML = res.stats[3].base_stat;
            document.getElementById("defBar").style.width = ((145*res.stats[3].base_stat)/300);
            document.getElementById("sdef").innerHTML = res.stats[1].base_stat;
            document.getElementById("sdefBar").style.width = ((145*res.stats[1].base_stat)/300);
            document.getElementById("atk").innerHTML = res.stats[4].base_stat;
            document.getElementById("atkBar").style.width = ((145*res.stats[4].base_stat)/300);
            document.getElementById("satk").innerHTML = res.stats[2].base_stat;
            document.getElementById("satkBar").style.width = ((145*res.stats[2].base_stat)/300);
            document.getElementById("spd").innerHTML = res.stats[0].base_stat;
            document.getElementById("spdBar").style.width = ((145*res.stats[0].base_stat)/300);
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
    //return res;
}

//fx di gestione tasto frecce con aggiornamento pkmn e ricerca id con agg pkmn


searchRefreshId = () =>{
    getSearchId(), loadDoc();
}

nextPkmn = () =>{
    next(), loadDoc();
}
prevPkmn = () =>{
    prev(), loadDoc();
}

//fx colorazione pkmn

shinyButt = () =>{
    shiny = true;
    document.getElementById("shiny-button").style.backgroundColor="#fdd246";
    document.getElementById("normal-button").style.backgroundColor="#c79800";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            res = JSON.parse(xhttp.responseText);
            if (spritePosition===false){
                document.getElementById("image").src = res.sprites.front_shiny;
            }else{
                document.getElementById("image").src = res.sprites.back_shiny;
            }
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
            if (spritePosition===false){
                document.getElementById("image").src = res.sprites.front_default;
            }else{
                document.getElementById("image").src = res.sprites.back_default;
            }
      }
    };
    xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${i}/`, true);
    xhttp.send();
    return shiny;
}

//fx per ruotare

rotate = () =>{
    if (spritePosition === false){
        spritePosition = true;
        console.log(spritePosition);
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
                res = JSON.parse(xhttp.responseText);
                if (shiny===false){
                    document.getElementById("image").src = res.sprites.back_default;
                }else{
                    document.getElementById("image").src = res.sprites.back_shiny;
                }
          }
        };
        xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${i}/`, true);
        xhttp.send();
    }else{
        spritePosition = false;
        console.log(spritePosition);
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                  res = JSON.parse(xhttp.responseText);
                  if (shiny===false){
                      document.getElementById("image").src = res.sprites.front_default;
                  }else{
                      document.getElementById("image").src = res.sprites.front_shiny;
                  }
            }
          };
          xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${i}/`, true);
          xhttp.send();
    }
    return spritePosition;
}