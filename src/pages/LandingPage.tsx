import CategoriaSelector from "../components/CategoriaSelector/CategoriaSelector"
import CategoriasTareas from "../components/CategoriasTareas/CategoriasTareas"
import CarouselHome from "../components/carouselHome/CarouselHome"

const LandingPage = () => {
  return (
    <>
        <CarouselHome/>
        <CategoriaSelector/>
        <CategoriasTareas/>
    </>
  )
}

export default LandingPage