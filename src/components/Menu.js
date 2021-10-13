import React from 'react'


export default () => {
    return (
        <nav className="menu">
            <div className="menu__item">
                <a className="menu__item-link menu__item-link_var">Ghent based</a>
                <img className="menu__item-img" src="img/1.jpg" alt="Some image" />
                <div className="marquee">

                    <div className="pt-10"></div>
                    <div className="marquee__inner" aria-hidden="true">
                        <span>Ghent based</span>
                        <span>Ghent based</span>
                        <span>Ghent based</span>
                        <span>Ghent based</span>
                    </div>
                </div>
            </div>
            <div className="menu__item">
                <a className="menu__item-link menu__item-link_var run">Digital</a>
                <img className="menu__item-img" src="img/2.jpg" alt="Some image" />
                <div className="marquee">
                    <div className="marquee__inner" aria-hidden="true">
                        <span>Digital</span>
                        <span>Digital</span>
                        <span>Digital</span>
                        <span>Digital</span>
                    </div>
                </div>
            </div>
            <div className="menu__item">
                <a className="menu__item-link menu__item-link_var">Studio Studio</a>
                <img className="menu__item-img" src="img/3.jpg" alt="Some image" />
                <div className="marquee">
                    <div className="marquee__inner" aria-hidden="true">
                        <span>Studio Studio</span>
                        <span>Studio Studio</span>
                        <span>Studio Studio</span>
                        <span>Studio Studio</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}