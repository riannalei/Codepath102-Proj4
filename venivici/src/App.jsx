import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import BanList from "./components/BanList";
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [currentDog, setCurrentDog] = useState({});
  const [banAttribs, setBanAttribs] = useState([]);

  const isValidDog = (dog) => {
    // Validate dog against banAttribs
    return !banAttribs.includes(dog.breeds[0].name) && 
           !banAttribs.includes(dog.breeds[0].temperament) &&
           !banAttribs.includes(dog.breeds[0].life_span);
  };

  const getDog = async () => {
    let isValid = false;
    let dog = {};

    while(!isValid) {
      dog = await fetch(
        "https://api.thedogapi.com/v1/images/search?has_breeds=1",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "x-api-key": ACCESS_KEY
          }
        }
      ).then((response) => response.json()).then(data => data[0]);

      isValid = isValidDog(dog);
    }

    setCurrentDog({
      image: dog.url,
      breed: dog.breeds[0].name,
      temperament: dog.breeds[0].temperament,
      life_span: dog.breeds[0].life_span
    });
  };

  const addBan = (attr) => {
    setBanAttribs([...banAttribs, attr]);
  };

  return (
    <div className="App">
      <button onClick={getDog}>Get a random dog!</button>
      <Card dog={currentDog} addBan={addBan} />
      <BanList bannedAttr={banAttribs} />
    </div>
  );
}

export default App;