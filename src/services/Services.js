import React, { Component } from 'react';
import DropZone from '../components/DropZone';
import FileItem from '../components/FileItem';

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
            <div className="dropzone-container">
                <div className="services-content">
                    <DropZone onFilesAdded={(files) => this.handleFileChange(files)} />
                    <br />
                    <label>Перетащите картинку сюда или выберите файл на компьютере</label>
                    <input id="file-input" type="file" onChange={(e) => this.handleFileChange(e.target.files)} multiple />
                </div>
                <div className="fileitems-container">
                    {_map(this.state.files, f => {
                        return <FileItem key={f.name} file={f} onClose={this.handleCloseClick}></FileItem>
                    })}
                </div>
            </div>
        );
    }
}

export default Services;