import { Container } from "react-bootstrap"
import { ItemList } from "../ItemList/ItemList"
import { ItemListContainer } from "../ItemListContainer/ItemListContainer"
import { NavCatalogo } from "../NavCatalogo/NavCatalogo"


export const Catalogo = () => {
    return (
        <Container>
            <ItemListContainer>
                <ItemList />
            </ItemListContainer>
        </Container>
    )
}