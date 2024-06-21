import { useState } from "react";

import Header from "./components/Header/Header";
import Game from "./components/Game/Game";
import RulesModal from "./components/RulesModal/RulesModal";
import PickedOption from "./components/PickedOption/PickedOption";

import styles from "./App.module.css";

// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// import map from "./assets/map.osm";

// function OfflineMap({ coordinates }) {
//   return (
//     <MapContainer
//       center={coordinates}
//       zoom={8}
//       style={{ height: "400px", width: "100%" }}
//     >
//       <TileLayer
//         // url="path_to_your_local_tile_server/{z}/{x}/{y}.png"
//         url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=kGuy2ykKtzzezuzhpmEH"
//         // url="https://b.tile.openstreetmap.org/8/127/85.png"
//         attribution="Map data © OpenStreetMap contributors"
//       />
//       <Marker position={coordinates}>
//         <Popup>Coordinates: {coordinates}</Popup>
//       </Marker>
//       <Marker position={[30.677717, 73.606812]}>
//         <Popup>Coordinates: [30.677717, 73.606812]</Popup>
//       </Marker>
//       <Marker position={[31.177717, 73.606812]}>
//         <Popup>Coordinates: [30.677717, 73.606812]</Popup>
//       </Marker>
//     </MapContainer>
//   );
// }

const App = () => {
  const [displayRules, setDisplayRules] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const displayRulesHandler = () => {
    setDisplayRules((prevState) => !prevState);
  };

  const selectedOptionHandler = (value) => {
    setSelectedOption(value);
  };

  const scoreChangeHandler = (value) => {
    setScore((prevState) => prevState + value);
  };

  return (
    // <div style={{ width: "100%", height: "200px"}}>
    // <OfflineMap coordinates={[30.677717, 73.106812]} />
    // </div>
    <div className={styles.main_container}>
      <Header score={score} />
      {selectedOption === null ? (
        <Game onOptionClick={selectedOptionHandler} />
      ) : (
        <PickedOption
          selectedOption={selectedOption}
          onScoreChange={scoreChangeHandler}
          onOptionClick={selectedOptionHandler}
        />
      )}

      <button className={styles.rules_btn} onClick={displayRulesHandler}>
        RULES
      </button>
      {displayRules && <RulesModal onModalHide={displayRulesHandler} />}
    </div>
  );
};

export default App;
