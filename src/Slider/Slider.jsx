import React from "react";
import Slider from "react-slick";
import ava from "../images/avatar.png";

class SimpleSlider extends React.Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div className="wr_slid">
                    <div className="d-flex">
                        <div className="slider-image mr-3">
                            <img src={ava} alt=""/>
                        </div>
                        <div>
                            <div className="slider--title">
                                Геннадий Бобровников
                            </div>
                            <div className="slider--excerpt">Врач-кардиолог</div>
                        </div>

                    </div>
                    <div>

                        <p className="slider--text">Проходила обучение в CASIAM Академии. Повышала квалификацию по
                            направлению Anti-Age Expert .
                            Освоила междисциплинарные подходы к лечению в своей отрасли. Считаю, что современные врачи
                            должны владеть навыками, которые даются в Академии.</p>
                    </div>
                </div>


                <div className="wr_slid">
                    <div className="d-flex">
                        <div className="slider-image mr-3">
                            <img src={ava} alt=""/>
                        </div>
                        <div>
                            <div className="slider--title">
                                Геннадий Бобровников
                            </div>
                            <div className="slider--excerpt">Врач-кардиолог</div>
                        </div>

                    </div>
                    <div>

                        <p className="slider--text">Проходила обучение в CASIAM Академии. Повышала квалификацию по
                            направлению Anti-Age Expert .
                            Освоила междисциплинарные подходы к лечению в своей отрасли. Считаю, что современные врачи
                            должны владеть навыками, которые даются в Академии.</p>
                    </div>
                </div>

            </Slider>
        );
    }
}

export default SimpleSlider;