import React from "react";
import Slider from "react-slick";
import sliderImg1 from "../images/slider/1.png";
import sliderImg2 from "../images/slider/2.png";
import sliderImg3 from "../images/slider/3.png";
import sliderImg4 from "../images/slider/product.png";


class SimpleSliderNav extends React.Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="section--value bgn">
                <Slider {...settings}>
                    <div className="h_100">
                        <h2 className="title_simple">
                            Главный тест<br/>
                            вашей жизни
                        </h2>
                        <div>
                            <img src={sliderImg1} alt=""/>
                        </div>
                        <div>
                            <p>— Риски развития заболеваний</p>
                            <p>— Статус носительства наследственных заболеваний</p>
                            <p>— Особенности метаболизма и предрасположенность к непереносимости некоторых нутриентов</p>
                            <p>— Признаки и риски, связанные со спортом</p>
                            <p>— История происхождения и популяционный состав</p>
                            <p>— Уникальные личные качества</p>
                        </div>
                        <div className="mb-5">
                            <a href="#" className="section--spec--button">Подробнее</a>
                        </div>
                    </div>

                    <div className="h_100">
                        <h2 className="title_simple">
                            Главный тест<br/>
                            вашей жизни
                        </h2>
                        <div>
                            <img src={sliderImg2} alt=""/>
                        </div>
                        <div>
                            <p>— Риски развития заболеваний</p>
                            <p>— Статус носительства наследственных заболеваний</p>
                            <p>— Особенности метаболизма и предрасположенность к непереносимости некоторых нутриентов</p>
                            <p>— Признаки и риски, связанные со спортом</p>
                            <p>— История происхождения и популяционный состав</p>
                            <p>— Уникальные личные качества</p>
                        </div>
                        <div className="mb-5">
                            <a href="#" className="section--spec--button">Подробнее</a>
                        </div>
                    </div>
                </Slider>
            </div>

        );
    }
}

export default SimpleSliderNav;