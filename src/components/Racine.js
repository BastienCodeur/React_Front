
//./components/Racine.js
/*Les bibliothèques liées à React*/
import React, { useState, useEffect } from "react"

/*Les composants*/
import RouteMission2 from "./RouteMission2"

const Racine = () => {
    // déclaration des variable d'état
    const [token, setToken] = useState( String(localStorage.getItem("token") || "-1") ); // Le token de session
    const [refresh_token, setRefresh_token] = useState(  String(localStorage.getItem("refresh_token") || "-1") ); // Le token de refresh
    const [login, setLogin] = useState(  String(localStorage.getItem("login") || "-1") ); // Le login actuellement connecté


    //Création de la fonction fléchée qui gère le changement de session
    //Cette fonction prend 3 paramètres (token_param,Refresh_token_param,login_param )
    //Cette fonction est supportée par une variable. On pourait très bien ici faire un appel de la sorte :
    // gereChangementSession("ar...","aerger...","jbaubry...")
    //Sauf que c'est une variable ! donc on peut la transmettre à une autre variable !
    const fonctionChangementSession = (token_param,Refresh_token_param,login_param ) => {
        setToken(token => token_param)
        setRefresh_token(refresh_token => Refresh_token_param)
        setLogin(login => login_param)
    }



    useEffect(() => {
        localStorage.setItem("token", token)
    }, [token])

    useEffect(() => {
        localStorage.setItem("login", login)
    }, [login])

    useEffect(() => {
        localStorage.setItem("refresh_token", refresh_token)
    }, [refresh_token])



    return (
        <>
            <RouteMission2 gereChangementSession={fonctionChangementSession} login={login}/>
        </>
    );
}

export default Racine