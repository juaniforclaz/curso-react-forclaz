import { Container } from "react-bootstrap"
import { ItemList } from "../../Components/ItemList/ItemList"
import { ItemListContainer } from "../../Components/ItemListContainer/ItemListContainer"


export const Catalogo = () => {
    
    return (

        <Container>

            <ItemListContainer>

                <ItemList />

            </ItemListContainer>

        </Container>
        
    )
}