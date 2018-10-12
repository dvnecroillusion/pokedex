//funzioni di incremento e decremento n° pkmn
let i=1;
next = () =>{
    if (i==802){
        i=1;
        console.log(i);
    }else{
        i=i+1;
    }
}
prev = () =>{
    if (i>1){
    i=i-1;
    console.log(i);
    }else{
       i=802; 
    }
}


function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            res = JSON.parse(xhttp.responseText);// assegnamo ad una variabile res il parse in file JSON delle info recuperate sul pokemon in questione. Questo vuol semplicemente dire che parsiamo(convertiamo) le info che inizialmente sono una enorme stringa di testo in un file leggibile, tipo mega oggettone, al quale possiamo accedere secondo res.quelcazzochevoglio.
            document.getElementById("id").innerHTML = res.id;
            document.getElementById("name").innerHTML = res.name;
            document.getElementById("weight").innerHTML = res.weight;
          // document.getElementById("image").display = block;
            document.getElementById("image").src = res.sprites.front_default;
            document.getElementById("hp").innerHTML = res.stats[5].base_stat;
            document.getElementById("def").innerHTML = res.stats[3].base_stat;
            document.getElementById("sdef").innerHTML = res.stats[1].base_stat;
            document.getElementById("atk").innerHTML = res.stats[4].base_stat;
            document.getElementById("satk").innerHTML = res.stats[2].base_stat;
            document.getElementById("spd").innerHTML = res.stats[0].base_stat;
           // console.log(xhttp.responseText);
           return res;
      }
      /*else{
          window.alert("DAMMI TEMPO");
      }*/
    };
    xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${i}/`, false);
    xhttp.send();
  }

nextPkmn = () =>{
    next(), loadDoc();
}
prevPkmn = () =>{
    prev(), loadDoc();
}
/*
shiny = () =>{
    document.getElementById("image").src = res.sprites.shiny;
}

normal = () =>{
    let color= false;
 }*/