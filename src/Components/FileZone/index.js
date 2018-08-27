import React, { Component } from 'react';
import './FileZone.css';

export default class FileZone extends Component {
    handleChange = (e) => {
        this.props.handleChange(e.target.textContent);
    }

    render() {
        return (
            <div id="file-zone">
                <div id="file" 
                    contentEditable="true" 
                    onInput={this.handleChange}
                    dangerouslySetInnerHTML={{__html: this.props.newHtml}}
                />
            </div>
        );
    }
}
