import Card from "./components/Card"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./App.css"



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
    description: "Les lamiacées sont une très grande famille de plantes médicinales : aucune des plantes de cette famille n'est toxique, quasiment toutes sont médicinales."
  },
]

function App() {

  return (
    <>
      <Header />
      
      <main>
        {arrayOfPlants.map((plantes) => (
          <Card key={plantes.specie} specie={plantes.specie} imgSrc={plantes.imgSrc} description={plantes.description} />
        )
        )}
      </main>
      <Footer/>
    </>
  )
}

export default App

