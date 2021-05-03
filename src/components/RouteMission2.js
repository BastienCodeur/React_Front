

import { BrowserRouter, Route, Switch} from "react-router-dom"

import About from "../pages/About";
import NotMatch from "../pages/NotMatch";
import Accueil from "../pages/Accueil";
import BarreDeNavigation from "./BarreDeNavigation";
import ListeAtelier from "./ListeAtelier";
import ListeBoisson from "./ListeBoisson";
import Atelier from "./Atelier";
import Boisson from "./Boisson";
import Connexion from "./Connexion";
import Deconnexion from "./Deconnexion";
import Profile from "./Info";




const RouteMission2 = props => {
    return (
        <BrowserRouter>
            <BarreDeNavigation login={props.login}/>
            <Switch>

                <Route path="/atelier/:id">
                <Atelier login={props.login}/>
            </Route>

                <Route path="/boisson/:id">
                    <Boisson/>
                </Route>

                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/mesinfos">
                    <Profile/>
                </Route>

                <Route path="/atelier">
                    <ListeAtelier/>
                </Route>

                <Route path="/boisson">
                    <ListeBoisson/>
                </Route>

                <Route path="/connexion">
                    <Connexion gereChangementSession={props.gereChangementSession}/>
                </Route>

                <Route path="/deconnexion">
                    <Deconnexion gereChangementSession={props.gereChangementSession}/>
                </Route>





                <Route path="NotMatch">
                    <NotMatch/>
                </Route>

                <Route path="*">
                    <Accueil/>
                </Route>
            </Switch>

        </BrowserRouter>
    );
}

export default RouteMission2