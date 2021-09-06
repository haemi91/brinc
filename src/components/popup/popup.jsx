import React from 'react';
import './popup.scss';

const Modal = ( props ) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div id="popup__box" className={ open ? 'show-modal' : 'modal' }>
            <div id="pop__wrap" className="pop__sm pop__wrap">
                { open ? (  
                    <section>
                        <header className="pop__head">
                            <h1 className="tit">{header}</h1>
                            <button type="button" className="pop__close" onClick={close}>
                                <span className="close"><img src={require("../../media/icons/ico-close.svg").default} alt=""/></span>
                            </button>
                        </header>
                        <main className="pop__body">
                            {props.children}
                        </main>
                        <footer className="pop__foot">
                            <div className="btn__connect__box off">
                                <button type="button" className="btn__full ">
                                    <span className="pop__btn__ico"><img src={require("../../media/icons/ico-wallet.svg").default} alt=""/></span>
                                    <span className="txt">Connect wallet</span>
                                </button>
                            </div>
                        </footer>
                    </section>
                ) : null }
            </div>
        </div>
    )
}

export default Modal