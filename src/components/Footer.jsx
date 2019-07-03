import React from 'react';

import {
    Container, Row, Col, Nav, NavbarBrand, NavLink, NavItem
} from 'reactstrap';

export function Footer() {
    return (
        <footer>

                <Row noGutters className="position-relative w-100 align-items-center">

                    <Col md={{ size: 3 }} className="d-none d-lg-flex align-items-end justify-content-end">
                        <NavbarBrand className="d-inline-block p-0" href="/">
                            <div className="logo-gray"></div>
                        </NavbarBrand>

                    </Col>

                    <Col md={{ size: 7 }} className="d-flex footer-text justify-content-xs-start align-items-center justify-content-center">
                        <span className="text-secondary">Если вы хотите, чтобы ваше приложение появилось в нашем маркетплейсе, обращайтесь</span>
                        <NavItem className="d-flex align-items-center">
                            <NavLink className="font-weight-bold px-1 italic text-info" href="mailto:info@cobrain.io">info@cobrain.io</NavLink>
                        </NavItem>
                    </Col>

                    <Col md={{ size: 2 }} className="d-none footer-text d-lg-flex justify-content-start">
                        <Nav className="mrx-auto" navbar>

                            <NavItem className="d-flex align-items-center">
                                <NavLink className="font-weight-bold text-secondary" href="/">Контакты</NavLink>
                            </NavItem>

                        </Nav>
                    </Col>

                </Row>

        </footer>
    );
}
