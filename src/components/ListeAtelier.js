// ./components/ListeAtelier.js
import React, { useState, useEffect } from "react"

import DetailAtelier from "./DetailAtelier";
import axios from "./AxiosInterceptor";


const ListeAtelier = props => {
    const [ateliers, setAteliers] = useState([]) //déclare une variable d'état appelée "ateliers". On change sa valeur en appelant la méthode setAteliers

    useEffect(() => {
        const fetchData = async () => {
            await axios.get('api/ateliers'  ) //get : car on fait un appel en get,  'api/ateliers' est l'URI appelée donnant la liste des ateliers
                .then((response) => {
                    console.log(response )
                    setAteliers(response.data) // on attribue à la "ateliers" les response.data
                }, (error) => {
                    console.log(error) //Affichage dans la console de log d'une éventuelle erreur
                });
        };
        fetchData(); // appel de la méthode créée ci dessus !
    }, []);


    //useEffect sert à suivre le cycle de vie de l'objet ListAtelier.
    // Qu'est-ce que le cycle de vie d'un objet ?
    // Chaque composent react est créé, mise à jour en boucle puis détruit.
    // les useEffect sont appelés à la création puis à la mise à jour puis à la destruction ! Tout ça avec la même méthode...
    // Comment s'aiguiller  ? tout dépend de la valeur entre crochets [] ;
    // useEffect( () => { ... } , []) ; // ... code exécuté uniquement au chargement de la page
    // useEffect( () => { ... }) ; // ... code exécuté à chaque cycle de mise à jour de la page (donc à chaque frame !)
    // useEffect( () => { ... } , [variable]) ; // code exécuté à chaque changements de valeur de la variable
    // useEffect( () => { ... } , [props]) ; // code exécuté à chaque changements des props (donc une fois leur valorisation, puis à chaque changement provoqué par le composant père)


    //Voici le scénario de cette page :
    // 1. useEffect est appelé
    // 2. dans useEffect on appelle "setAteliers" qui met à jour l'état "ateliers"
    // 3. "ateliers" changeant, l'affichage de ce composant est reconstruit

return (
    <div className="container">
        <h1>Nos ateliers</h1>
        <ul>
            {ateliers.map(atelierAct => (
                <DetailAtelier key={atelierAct.id} atelier={atelierAct}/>
            ))}
        </ul>
    </div>
)
}
export default ListeAtelier