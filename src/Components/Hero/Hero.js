import { Carousel } from 'react-bootstrap';
import Imagenes from '../../Img/Imagenes';

export const Hero = () => {

    return (

        <Carousel className='container-fluid'>

            <Carousel.Item>

                <img
                    className="d-block img-carousel"
                    src={Imagenes.car1}
                    alt="First slide"
                />

            </Carousel.Item>

            <Carousel.Item>

                <img
                    className="d-block img-carousel"
                    src={Imagenes.car2}
                    alt="Second slide"
                />

            </Carousel.Item>

            <Carousel.Item>

                <img
                    className="d-block img-carousel"
                    src={Imagenes.car3}
                    alt="Third slide"
                />

            </Carousel.Item>

        </Carousel>

    )


}

