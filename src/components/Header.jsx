import React from 'react';

import {
    Row, Col, Button, Navbar, Nav, NavbarBrand, NavLink, NavItem
} from 'reactstrap';

const AVATAR = 'https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg';

export function Header() {
    return (
        <header>
            <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{ height: 60 }}>

                <Row noGutters className="position-relative w-100 align-items-center">

                    <Col className="d-none d-lg-flex justify-content-start">
                        <NavbarBrand className="d-inline-block p-0" href="/">
                            <div className="logo"></div>
                        </NavbarBrand>

                        <Nav className="mrx-auto" navbar>

                            <NavItem className="d-flex align-items-center">
                                <NavLink className="font-weight-bold" href="/">Главная</NavLink>
                            </NavItem>

                            <NavItem className="d-flex align-items-center">
                                <div className="nav-divider"></div>
                            </NavItem>

                            <NavItem className="d-flex align-items-center active">
                                <NavLink className="font-weight-bold" href="/">Анализ флюорограмм</NavLink>
                            </NavItem>

                        </Nav>
                    </Col>

                    <Col className="d-flex justify-content-xs-start justify-content-lg-center">
                    </Col>

                    <Col className="d-none d-lg-flex align-items-center justify-content-end">

                        <Nav className="mrx-auto" navbar>
                            <NavLink className="font-weight-bold px-2" href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="36" height="36" viewBox="0 0 16 16">
                                    <defs>
                                        <path id="a" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.387 6.452a3.613 3.613 0 1 1 7.226 0 3.613 3.613 0 0 1-7.226 0zm8.658 5.57c-2.591 3.238-7.496 3.242-10.09 0a3.087 3.087 0 0 1 2.206-.925h.588c1.42.688 3.08.69 4.502 0h.588c.864 0 1.645.354 2.206.924z" />
                                    </defs>
                                    <g fill="none" fillRule="evenodd">
                                        <mask id="b" fill="#fff">
                                            <use xlinkHref="#a"/>
                                    </mask>
                                        <use fill="#CFD8DC" fillRule="nonzero" xlinkHref="#a" />
                                        <g fill="#CFD8DC" mask="url(#b)">
                                            <path d="M0 0h16v16H0z" />
                                        </g>
                                    </g>
                                </svg>
                            </NavLink>
                        </Nav>

                        <Button type="submit" className="font-weight-bold py-0 mx-2" color="primary" outline>Выход</Button>

                    </Col>

                </Row>

            </Navbar>
        </header>
    );
}
