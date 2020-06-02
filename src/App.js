import React, {createRef} from 'react';
import arrow from "./images/Arrow1.svg";
import './App.css';
import Header from "./Header/Header";
import img1 from "./images/icon11.svg";
import img2 from "./images/icons2.svg";
import img3 from "./images/icons12.svg";
import SimpleSlider from "./Slider/Slider";
import im1 from "./images/im1.png";
import im2 from "./images/im2.png";
import im3 from "./images/im3.png";
import im4 from "./images/im4.png";
import im5 from "./images/im5.png";
import map from "./images/map.png";
import vk from "./images/vk.svg";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.about = React.createRef();
        this.services = React.createRef();
        this.benefits = React.createRef();
        this.team = React.createRef();
        this.news = React.createRef();
        this.contacts = React.createRef();


    }
    componentDidMount() {

    }

    render() {

        return (
            <>
                <Header about={this.about} services={this.services} benefits={this.benefits} team={this.team} news={this.news}  contacts={this.contacts} />
                    <div className="main-banner">
                        <h1 className="main-banner-title">
                            <span className="main-banner-green">Casiam</span> —
                            вершина <br/>индивидуальной<br/> медицины
                        </h1>
                    </div>

                    <section ref={this.about} className="association mt-5 mb-5" id="about">
                        <div className="container">
                            <div className="row d-lg-none d-block">
                                <div className="col-12"><h2 className="wrapper_association--title mb-5">
                                    <span className="wrapper_association-green">Casiam</span> Ассоциация
                                </h2></div>
                            </div>
                            <div className="row flex-column-reverse flex-lg-row">
                                <div className="col-lg-6 col-12 mt-3">
                                    <div className="wrapper_association">
                                        <h2 className="wrapper_association--title mb-5 d-none d-lg-block">
                                            <span className="wrapper_association-green">Casiam</span> Ассоциация
                                        </h2>
                                        <p className="wrapper__association_excerpt">Медицина Казахстана нуждается в
                                            реформировании.
                                            CASIAM — компания, которая специализируется на внедрении новых подходов в
                                            сфере
                                            антивозрастной медицины, а также разработке качественных медикаментов,
                                            призванных
                                            предотвратить генетические и возрастные заболевания.
                                        </p>

                                        <p className="wrapper__association_excerpt">
                                            Миссия компании заключается в обеспечении эффективного и безопасного
                                            лечения,
                                            основанного на персональном подходе и искоренении халатного отношения врача
                                            к
                                            пациентам, ведущего к необратимым последствиям.
                                        </p>
                                        <p className="wrapper__association_excerpt">
                                            Центральная Азиатская Ассоциация/Академия Междисциплинарной АнтиВозрастной
                                            Медицины
                                            CASIAM реализует поставленные задачи, подготавливая специалистов всех
                                            направлений
                                            для работы в области Anti-age медицины и открывая клиники, где практикуются
                                            инновационные методики лечения.

                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12 mt-3">
                                    <div className="wrapper_association_bg">

                                        <div className="wp_column">
                                            <div className="wr_association_ass">

                                                <div className="wrapper_association_bg_ex">
                                                    <p className="wrapper_association_bg_ex_big">995</p>
                                                    <p className="wrapper_association_bg_ex_small">довольных
                                                        клиентов</p>
                                                </div>

                                                <div className="wrapper_association_bg_ex">
                                                    <p className="wrapper_association_bg_ex_big">13</p>
                                                    <p className="wrapper_association_bg_ex_small">клиник нового
                                                        поколения</p>
                                                </div>
                                            </div>


                                            <div className="wr_association_ass">

                                                <div className="wrapper_association_bg_ex">
                                                    <p className="wrapper_association_bg_ex_big">29</p>
                                                    <p className="wrapper_association_bg_ex_small">технологий
                                                        диагностики</p>
                                                </div>

                                                <div className="wrapper_association_bg_ex">
                                                    <p className="wrapper_association_bg_ex_big">5</p>
                                                    <p className="wrapper_association_bg_ex_small">лет практики</p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section ref={this.services} className="newExp mt-5" id="services">
                        <div className="container">

                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <h2 className="newExp--title">
                                        Casiam — это внедрение нового подхода к здоровью
                                    </h2>
                                </div>

                                <div className="col-lg-3 col-md-6 col-12">
                                    <a href="#" className="wrapper_newExp bgim_1">
                                        <div className="hover_block_dec">
                                            <p className="hover_block_dec--title">Casiam Academy</p>
                                            <p className="hover_block_dec--excerpt">Обучение специалистов всех
                                                специальностей по
                                                методике междисциплинарного подхода к каждому пациенту в направлении
                                                Anti-Age</p>
                                            <span className="arrow_neExp_new"><img className="img-fluid" src={arrow}
                                                                                   alt=""/></span>
                                        </div>
                                        <div className="wrapper__prewe">
                                            <p className="newExp_title_inder">Casiam Academy</p>
                                            <span className="arrow_neExp"><img className="img-fluid" src={arrow}
                                                                               alt=""/></span>
                                        </div>
                                    </a>
                                </div>

                                <div className="col-lg-3 col-md-6 col-12">
                                    <a href="#" className="wrapper_newExp bgim_2">
                                        <div className="hover_block_dec">
                                            <p className="hover_block_dec--title">Casiam Academy</p>
                                            <p className="hover_block_dec--excerpt">Обучение специалистов всех
                                                специальностей по
                                                методике междисциплинарного подхода к каждому пациенту в направлении
                                                Anti-Age</p>
                                            <span className="arrow_neExp_new"><img className="img-fluid" src={arrow}
                                                                                   alt=""/></span>
                                        </div>
                                        <div className="wrapper__prewe">
                                            <p className="newExp_title_inder">Casiam Academy</p>
                                            <span className="arrow_neExp"><img className="img-fluid" src={arrow}
                                                                               alt=""/></span>
                                        </div>
                                    </a>
                                </div>

                            </div>


                            <div className="row mt-3 mb-3">
                                <div className="col-lg-3 col-md-6 col-12">
                                    <a href="#" className="wrapper_newExp bgim_3">
                                        <div className="hover_block_dec">
                                            <p className="hover_block_dec--title">Casiam Academy</p>
                                            <p className="hover_block_dec--excerpt">Обучение специалистов всех
                                                специальностей по
                                                методике междисциплинарного подхода к каждому пациенту в направлении
                                                Anti-Age</p>
                                            <span className="arrow_neExp_new"><img className="img-fluid" src={arrow}
                                                                                   alt=""/></span>
                                        </div>
                                        <div className="wrapper__prewe">
                                            <p className="newExp_title_inder">Casiam Academy</p>
                                            <span className="arrow_neExp"><img className="img-fluid" src={arrow}
                                                                               alt=""/></span>
                                        </div>
                                    </a>
                                </div>

                                <div className="col-lg-3 col-md-6 col-12">
                                    <a href="#" className="wrapper_newExp bgim_4">
                                        <div className="hover_block_dec">
                                            <p className="hover_block_dec--title">Casiam Academy</p>
                                            <p className="hover_block_dec--excerpt">Обучение специалистов всех
                                                специальностей по
                                                методике междисциплинарного подхода к каждому пациенту в направлении
                                                Anti-Age</p>
                                            <span className="arrow_neExp_new"><img className="img-fluid" src={arrow}
                                                                                   alt=""/></span>
                                        </div>
                                        <div className="wrapper__prewe">
                                            <p className="newExp_title_inder">Casiam Academy</p>
                                            <span className="arrow_neExp"><img className="img-fluid" src={arrow}
                                                                               alt=""/></span>
                                        </div>
                                    </a>
                                </div>

                                <div className="col-lg-3 col-md-6 col-12">
                                    <a href="#" className="wrapper_newExp bgim_5">
                                        <div className="hover_block_dec">
                                            <p className="hover_block_dec--title">Casiam Academy</p>
                                            <p className="hover_block_dec--excerpt">Обучение специалистов всех
                                                специальностей по
                                                методике междисциплинарного подхода к каждому пациенту в направлении
                                                Anti-Age</p>
                                            <span className="arrow_neExp_new"><img className="img-fluid" src={arrow}
                                                                                   alt=""/></span>
                                        </div>
                                        <div className="wrapper__prewe">
                                            <p className="newExp_title_inder">Casiam Academy</p>
                                            <span className="arrow_neExp"><img className="img-fluid" src={arrow}
                                                                               alt=""/></span>
                                        </div>
                                    </a>
                                </div>

                                <div className="col-lg-3 col-md-6 col-12">
                                    <a href="#" className="wrapper_newExp bgim_6">
                                        <div className="hover_block_dec">
                                            <p className="hover_block_dec--title">Casiam Academy</p>
                                            <p className="hover_block_dec--excerpt">Обучение специалистов всех
                                                специальностей по
                                                методике междисциплинарного подхода к каждому пациенту в направлении
                                                Anti-Age</p>
                                            <span className="arrow_neExp_new"><img className="img-fluid" src={arrow}
                                                                                   alt=""/></span>
                                        </div>
                                        <div className="wrapper__prewe">
                                            <p className="newExp_title_inder">Casiam Academy</p>
                                            <span className="arrow_neExp"><img className="img-fluid" src={arrow}
                                                                               alt=""/></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section ref={this.benefits} className="section--info mt-5 mb-5" id="benefits">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-4 col-12 mt-3">
                                    <div className="wrapper_section--info">
                                        <div className="d-flex align-items-center">
                                            <span className="mr-3"><img src={img1} alt=""/></span>
                                            <span className="section--info-title">Индивидуальный <br/>подход</span>
                                        </div>
                                        <p className="mt-5">Персонализированный подход к лечению основан на уникальном
                                            молекулярном и
                                            генетический профиле каждого пациента. Выбор наиболее эффективных и
                                            безопасных
                                            стратегий для каждого пациента.</p>
                                    </div>
                                </div>


                                <div className="col-lg-4 col-12 mt-3">
                                    <div className="wrapper_section--info">
                                        <div className="d-flex align-items-center">
                                            <span className="mr-3"><img src={img2} alt=""/></span>
                                            <span className="section--info-title">Доступность <br/> лечения</span>
                                        </div>
                                        <p className="mt-5">Улучшение состояния здоровья и выздоровление от хронических
                                            заболеваний и недугов на стадии появления должны быть доступны всем
                                            категориям
                                            населения.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-12 mt-3">
                                    <div className="wrapper_section--info">
                                        <div className="d-flex align-items-center">
                                            <span className="mr-3"><img src={img3} alt=""/></span>
                                            <span className="section--info-title">Уникальные <br/>методики</span>
                                        </div>
                                        <p className="mt-5">Casiam внедряет инновационные методики лечения и
                                            лабораторной и
                                            аппаратной диагностики, основанные на генетических исследованиях.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>


                    <section className="section--spec">
                        <div className="container">
                            <div className="row d-flex d-lg-none">
                                <div className="col-12">
                                    <h2 className="section--spec--title">
                                        Наши специалисты готовы помочь вам
                                        в любое время
                                    </h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-12 mt-3">
                                    <h2 className="section--spec--title d-none d-lg-block">
                                        Наши специалисты готовы помочь вам
                                        в любое время
                                    </h2>
                                    <p className="section--spec--excerpt">Casiam — это сочетание традиционных
                                        медицинских подходов и инновационных исследований,
                                        направленных на предотвращение генетических заболеваний у детей и улучшения
                                        качества
                                        жизни взрослых. Мы комплексно и индивидуально подходим к состоянию здоровья
                                        каждого
                                        пациента, что позволяет достигать положительных результатов лечения за короткий
                                        промежуток времени.</p>
                                    <a href="#" className="section--spec--button">Подробнее</a>
                                </div>

                                <div className="col-md-6 col-12 mt-3 d-none d-md-block">
                                    <h2 className="section--spec--title-two">
                                        Информативность.<br/>
                                        Эффективность.<br/>
                                        Сотрудничество.
                                    </h2>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section className="section-health mt-5 mb-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="section-health--title">Доверяйте своё <br/>здоровье специалистам</h2>
                                </div>
                            </div>

                            <div className="row mt-5">

                                <div className="col-lg-3 col-md-6 mt-2 mb-2 col-12 custom__health_p">
                                    <div className="wrapper-card-health">
                                        <p className="section-health--title-card">Индивидуальные методики лечения</p>
                                        <p className="section-health--title-excerpt">Курс лечения направлен на
                                            восстановление
                                            механизмов регенерации и репарации тканей
                                            организма в целом. Применение технологий Anti-Age медицины.</p>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 mt-2 mb-2 col-12 custom__health_p">
                                    <div className="wrapper-card-health">
                                        <p className="section-health--title-card">Информационная поддержка</p>
                                        <p className="section-health--title-excerpt">Мы осуществляем комплексную
                                            информационную
                                            поддержку пациентов о состоянии здоровья и возможностях лечения. Вы всегда в
                                            курсе
                                            инноваций и новостей медицины.</p>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 mt-1 mb-2 col-12 custom__health_p">
                                    <div className="wrapper-card-health">
                                        <p className="section-health--title-card">Индивидуальный подбор препаратов</p>
                                        <p className="section-health--title-excerpt">Анализы ДНК и другие обследования
                                            показывают нехватку в организме определенных веществ. Назначение препаратов
                                            осуществляется на основе результатов Ваших анализов.</p>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 mt-1 mb-2 col-12 custom__health_p ">
                                    <div className="button_on custom__health_p_img">
                                        <a href="#" className="section--spec--button">Подробнее</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section className="section--realise mt-5 mb-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="section-health--title">Для реализации своих целей компания
                                        CASIAM <br/>развивает
                                        следующие направления</h2>
                                </div>
                            </div>

                            <div className="row mt-5 ">

                                <div className="col-lg-4 col-md-6 col-12 bgi--grey">
                                    <p className="section--realise-excerpt">
                                        Искуственный интеллект исключающий человеческий фактор и точно расчитывающий
                                        дозы
                                        препаратов для каждого пациента, минимизирующий побочные эффекты и сокращающий
                                        затраты
                                        средств для подбора лекарств.
                                    </p>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12 bgi--green bgi--grey_mobile">
                                    <p className="section--realise-excerpt">
                                        Внедрение на территорию Казахстана клиник нового поколения с собственным полным
                                        циклом
                                        оказания услуг, своей рецептурной аптекой
                                    </p>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12 bgi--grey">
                                    <p className="section--realise-excerpt">
                                        Обучение медиков междисциплинарному подходу к каждому пациенту индивидуально,
                                        используя
                                        методику 5Р-медицины
                                    </p>
                                </div>


                                <div className="col-lg-4 col-md-6 col-12 bgi--grey">
                                    <p className="section--realise-excerpt">
                                        Индивидуальный подход в медицине, обеспечивающий эффективность лечения в каждом
                                        отдельном случае
                                    </p>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12 bgi--grey">
                                    <p className="section--realise-excerpt">
                                        Выпуск новых, качественных аналогов уже существующих препаратов, а также
                                        разработка инновационных препаратов в области антивозрастной медицины
                                    </p>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12 bgi--grey">
                                    <p className="section--realise-excerpt">
                                        Внедрение новых методов диагностики лабораторной и аппаратной медицины
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="section--value section--value_pad">
                        <div className="container">

                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    <h2 className="section--value--title">
                                        Самое ценное для CASIAM — возможность оказания реальной помощи тем, кто нам
                                        доверяет
                                    </h2>
                                </div>

                                <div className="col-lg-6 col-12 mobile_top_slider">
                                    <SimpleSlider/>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section ref={this.team} className="section--new--as mt-5 mb-5" id="contacts">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="section--new--as-title">Члены ассоциации</h2>
                                </div>
                            </div>

                            <div className="row no-gutters mt-5">
                                <div className="col-md-4 col-12">
                                    <div className="wrapper_section--new--as img_photo_1">
                                        <div className="wrapper_section--new--as-title">
                                            Динара Жакупова
                                        </div>
                                        <div className="wrapper_section--new--as-excerpt">
                                            Основатель CASIAM
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 col-12">
                                    <div className="wrapper_section--new--as img_photo_2">
                                        <div className="wrapper_section--new--as-title">
                                            Сергей Листопад
                                        </div>
                                        <div className="wrapper_section--new--as-excerpt">
                                            Руководитель CASIAM FARM
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 col-12">
                                    <div className="wrapper_section--new--as img_photo_3">
                                        <div className="wrapper_section--new--as-title">
                                            Евгений Вронский
                                        </div>
                                        <div className="wrapper_section--new--as-excerpt">
                                            Генетик
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>


                    <section ref={this.news} className="section--new--grey mt-5 pb-5" id="news">
                        <div className="container">
                            <div className="row pt-5">
                                <div className="col-12">
                                    <h2 className="section--new--as-title">Новости Casiam</h2>
                                </div>
                            </div>

                            <div className="row mt-3">

                                <div className="col-lg-4 col-md-6 col-12 mt-4">
                                    <a href="#" className="wrapper-card-news">
                                        <img src={im1} className="img-fluid" alt=""/>
                                        <div className="wrapper-card-new">
                                            <p className="wrapper-card-new--title">Новая профилактика онкологических
                                                заболеваний
                                                от Casiam </p>
                                            <p className="wrapper-card-new-excerpt">Результаты молекулярного
                                                исследования
                                                помогут врачу-онкологу выбрать наиболее
                                                подходящий план лечения. </p>
                                        </div>
                                    </a>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12 mt-4">
                                    <a href="#" className="wrapper-card-news">
                                        <img src={im2} className="img-fluid" alt=""/>
                                        <div className="wrapper-card-new">
                                            <p className="wrapper-card-new--title">Сбор информации</p>
                                            <p className="wrapper-card-new-excerpt">Врач-онколог на консультации перед
                                                тестом
                                                собирает всю важную клиническую информацию и получает образцы опухоли —
                                                это
                                                могут быть стандартные парафиновые блоки и гистологические стекла </p>
                                        </div>
                                    </a>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12 mt-4">
                                    <a href="#" className="wrapper-card-news">
                                        <img src={im1} className="img-fluid" alt=""/>
                                        <div className="wrapper-card-new">
                                            <p className="wrapper-card-new--title">Результат исследования</p>
                                            <p className="wrapper-card-new-excerpt">Детальные результаты всех
                                                выполненных
                                                исследований на русском и английском языках, что особенно важно для
                                                лечения
                                                или
                                                консультирования за рубежом </p>
                                        </div>
                                    </a>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12 mt-4">
                                    <a href="#" className="wrapper-card-news">
                                        <img src={im3} className="img-fluid" alt=""/>
                                        <div className="wrapper-card-new">
                                            <p className="wrapper-card-new--title">Навигатор по
                                                клиническим исследованиям </p>
                                            <p className="wrapper-card-new-excerpt">Результаты молекулярного
                                                исследования
                                                помогут врачу-онкологу выбрать наиболее подходящий план лечения. </p>
                                        </div>
                                    </a>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12 mt-4">
                                    <a href="#" className="wrapper-card-news">
                                        <img src={im4} className="img-fluid" alt=""/>
                                        <div className="wrapper-card-new">
                                            <p className="wrapper-card-new--title">Как проводится тестирование ?</p>
                                            <p className="wrapper-card-new-excerpt">На мой взгляд, очень важно знать,
                                                что
                                                может
                                                ожидать тебя и, самое главное, ожидать в дальнейшем твоих детей. К
                                                примеру,
                                                как
                                                лучше именно для тебя восстанавливаться после заняти...</p>
                                        </div>
                                    </a>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12 mt-4">
                                    <a href="#" className="wrapper-card-news">
                                        <img src={im5} className="img-fluid" alt=""/>
                                        <div className="wrapper-card-new">
                                            <p className="wrapper-card-new--title">Обработка результатов</p>
                                            <p className="wrapper-card-new-excerpt">Результаты молекулярного
                                                исследования
                                                помогут врачу-онкологу выбрать наиболее подходящий план лечения. </p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="col-12 mt-5">
                                <div className="button_on text-center">
                                    <a href="#" className="section--spec--button color_b">Больше новостей</a>
                                </div>
                            </div>

                        </div>
                    </section>


                    <footer ref={this.contacts} className="footer" id="">
                        <div className="container-fluid p-0">
                            <div className="row no-gutters">
                                <div className="col-lg-5 col-12">
                                    <div className="wrapper_footer">
                                        <p className="footer-title">Наши контакты</p>
                                        <p className="footer-number">+7 (780) 008 41 44</p>
                                        <p className="footer-excerpt">Будем рады видеть вас в нашем офисе
                                            по адресу:</p>
                                        <p className="footer-excerpt-white">Казахстан, г. Нур-Султан, район Алматы,
                                            Жилой
                                            массив Юго-Восток (правая сторона), ул. Сулутебе, д. 3</p>
                                        <div className="hr"/>

                                        <p className="footer-excerpt-white">Будьте вкурсе новостей Casiam</p>
                                        <form className="">
                                            <input type="text" name="email" className="input mt-3 mb-3"
                                                   placeholder="Адрес электронной почты"/>
                                            <button type="submit" className="section--spec--button_submit mt-5">Больше
                                                новостей
                                            </button>
                                        </form>

                                        <div className="hr"/>

                                        <div className="d-flex align-items-center">
                                            <div className="copy mr-3">© 2020 Casiam.</div>
                                            <div className="footer-social">
                                                <a href="#" className="footer_link">
                                                    <svg className="footer_vk" width="17" height="17"
                                                         viewBox="0 0 17 17"
                                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M17 2.81865C17 1.32124 15.6788 0 14.1813 0H2.81865C1.32124 0 0 1.32124 0 2.81865V14.1813C0 15.6787 1.32124 17 2.81865 17H8.54404V10.5699H6.43005V7.7513H8.54404V6.60622C8.54404 4.66839 9.95337 2.99481 11.715 2.99481H14.0052V5.81346H11.715C11.4508 5.81346 11.1865 6.07772 11.1865 6.60622V7.7513H14.0052V10.5699H11.1865V17H14.1813C15.6788 17 17 15.6787 17 14.1813V2.81865Z"
                                                            fill="#414159"/>
                                                    </svg>

                                                </a>
                                                <a href="#" className="footer_link">
                                                    <svg className="footer_vk" width="21" height="13"
                                                         viewBox="0 0 21 13"
                                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M20.8061 11.1153C20.8061 11.0322 20.7231 11.0322 20.7231 10.9492C20.391 10.285 19.6438 9.4548 18.6475 8.54155C18.1494 8.12644 17.9003 7.79434 17.7343 7.62829C17.4852 7.2962 17.4852 7.04714 17.5683 6.71505C17.6513 6.46598 17.9834 6.05086 18.5645 5.30365C18.8966 4.88853 19.0626 4.63947 19.3117 4.3904C20.5571 2.72995 21.1382 1.65064 20.9722 1.1525L20.8892 1.06949C20.8061 0.986464 20.7231 0.903444 20.5571 0.903444C20.391 0.820421 20.142 0.820421 19.8929 0.903444H16.738C16.655 0.903444 16.655 0.903444 16.4889 0.903444C16.4059 0.903444 16.3229 0.903444 16.3229 0.903444H16.2399H16.1569L16.0738 0.986459C15.9908 1.06948 15.9908 1.06948 15.9908 1.1525C15.6587 2.06575 15.2436 2.81296 14.8285 3.64319C14.5794 4.05831 14.3303 4.47343 14.0813 4.80552C13.8322 5.13761 13.6662 5.38667 13.5001 5.55272C13.3341 5.71877 13.168 5.80179 13.085 5.96783C13.002 6.05086 12.8359 6.13389 12.8359 6.05086C12.7529 6.05086 12.6699 6.05086 12.6699 5.96783C12.5869 5.88481 12.5038 5.80179 12.4208 5.71876C12.3378 5.63574 12.3378 5.46969 12.2548 5.30365C12.2548 5.1376 12.2548 4.97156 12.2548 4.88853C12.2548 4.80551 12.2548 4.55645 12.2548 4.3904C12.2548 4.14134 12.2548 3.97528 12.2548 3.89226C12.2548 3.64319 12.2548 3.31111 12.2548 2.97902C12.2548 2.64693 12.2548 2.39785 12.2548 2.2318C12.2548 2.06576 12.2548 1.81669 12.2548 1.65065C12.2548 1.40158 12.2548 1.23553 12.2548 1.1525C12.2548 1.06948 12.1718 0.903439 12.1718 0.820416C12.0887 0.737393 12.0057 0.654367 11.9227 0.571344C11.8397 0.488322 11.6736 0.488324 11.5906 0.405301C11.1755 0.322278 10.6773 0.239258 10.0962 0.239258C8.76782 0.239258 7.85456 0.322283 7.52247 0.488329C7.35643 0.571352 7.19038 0.65437 7.10736 0.820416C6.94131 0.986462 6.94131 1.06949 7.02433 1.06949C7.43944 1.15251 7.77154 1.31855 7.93759 1.56762L8.02061 1.73367C8.10364 1.8167 8.10362 1.98273 8.18664 2.2318C8.26967 2.48087 8.26967 2.72994 8.26967 3.06203C8.26967 3.56017 8.26967 4.05831 8.26967 4.3904C8.26967 4.80552 8.18664 5.05458 8.18664 5.30365C8.18664 5.55272 8.10364 5.71877 8.02061 5.80179C7.93759 5.96784 7.93758 6.05086 7.85456 6.05086C7.85456 6.05086 7.85455 6.13388 7.77153 6.13388C7.68851 6.13388 7.60549 6.21691 7.43944 6.21691C7.35642 6.21691 7.19038 6.13389 7.10736 6.05086C6.94131 5.96784 6.77526 5.80179 6.69224 5.63575C6.5262 5.4697 6.36015 5.22063 6.1941 4.88853C6.02805 4.55644 5.77897 4.22436 5.61293 3.72622L5.4469 3.39413C5.36387 3.22809 5.19783 2.89599 5.03178 2.48087C4.86574 2.06576 4.69969 1.73367 4.53364 1.31856C4.45062 1.15251 4.3676 1.06948 4.28458 0.986459H4.20155C4.20155 0.986459 4.11852 0.903444 4.0355 0.903444C3.95248 0.903444 3.86946 0.820416 3.78644 0.820416H0.797609C0.465517 0.820416 0.299474 0.903436 0.216451 0.986459L0.133423 1.06949C0.133423 1.06949 0.133423 1.15251 0.133423 1.23553C0.133423 1.31855 0.133428 1.40157 0.216451 1.56762C0.631565 2.56389 1.1297 3.56017 1.62784 4.55645C2.12598 5.4697 2.62412 6.29993 2.95621 6.88109C3.37132 7.46225 3.70341 8.04341 4.11853 8.54155C4.53364 9.03969 4.7827 9.37178 4.86573 9.53782C5.03177 9.70387 5.11479 9.78689 5.19781 9.86991L5.4469 10.119C5.61294 10.285 5.86201 10.5341 6.1941 10.7832C6.52619 11.0322 6.9413 11.2813 7.35642 11.5304C7.77153 11.7794 8.26968 11.9455 8.76781 12.1115C9.34898 12.2776 9.84711 12.3606 10.3452 12.2776H11.5906C11.8397 12.2776 12.0057 12.1946 12.1718 12.0285L12.2548 11.9455C12.2548 11.8625 12.3378 11.8625 12.3378 11.7794C12.3378 11.6964 12.3378 11.6134 12.3378 11.4474C12.3378 11.1153 12.3378 10.8662 12.4208 10.6171C12.5038 10.3681 12.5039 10.202 12.5869 10.036C12.6699 9.86992 12.7529 9.78689 12.8359 9.70387C12.919 9.62084 13.002 9.53782 13.002 9.53782H13.085C13.251 9.4548 13.5001 9.53782 13.6662 9.70387C13.9152 9.86991 14.1643 10.119 14.3303 10.3681C14.4964 10.6171 14.7455 10.8662 15.0776 11.1983C15.4097 11.5304 15.6587 11.7794 15.8248 11.8625L16.0738 12.0285C16.2399 12.1115 16.4059 12.1946 16.655 12.2776C16.9041 12.3606 17.0701 12.3606 17.2361 12.3606L20.0589 12.2776C20.308 12.2776 20.5571 12.1946 20.7231 12.1115C20.8892 12.0285 20.9722 11.9455 20.9722 11.7794C20.9722 11.6964 20.9722 11.5304 20.9722 11.4474C20.8061 11.2813 20.8061 11.1983 20.8061 11.1153Z"
                                                            fill="#414159"/>
                                                    </svg>
                                                </a>
                                                <a href="#" className="footer_link">
                                                    <svg className="footer_vk" width="17" height="17"
                                                         viewBox="0 0 17 17"
                                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M14.5808 0H2.41923C1.04615 0 0 1.04615 0 2.41923V14.5808C0 15.9538 1.04615 17 2.41923 17H14.5808C15.9538 17 17 15.9538 17 14.5808V2.41923C17 1.04615 15.9538 0 14.5808 0ZM8.5 13.6C11.3115 13.6 13.6 11.3769 13.6 8.69615C13.6 8.23846 13.5346 7.71538 13.4038 7.32308H14.8423V14.2538C14.8423 14.5808 14.5808 14.9077 14.1885 14.9077H2.81154C2.48462 14.9077 2.15769 14.6462 2.15769 14.2538V7.25769H3.66154C3.53077 7.71538 3.46539 8.17308 3.46539 8.63077C3.4 11.3769 5.68846 13.6 8.5 13.6ZM8.5 11.6385C6.66923 11.6385 5.23077 10.2 5.23077 8.43462C5.23077 6.66923 6.66923 5.23077 8.5 5.23077C10.3308 5.23077 11.7692 6.66923 11.7692 8.43462C11.7692 10.2654 10.3308 11.6385 8.5 11.6385ZM14.7769 4.64231C14.7769 5.03461 14.45 5.36154 14.0577 5.36154H12.2269C11.8346 5.36154 11.5077 5.03461 11.5077 4.64231V2.87692C11.5077 2.48462 11.8346 2.15769 12.2269 2.15769H14.0577C14.45 2.15769 14.7769 2.48462 14.7769 2.87692V4.64231Z"
                                                            fill="#414159"/>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-12">
                                    <img src={map} className="footer_img" alt=""/>
                                </div>
                            </div>
                        </div>
                    </footer>

            </>
        );
    }
}

export default App;
