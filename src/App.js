import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Body from "./components/Body";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import CurrentTemperature from "./components/CurrentTemperature";
import offersList from "./data.json";
import Offer from "./components/Offer";
import {useState} from "react";


function App() {
    const destinations = ["Europe", "Africa", "Asia", "All"];
    const destinationsModified = destinations.map((dest, i) => ({id: i , title: dest}));

    const [itemCount, setItemCount] = useState(0);
    const [namesOfOffersAdded, setNamesOfOffersAdded] = useState([]);

    const addItemToBasket = (name, itemCount) => {
        if (!namesOfOffersAdded.find(e => e===name)) {
            let temp = namesOfOffersAdded;
            temp.push(name);
            setNamesOfOffersAdded(temp);
            setItemCount(itemCount + 1);
        } else {alert("Offer is already in basket!");}
    }

    return (
        <>
            <Router>
                <div className="App">
                    <Header itemCount={itemCount}/>
                    <Routes>
                        <Route path="/" element={<Main destinations={destinationsModified}/>}/>
                        {destinationsModified.map(d => {
                            return (
                                <Route path={`/${d.title}`} key={d.id} element={<Body region={d.title} addItemToBasket={addItemToBasket} itemCount={itemCount}/>} exact/>)
                        })}
                        {offersList.map(offer => {

                            return (
                                <Route path={`/${offer.region}/${offer.name.replaceAll(" ", "_")}`} key={destinations.length + offer.id} element={
                                    <Offer addItemToBasket={addItemToBasket} itemCount={itemCount} key={offer.id} region={offer.region} name={offer.name} image={offer.image} destination={offer.destination} dates={offer.dates} cost={offer.cost}/>
                                } exact/>)
                        })}
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                    <CurrentTemperature />
                    <Footer/>
                </div>
            </Router>
        </>

    );
}

export default App

