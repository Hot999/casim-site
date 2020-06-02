import React, {useState} from "react";
import burger from "../images/burgermenu.svg";
import logo from "../images/logo.svg";
import login from "../images/user.svg";
import SimpleSliderNav from "../Slider/SliderNav";
import close from "../images/close.svg";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        openMenu: false
    }

    setCount() {
        this.setState({
            openMenu: !this.state.openMenu
        })
    }

    scroll(ref) {
        const offsetTop = ref.current.offsetTop;
        console.log(offsetTop)
        window.scrollTo({
            top: offsetTop - 100,
            behavior: "smooth"
        });
    }

    render() {
        console.log(this.props)
        return (
            <>
                <header className={"header" + (this.state.openMenu ? " header-fixed" : "")}>
                    <div className="container-fluid">
                        <div
                            className="header_wrapper align-items-center justify-content-between justify-content-lg-around d-flex">
                            <div className="col-header menu_mobile_left">
                                {!this.state.openMenu
                                    ? <img width="72px" height="47px" src={burger} className="burgerMenu" alt=""
                                           onClick={() => this.setCount()}/>
                                    : <img width="72px" height="47px" src={close} className="burgerMenu" alt=""
                                           onClick={() => this.setCount()}/>
                                }
                            </div>
                            <div className="col-header">
                                <div className="logo text-center">
                                    <img src={logo} className="img-fluid" alt=""/>
                                </div>
                            </div>
                            <div className="col-header header_nav_modile">
                                <ul className="header_ul d-flex">
                                    <li>
                                        <a onClick={() => {this.scroll(this.props.about)}}>О нас</a>
                                    </li>
                                    <li>
                                        <a onClick={() => {this.scroll(this.props.services)}}>Сервисы</a>
                                    </li>
                                    <li>
                                        <a onClick={() => {this.scroll(this.props.benefits)}}>Преимущества</a>
                                    </li>
                                    <li>
                                        <a onClick={() => {this.scroll(this.props.team)}}>Наша команда</a>
                                    </li>
                                    <li>
                                        <a onClick={() => {this.scroll(this.props.news)}}>Новости</a>
                                    </li>
                                    <li>
                                        <a onClick={() => {this.scroll(this.props.contacts)}}>Контакты</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-header menu_mobile_left">
                                <div className="header-login d-flex">
                                    <span><img src={login} alt=""/></span>
                                    <a href="#" className="login">Войти</a>
                                </div>
                            </div>

                            <div className="col-header menu_mobile_right">
                                {!this.state.openMenu
                                    ? <img width="72px" height="47px" src={burger} className="burgerMenu" alt=""
                                           onClick={() => this.setCount()}/>
                                    : <img width="72px" height="47px" src={close} className="burgerMenu" alt=""
                                           onClick={() => this.setCount()}/>
                                }
                            </div>

                        </div>
                    </div>
                </header>

                {
                    this.state.openMenu
                        ? <div className="wrapper_header_container-menu">
                            <div className="header_nav_fix section--value h_100">
                                <div className="container-fluid p-0 h_100">
                                    <div className="row no-gutters h_100">
                                        <div className="col-lg-6 col-12 bg_header_nav">
                                            <div className="wrapper_nav_header_d">
                                                <div className="d-flex mt-1 mb-1 mobile--fled">
                                                    <a className="wrapper_header_nav_link" href="https://casiam-farm.com/"
                                                       target="_blank">
                                                        Casiam Farm
                                                        <div className="arrow--rigth">
                                                            <svg className="arrow--rigth-svg" width="84" height="8"
                                                                 viewBox="0 0 84 8" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M83.3536 4.35355C83.5488 4.15829 83.5488 3.84171 83.3536 3.64645L80.1716 0.464466C79.9763 0.269204 79.6597 0.269204 79.4645 0.464466C79.2692 0.659728 79.2692 0.976311 79.4645 1.17157L82.2929 4L79.4645 6.82843C79.2692 7.02369 79.2692 7.34027 79.4645 7.53553C79.6597 7.7308 79.9763 7.7308 80.1716 7.53553L83.3536 4.35355ZM0 4.5H83V3.5H0V4.5Z"
                                                                    fill="#333333"/>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a className="wrapper_header_nav_link" href="#" target="_blank">
                                                        Casiam Technology
                                                        <div className="arrow--rigth">
                                                            <svg className="arrow--rigth-svg" width="84" height="8"
                                                                 viewBox="0 0 84 8" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M83.3536 4.35355C83.5488 4.15829 83.5488 3.84171 83.3536 3.64645L80.1716 0.464466C79.9763 0.269204 79.6597 0.269204 79.4645 0.464466C79.2692 0.659728 79.2692 0.976311 79.4645 1.17157L82.2929 4L79.4645 6.82843C79.2692 7.02369 79.2692 7.34027 79.4645 7.53553C79.6597 7.7308 79.9763 7.7308 80.1716 7.53553L83.3536 4.35355ZM0 4.5H83V3.5H0V4.5Z"
                                                                    fill="#333333"/>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="d-flex justify-content-between mt-1 mb-1 mobile--fled">
                                                    <a className="wrapper_header_nav_link"
                                                       href="http://casiam-academy.com/">
                                                        Casiam Academy
                                                        <div className="arrow--rigth">
                                                            <svg className="arrow--rigth-svg" width="84" height="8"
                                                                 viewBox="0 0 84 8" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M83.3536 4.35355C83.5488 4.15829 83.5488 3.84171 83.3536 3.64645L80.1716 0.464466C79.9763 0.269204 79.6597 0.269204 79.4645 0.464466C79.2692 0.659728 79.2692 0.976311 79.4645 1.17157L82.2929 4L79.4645 6.82843C79.2692 7.02369 79.2692 7.34027 79.4645 7.53553C79.6597 7.7308 79.9763 7.7308 80.1716 7.53553L83.3536 4.35355ZM0 4.5H83V3.5H0V4.5Z"
                                                                    fill="#333333"/>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a className="wrapper_header_nav_link" href="#">
                                                        Casiam Genom
                                                        <div className="arrow--rigth">
                                                            <svg className="arrow--rigth-svg" width="84" height="8"
                                                                 viewBox="0 0 84 8" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M83.3536 4.35355C83.5488 4.15829 83.5488 3.84171 83.3536 3.64645L80.1716 0.464466C79.9763 0.269204 79.6597 0.269204 79.4645 0.464466C79.2692 0.659728 79.2692 0.976311 79.4645 1.17157L82.2929 4L79.4645 6.82843C79.2692 7.02369 79.2692 7.34027 79.4645 7.53553C79.6597 7.7308 79.9763 7.7308 80.1716 7.53553L83.3536 4.35355ZM0 4.5H83V3.5H0V4.5Z"
                                                                    fill="#333333"/>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="d-flex justify-content-between mt-1 mb-1 mobile--fled">
                                                    <a className="wrapper_header_nav_link" href="http://casiam-genome.com/"
                                                       target="_blank">
                                                        Casiam Genom
                                                        <div className="arrow--rigth">
                                                            <svg className="arrow--rigth-svg" width="84" height="8"
                                                                 viewBox="0 0 84 8" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M83.3536 4.35355C83.5488 4.15829 83.5488 3.84171 83.3536 3.64645L80.1716 0.464466C79.9763 0.269204 79.6597 0.269204 79.4645 0.464466C79.2692 0.659728 79.2692 0.976311 79.4645 1.17157L82.2929 4L79.4645 6.82843C79.2692 7.02369 79.2692 7.34027 79.4645 7.53553C79.6597 7.7308 79.9763 7.7308 80.1716 7.53553L83.3536 4.35355ZM0 4.5H83V3.5H0V4.5Z"
                                                                    fill="#333333"/>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a className="wrapper_header_nav_link" href="http://casiam-news.ru/"
                                                       target="_blank">
                                                        Casiam News
                                                        <div className="arrow--rigth">
                                                            <svg className="arrow--rigth-svg" width="84" height="8"
                                                                 viewBox="0 0 84 8" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M83.3536 4.35355C83.5488 4.15829 83.5488 3.84171 83.3536 3.64645L80.1716 0.464466C79.9763 0.269204 79.6597 0.269204 79.4645 0.464466C79.2692 0.659728 79.2692 0.976311 79.4645 1.17157L82.2929 4L79.4645 6.82843C79.2692 7.02369 79.2692 7.34027 79.4645 7.53553C79.6597 7.7308 79.9763 7.7308 80.1716 7.53553L83.3536 4.35355ZM0 4.5H83V3.5H0V4.5Z"
                                                                    fill="#333333"/>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>


                                                <div className="hr_nav"/>

                                                <p className="nav-excerpt-black">Будьте вкурсе новостей Casiam</p>
                                                <form className="">
                                                    <input type="text" name="email" className="input mt-1 mb-1"
                                                           placeholder="Адрес электронной почты"/>
                                                    <button type="submit"
                                                            className="section--spec--button_submit black mt-3">Больше
                                                        новостей
                                                    </button>
                                                </form>

                                                <div className="hr_nav"/>

                                                <div className="neader__tel">
                                                    <a href="tel:+77800084144">+7 (780) 008 41 44</a>
                                                </div>
                                                <div className="hht_1 mt-3">
                                                    Будем рады видеть вас в нашем офисе по адресу:
                                                </div>

                                                <div className="hht_2 mt-3">
                                                    Казахстан, г. Нур-Султан, район Алматы, Жилой массив Юго-Восток (правая
                                                    сторона), ул. Сулутебе, д. 3
                                                </div>

                                                <div className="d-flex align-items-center mt-3">
                                                    <div className="footer-social">
                                                        <a href="#" className="header__link">
                                                            <svg className="footer_vk" width="17" height="17"
                                                                 viewBox="0 0 17 17" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M17 2.81865C17 1.32124 15.6788 0 14.1813 0H2.81865C1.32124 0 0 1.32124 0 2.81865V14.1813C0 15.6787 1.32124 17 2.81865 17H8.54404V10.5699H6.43005V7.7513H8.54404V6.60622C8.54404 4.66839 9.95337 2.99481 11.715 2.99481H14.0052V5.81346H11.715C11.4508 5.81346 11.1865 6.07772 11.1865 6.60622V7.7513H14.0052V10.5699H11.1865V17H14.1813C15.6788 17 17 15.6787 17 14.1813V2.81865Z"
                                                                    fill="#414159"/>
                                                            </svg>

                                                        </a>
                                                        <a href="#" className="header__link">
                                                            <svg className="footer_vk" width="21" height="13"
                                                                 viewBox="0 0 21 13" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M20.8061 11.1153C20.8061 11.0322 20.7231 11.0322 20.7231 10.9492C20.391 10.285 19.6438 9.4548 18.6475 8.54155C18.1494 8.12644 17.9003 7.79434 17.7343 7.62829C17.4852 7.2962 17.4852 7.04714 17.5683 6.71505C17.6513 6.46598 17.9834 6.05086 18.5645 5.30365C18.8966 4.88853 19.0626 4.63947 19.3117 4.3904C20.5571 2.72995 21.1382 1.65064 20.9722 1.1525L20.8892 1.06949C20.8061 0.986464 20.7231 0.903444 20.5571 0.903444C20.391 0.820421 20.142 0.820421 19.8929 0.903444H16.738C16.655 0.903444 16.655 0.903444 16.4889 0.903444C16.4059 0.903444 16.3229 0.903444 16.3229 0.903444H16.2399H16.1569L16.0738 0.986459C15.9908 1.06948 15.9908 1.06948 15.9908 1.1525C15.6587 2.06575 15.2436 2.81296 14.8285 3.64319C14.5794 4.05831 14.3303 4.47343 14.0813 4.80552C13.8322 5.13761 13.6662 5.38667 13.5001 5.55272C13.3341 5.71877 13.168 5.80179 13.085 5.96783C13.002 6.05086 12.8359 6.13389 12.8359 6.05086C12.7529 6.05086 12.6699 6.05086 12.6699 5.96783C12.5869 5.88481 12.5038 5.80179 12.4208 5.71876C12.3378 5.63574 12.3378 5.46969 12.2548 5.30365C12.2548 5.1376 12.2548 4.97156 12.2548 4.88853C12.2548 4.80551 12.2548 4.55645 12.2548 4.3904C12.2548 4.14134 12.2548 3.97528 12.2548 3.89226C12.2548 3.64319 12.2548 3.31111 12.2548 2.97902C12.2548 2.64693 12.2548 2.39785 12.2548 2.2318C12.2548 2.06576 12.2548 1.81669 12.2548 1.65065C12.2548 1.40158 12.2548 1.23553 12.2548 1.1525C12.2548 1.06948 12.1718 0.903439 12.1718 0.820416C12.0887 0.737393 12.0057 0.654367 11.9227 0.571344C11.8397 0.488322 11.6736 0.488324 11.5906 0.405301C11.1755 0.322278 10.6773 0.239258 10.0962 0.239258C8.76782 0.239258 7.85456 0.322283 7.52247 0.488329C7.35643 0.571352 7.19038 0.65437 7.10736 0.820416C6.94131 0.986462 6.94131 1.06949 7.02433 1.06949C7.43944 1.15251 7.77154 1.31855 7.93759 1.56762L8.02061 1.73367C8.10364 1.8167 8.10362 1.98273 8.18664 2.2318C8.26967 2.48087 8.26967 2.72994 8.26967 3.06203C8.26967 3.56017 8.26967 4.05831 8.26967 4.3904C8.26967 4.80552 8.18664 5.05458 8.18664 5.30365C8.18664 5.55272 8.10364 5.71877 8.02061 5.80179C7.93759 5.96784 7.93758 6.05086 7.85456 6.05086C7.85456 6.05086 7.85455 6.13388 7.77153 6.13388C7.68851 6.13388 7.60549 6.21691 7.43944 6.21691C7.35642 6.21691 7.19038 6.13389 7.10736 6.05086C6.94131 5.96784 6.77526 5.80179 6.69224 5.63575C6.5262 5.4697 6.36015 5.22063 6.1941 4.88853C6.02805 4.55644 5.77897 4.22436 5.61293 3.72622L5.4469 3.39413C5.36387 3.22809 5.19783 2.89599 5.03178 2.48087C4.86574 2.06576 4.69969 1.73367 4.53364 1.31856C4.45062 1.15251 4.3676 1.06948 4.28458 0.986459H4.20155C4.20155 0.986459 4.11852 0.903444 4.0355 0.903444C3.95248 0.903444 3.86946 0.820416 3.78644 0.820416H0.797609C0.465517 0.820416 0.299474 0.903436 0.216451 0.986459L0.133423 1.06949C0.133423 1.06949 0.133423 1.15251 0.133423 1.23553C0.133423 1.31855 0.133428 1.40157 0.216451 1.56762C0.631565 2.56389 1.1297 3.56017 1.62784 4.55645C2.12598 5.4697 2.62412 6.29993 2.95621 6.88109C3.37132 7.46225 3.70341 8.04341 4.11853 8.54155C4.53364 9.03969 4.7827 9.37178 4.86573 9.53782C5.03177 9.70387 5.11479 9.78689 5.19781 9.86991L5.4469 10.119C5.61294 10.285 5.86201 10.5341 6.1941 10.7832C6.52619 11.0322 6.9413 11.2813 7.35642 11.5304C7.77153 11.7794 8.26968 11.9455 8.76781 12.1115C9.34898 12.2776 9.84711 12.3606 10.3452 12.2776H11.5906C11.8397 12.2776 12.0057 12.1946 12.1718 12.0285L12.2548 11.9455C12.2548 11.8625 12.3378 11.8625 12.3378 11.7794C12.3378 11.6964 12.3378 11.6134 12.3378 11.4474C12.3378 11.1153 12.3378 10.8662 12.4208 10.6171C12.5038 10.3681 12.5039 10.202 12.5869 10.036C12.6699 9.86992 12.7529 9.78689 12.8359 9.70387C12.919 9.62084 13.002 9.53782 13.002 9.53782H13.085C13.251 9.4548 13.5001 9.53782 13.6662 9.70387C13.9152 9.86991 14.1643 10.119 14.3303 10.3681C14.4964 10.6171 14.7455 10.8662 15.0776 11.1983C15.4097 11.5304 15.6587 11.7794 15.8248 11.8625L16.0738 12.0285C16.2399 12.1115 16.4059 12.1946 16.655 12.2776C16.9041 12.3606 17.0701 12.3606 17.2361 12.3606L20.0589 12.2776C20.308 12.2776 20.5571 12.1946 20.7231 12.1115C20.8892 12.0285 20.9722 11.9455 20.9722 11.7794C20.9722 11.6964 20.9722 11.5304 20.9722 11.4474C20.8061 11.2813 20.8061 11.1983 20.8061 11.1153Z"
                                                                    fill="#414159"/>
                                                            </svg>
                                                        </a>
                                                        <a href="#" className="header__link">
                                                            <svg className="footer_vk" width="17" height="17"
                                                                 viewBox="0 0 17 17" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M14.5808 0H2.41923C1.04615 0 0 1.04615 0 2.41923V14.5808C0 15.9538 1.04615 17 2.41923 17H14.5808C15.9538 17 17 15.9538 17 14.5808V2.41923C17 1.04615 15.9538 0 14.5808 0ZM8.5 13.6C11.3115 13.6 13.6 11.3769 13.6 8.69615C13.6 8.23846 13.5346 7.71538 13.4038 7.32308H14.8423V14.2538C14.8423 14.5808 14.5808 14.9077 14.1885 14.9077H2.81154C2.48462 14.9077 2.15769 14.6462 2.15769 14.2538V7.25769H3.66154C3.53077 7.71538 3.46539 8.17308 3.46539 8.63077C3.4 11.3769 5.68846 13.6 8.5 13.6ZM8.5 11.6385C6.66923 11.6385 5.23077 10.2 5.23077 8.43462C5.23077 6.66923 6.66923 5.23077 8.5 5.23077C10.3308 5.23077 11.7692 6.66923 11.7692 8.43462C11.7692 10.2654 10.3308 11.6385 8.5 11.6385ZM14.7769 4.64231C14.7769 5.03461 14.45 5.36154 14.0577 5.36154H12.2269C11.8346 5.36154 11.5077 5.03461 11.5077 4.64231V2.87692C11.5077 2.48462 11.8346 2.15769 12.2269 2.15769H14.0577C14.45 2.15769 14.7769 2.48462 14.7769 2.87692V4.64231Z"
                                                                    fill="#414159"/>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12 bimages">
                                            <SimpleSliderNav/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null
                }
            </>
        )
    }
}
export default Header;