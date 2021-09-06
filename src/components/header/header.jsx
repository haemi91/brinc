import React, { useState } from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import './header.scss';
import Modal from '../popup/popup';

const gnbList = ["Dashboard","Swap","Stake","Analytics"]

const subMenuList = [
    {
        image: require("../../media/icons/ico-frame-about.svg").default,
        name: "About us"
    },
    {
        image: require("../../media/icons/ico-frame-text.svg").default,
        name: "Documentation"
    },
    {
        image: require("../../media/icons/ico-frame-code.svg").default,
        name: "Code"
    },
    {
        image: require("../../media/icons/ico-frame-Discord.svg").default,
        name: "Discord"
    },
    {
        image: require("../../media/icons/ico-frame-user.svg").default,
        name: "Referral program"
    }
]

function Header(){
    // header connect wallet popup event
    const [ modalOpen, setModalOpen  ] = useState(false);
    const openModal = () => {setModalOpen(true);}
    const closeModal = () => {setModalOpen(false);}
    
    //header setting event
    const subSelectArea = ("sub__select__area");
    const [state, setState] = useState(subSelectArea);
    const seconSelectItemtoggle = () => {
        setState(state === subSelectArea ? subSelectArea + " show" : subSelectArea);
    }
    const seconSelectItemLeave = () => {
        setState(state === subSelectArea + " show" ? subSelectArea : "");
    }
    
    return <BrowserRouter>
        <header className="header">
            <h1 className="header__logo">
                <Link to="/" className="header__logo__link">
                    <img src={require("../../media/icons/ico-Logo.svg").default} alt="logo icon"/>
                </Link>
            </h1>
            <nav className="gnb__area">
                <ul className="gnb">
                    {gnbList.map((element, index) => {
                        return <li className="gnb__item" key={index}><Link to="/" className="gnb__item__link">{element}</Link></li>
                    })}
                </ul>
            </nav>
            <ul className="select__area">
                <li className="select__item select__item__wallet">
                    <button type="button" className="tr__menu btn__wallet" onClick={ openModal }>
                        <span className="svg__wrap">
                            <img src={require("../../media/icons/ico-wallet.svg").default} alt="Connect wallet"/>
                        </span>
                        <span className="txt">Connect wallet</span>
                    </button>
                    <Modal open={ modalOpen } close={ closeModal } header="Connect wallet">
                        <ul id="select__menu__box" className="select__menu__box">
                            <li className="select__menu__list">
                                <div className="menu__list__box">
                                    <span className="select__ico"><img src={require("../../media/icons/ico-fox.svg").default} alt="Metamask"/></span>
                                    <span className="select__tit">Metamask</span>
                                </div>
                            </li>
                            <li className="select__menu__list">
                                <div className="menu__list__box">
                                    <span className="select__ico"><img src={require("../../media/icons/ico-layer2-2.svg").default} alt="Portis"/></span>
                                    <span className="select__tit">Portis</span>
                                </div>
                            </li>
                            <li className="select__menu__list">
                                <div className="menu__list__box">
                                    <span className="select__ico"><img src={require("../../media/icons/ico-frame-60.svg").default} alt="Ledger"/></span>
                                    <span className="select__tit">Ledger</span>
                                </div>
                            </li>
                        </ul>
                    </Modal>
                </li>
                <li className="select__item secon__select__item" onClick={seconSelectItemtoggle}>
                    <span className="tr__menu svg__wrap">
                        <img src={require("../../media/icons/ico-more-vertical.svg").default} alt=""/>
                    </span>
                    <ul className={`${state}`} onMouseLeave ={seconSelectItemLeave}>
                        {subMenuList.map(({image, name, index})=>{
                            return <li className="sub__select__item" key={index}>
                                <Link to="/" className="sub__select__link">
                                    <span className="svg__wrap"><img src={image} alt={name}/></span>
                                    <span className="sub__txt">{name}</span>
                                </Link>
                            </li>
                        })}
                    </ul>
                </li>
            </ul>
        </header>
    </BrowserRouter>
}

export default Header;
