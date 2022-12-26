import React from "react";
import './index.css';
import imageIrit from './img/irit-icon.jpg';
import imageGyk from './img/guk-icon.png'
import { Link } from "react-router-dom";

function App() {
    return (
        <div className="container">
            <div className="search flex">
                {/* <button className="btn-menu btn-reset"></button> */}
                <div className="searc-string flex">
                    <input className="input-reset searc-string-input" type="text" name="input-point" id="" placeholder="Аудитория или название места"/>
                </div>
            </div>
            {/* <div className="map-main-page">
                <div className="map-main-title-div flex">
                    <h2 className="main-title">Корпуса</h2>
                    <a className="link-all-map" href='https://yandex.ru/maps/54/yekaterinburg/?ll=60.597465%2C56.838011&z=12'>все</a>
                </div>
                <img className="" src={mapMain} alt=""/>
            </div> */}
            <div className="institutions">
                <h2 className="main-title">Институты</h2>
                <ul className="institutions-list list-reset flex">
                    <li className="institutions-list-item flex">
                        <Link to="/guk">
                            <button className="link-irit btn-reset flex">
                                <img className="institutions-icon border-reset" src={imageGyk} alt=""/>
                                <p className="institution-name">ГУК</p>
                            </button>
                        </Link>
                    </li>
                    <li className="institutions-list-item flex">
                        <Link to="/irit">
                            <button className="link-irit btn-reset flex">
                                <img className="institutions-icon" src={imageIrit} alt=""/>
                                <p className="institution-name">ИРИТ-РТФ</p>
                            </button>
                        </Link>
                    </li>
                    <li className="institutions-list-item flex">
                        <Link to="">
                            <button className="link-irit btn-reset flex">
                                <img className="institutions-icon" src={imageIrit} alt="" />
                                <p className="institution-name">ИНМТ</p>
                            </button>
                        </Link>
                    </li>
                    <li className="institutions-list-item flex">
                        <Link to="">
                            <button className="link-irit btn-reset flex">
                                <img class="institutions-icon" src={imageIrit} alt=""/>
                                <p class="institution-name">ФТИ</p>
                            </button>
                        </Link>
                    </li>
                    <li className="institutions-list-item flex">
                        <Link to="">
                            <button className="link-irit btn-reset flex">
                                <img className="institutions-icon" src={imageIrit} alt=""/>
                                <p className="institution-name">ИНЭУ</p>
                            </button>
                        </Link>
                    </li>
                    <li className="institutions-list-item flex">
                        <Link to="">
                            <button className="link-irit btn-reset flex">
                                <img className="institutions-icon" src={imageIrit} alt=""/>
                                <p className="institution-name">ИФКСиМП</p>
                            </button>
                        </Link>
                    </li>
                    <li className="institutions-list-item flex">
                        <Link to="">
                            <button className="link-irit btn-reset flex">
                                <img className="institutions-icon" src={imageIrit} alt=""/>
                                <p className="institution-name">ИЕНиМ</p>
                            </button>
                        </Link>
                    </li>
                    <li className="institutions-list-item flex">
                        <Link to="">
                            <button className="link-irit btn-reset flex">
                                <img className="institutions-icon" src={imageIrit} alt=""/>
                                <p className="institution-name">ИСА</p>
                            </button>
                        </Link>
                    </li>
                    <li className="institutions-list-item flex">
                        <Link to="">
                            <button className="link-irit btn-reset flex">
                                <img className="institutions-icon" src={imageIrit} alt=""/>
                                <p className="institution-name">ИнФО</p>
                            </button>
                        </Link>
                    </li>
                    <li className="institutions-list-item flex">
                        <Link to="">
                            <button className="link-irit btn-reset flex">
                                <img className="institutions-icon" src={imageIrit} alt=""/>
                                <p className="institution-name">УГИ</p>
                            </button>
                        </Link>
                    </li>
                    <li className="institutions-list-item flex">
                        <Link to="">
                            <button className="link-irit btn-reset flex">
                                <img className="institutions-icon" src={imageIrit} alt=""/>
                                <p className="institution-name">УралЭНИН</p>
                            </button>
                        </Link>
                    </li>
                    <li className="institutions-list-item flex">
                        <Link to="">
                            <button className="link-irit btn-reset flex">
                                <img className="institutions-icon" src={imageIrit} alt=""/>
                                <p className="institution-name">ХТИ</p>
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="map-main-page">
                <button className='map-btn btn-reset'>
                    <a href="https://yandex.ru/maps/-/CCUr40FlHB">
                        <p className='map-btn-text'>Карты</p>
                    </a>
                </button>
            </div>
        </div>
    );
}

export default App;
