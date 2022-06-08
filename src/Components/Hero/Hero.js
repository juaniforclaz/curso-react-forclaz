import { Button, Carousel, Container } from 'react-bootstrap';
import Imagenes from '../../Img/Imagenes';

export const Hero = () => {

    return (
        <Container>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Imagenes.car1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Imagenes.car2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Imagenes.car3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>

    )


}

