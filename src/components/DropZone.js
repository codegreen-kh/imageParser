import React, { Component } from 'react'
import './DropZone.css'

import { Button } from 'reactstrap';

class DropZone extends Component {
    constructor(props) {
        super(props)
        this.state = { hightlight: false }
        this.fileInputRef = React.createRef()

        this.openFileDialog = this.openFileDialog.bind(this)
        this.onFilesAdded = this.onFilesAdded.bind(this)
        this.onDragOver = this.onDragOver.bind(this)
        this.onDragLeave = this.onDragLeave.bind(this)
        this.onDrop = this.onDrop.bind(this)
    }

    openFileDialog() {
        if (this.props.disabled) return
        this.fileInputRef.current.click()
    }

    onFilesAdded(evt) {
        if (this.props.disabled) return
        const files = evt.target.files
        if (this.props.onFilesAdded) {
            const array = this.fileListToArray(files)
            this.props.onFilesAdded(array)
        }
    }

    onDragOver(evt) {
        evt.preventDefault()

        if (this.props.disabled) return

        this.setState({ hightlight: true })
    }

    onDragLeave() {
        this.setState({ hightlight: false })
    }

    onDrop(event) {
        event.preventDefault()

        if (this.props.disabled) return

        const files = event.dataTransfer.files
        if (this.props.onFilesAdded) {
            const array = this.fileListToArray(files)
            this.props.onFilesAdded(array)
        }
        this.setState({ hightlight: false })
    }

    fileListToArray(list) {
        const array = []
        for (var i = 0; i < list.length; i++) {
            array.push(list.item(i))
        }
        return array
    }

    render() {
        return (
            <div
                className={`Dropzone ${this.state.hightlight ? 'Highlight' : ''}`}
                onDragOver={this.onDragOver}
                onDragLeave={this.onDragLeave}
                onDrop={this.onDrop}
                onClick={this.openFileDialog}
                style={{ cursor: this.props.disabled ? 'default' : 'pointer' }}
            >
                <div
                    className="dropzone-upload-icon"
                ></div>
                <label className="text-secondary font-weight-bold">Drop image there or</label>
                <Button type="submit" className="font-weight-bold py-0 mx-2" color="secondary" outline>select file</Button>
                <input
                    ref={this.fileInputRef}
                    className="FileInput"
                    type="file"
                    multiple
                    onChange={this.onFilesAdded}
                />
            </div>
        )
    }
}

export default DropZone