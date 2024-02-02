import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>name for web cite </span>and logo</h3>
                            <p></p>
                            
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/Home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/HandiWork">HandiWork</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/HandMAde">HandMade</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/About"  >About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/Contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>copyright-2024 @ team RBK</p>
            </div>
        </>
    )
}

export default Footer