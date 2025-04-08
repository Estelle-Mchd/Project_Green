import Card from "./components/Card"
import "./App.css"
import Header from "./components/Header"
import { useState } from "react";

const arrayOfPlants = [
  {
    specie: "Brassicacées (Crucifères)",
    imgSrc: "https://www.arcadie.fr/wp-content/uploads/2020/02/raifort-1-600x800.jpg",
    description: "Le Raifort est une plante qui est utilisé en cuisine pour sa racine. Les Brassicacées sont aussi appelés de leur ancien nom Crucifère, en raison de leurs fleurs typiques à 4 pétales en croix."
  },
  {
    specie: "Fabacées",
    imgSrc: "https://www.arcadie.fr/wp-content/uploads/2023/06/pois-de-senteur-700x467.jpg",
    description: "La famille des fabacées nous fournit tous les haricots, pois, fèves (appelés “légumes”). Elle est également appelée Papilionacées en raison de la forme de leurs fleurs évoquant un papillon (ailes)."
  },
  {
    specie: "Lamiacées",
    imgSrc: "https://www.arcadie.fr/wp-content/uploads/2023/06/1-576x1024.jpg",
    description: "Les lamiacées sont une très grande famille de plantes médicinales : aucune des plantes de cette famille n'est toxique, quasiment toutes sont médicinales connues surtout pour agir sur les systèmes respiratoires et digestifs."
  },
  {
    specie: "Ombellifères",
    imgSrc: "https://www.arcadie.fr/wp-content/uploads/2020/02/Arcadie-fenouil-graine-bio-aquarelle.jpg",
    description: "Les Ombellifères au catalogue d’Arcadie sont essentiellement valorisées pour leurs graines : anis, cumin, fenouil, carvi, coriandre, aneth, leurs racines sont assez majoritairement grosses et pivotantes."
  },
  {
    specie: "Composées",
    imgSrc: "https://www.arcadie.fr/wp-content/uploads/2019/11/Plante-Infusion-Camomille-matricaire-Bio.png",
    description: "La famille des Composées, on l’a vu, est caractérisée par ses fleurs très organisées, très serrées les unes contre les autres, elles sont utilisées en médicinales et aromatiques dans les tisanes."
  },
  {
    specie: "Zingibéracées",
    imgSrc: "https://www.arcadie.fr/wp-content/uploads/2023/06/gingembre_mada-21.jpg",
    description: "Zingibéracées ? Quésako ?! Que ce soit dans les rhizomes (curcuma, gingembre) ou les graines (cardamome), ces plantes nous offrent un goût assez fort et des propriétés médicinales plutôt citées comme digestives, apéritives."
  },

]


function App() {
  const [planteName, setPlanteName] = useState('');
  const otherName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlanteName(event.target.value);
  };
  const filteredPlants = arrayOfPlants.filter((plantes) =>
    plantes.specie.toLowerCase().includes(planteName.toLowerCase())
  );
  return (
    <>
      <Header />
      <section>
        <h1>Project Green</h1>
        <p>Nourrir la nature et être nourrie par elle. <br /><p className="inputparagraphe">Vous recherchez la plante : {planteName}</p> </p>
      </section>
      <section><input
        type="text"
        value={planteName}
        onChange={otherName}
        placeholder="Quelle plante voulez-vous consulter ?"
      ></input></section>
      <main>
        {filteredPlants.map((plantes) => (
          <Card
            key={plantes.specie}
            specie={plantes.specie}
            imgSrc={plantes.imgSrc}
            description={plantes.description}
            highlight={planteName && plantes.specie.toLowerCase().includes(planteName.toLowerCase())} />
        )
        )}

      </main>
    </>
  )
}

export default App
