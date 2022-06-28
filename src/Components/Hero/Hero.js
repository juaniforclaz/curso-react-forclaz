import { motion } from "framer-motion"
import { Carousel } from 'react-bootstrap';
import Imagenes from '../../Img/Imagenes';

export const Hero = () => {

    return (
        <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            
        >
            <Carousel className='container-fluid'>
                <Carousel.Item>
                    <img
                        className="d-block img-carousel"
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
                        className="d-block img-carousel"
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
                        className="d-block img-carousel"
                        src={Imagenes.car3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </motion.div >
    )


}

