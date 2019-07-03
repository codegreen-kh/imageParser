import React, { Component } from 'react';
import DropZone from '../components/DropZone';
import FileItem from '../components/FileItem';

import {
    Container, Row, Col, Button, Navbar, Nav, NavbarBrand, NavLink, NavItem
} from 'reactstrap';

import _map from 'lodash/map';
import _filter from 'lodash/filter';

class Services extends Component {
    constructor(props) {
        super(props);

        this.state = {
            files: []
        }

        this.handleCloseClick = this.handleCloseClick.bind(this);
    }

    handleFileChange(files) {
        this.setState({
            files: files
        });
    }

    handleCloseClick(file) {
        this.setState({
            files: _filter(this.state.files, f => {
                return f.name !== file.name;
            })
        });
    }

    render() {
        return (

            <Container className="px-0">

                <Row noGutters className="dropzone-container py-4 w-100 px-4 position-relative">

                    <Col xs={{ order: 2 }} md={{ size: 4, order: 1 }} tag="aside" className="services-content">
                        <DropZone onFilesAdded={(files) => this.handleFileChange(files)} />
                    </Col>

                    <Col xs={{ order: 1 }} md={{ size: 8, offset: 0 }} tag="section" className="fileitems-container">
                        {_map(this.state.files, f => {
                            return <FileItem key={f.name} file={f} onClose={this.handleCloseClick}></FileItem>
                        })}
                    </Col>

                </Row>
            </Container>
        );
    }
}

export default Services;