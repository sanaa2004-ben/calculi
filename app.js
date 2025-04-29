const ecran = document.querySelector(".ecran");
const boutons = document.querySelectorAll(".bouton");
let expression = "";
boutons.forEach(bouton => {
    bouton.addEventListener("click", () => {
        const valeur = bouton.textContent;

        if (valeur === "C") {
            expression = "";
            ecran.textContent = "";
        } else if (valeur === "=") {
            try{
                const resultat = eval(expression);
                ecran.textContent = resultat;
                expression = resultat.toString();
            } catch (error) {
                ecran.textContent = "Erreur";
                expression = "";
            }
        } else {
            expression += valeur;
            ecran.textContent = expression;
        }
    });
});
window.addEventListener('error',(e)=>{
    alert('une erreur est survenue dans votr calcul:'+e.message)
}
)