import "./Home.css"
import { Menu } from "../Menu/Menu"
export function Home(){
    return(
        <>
            <Menu></Menu>
            <section className="banner text-white fw-bold">
                <h2>THE BARBER SHOP...</h2>
            </section>
        </>
    )
}