// Création du pion 
let pion = document.createElement('img'); 
pion.src = 'img/pion.png';  // Précision de la src de cette img 
pion.style.cssText = "padding-left: 25px";

// Création de la cage avec l'élément table 
let cage = document.createElement('table');
// Précision sur le style de cette cage en CSS (collapse pour pas double bordure)
cage.style.cssText = "border: 2px solid black; border-collapse: collapse";
// Boucle des rangées (axe vertical)
for (let x = 0; x < 5; x++){
    // Création de chaque rangée 
    let tr = cage.insertRow();
    // Boucle des cellules dans chacune des rangées 
    for (let y = 0; y < 5; y++){
        // Création de chaque cellule 
        let td = tr.insertCell();
        // font-size: 0 pour pas d'espace sous le pion
        td.style.cssText = "border: 1px solid black; width: 100px; height: 100px; font-size: 0";
    }
}

// Position du pion au centre (case 3)
let x = y = 2;
cage.rows[x].cells[y].appendChild(pion);
// Affiche la cage avec mon pion dedans dans ma div out 
out.appendChild(cage);

// Ecouter les saisies clavier 
window.addEventListener('keydown', evt => {
    console.log(evt.key);
    // Modifier les coordonnées x et y en fonction de la flèche pressée
    if(evt.key === 'ArrowUp' && x > 0) x--; // remonte sur axe vertical 
    else if(evt.key === 'ArrowRight' && y < 4) y++; // se déplace sur la droite
    else if(evt.key === 'ArrowDown' && x < 4) x++; 
    else if(evt.key === 'ArrowLeft' && y > 0) y--; 
    // Mettre à jour la position du pion 
    cage.rows[x].cells[y].appendChild(pion);
}, false); 