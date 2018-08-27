import React, { Component } from 'react';
import './ControlPanel.css';

import Button from '../Button';

export default class ControlPanel extends Component {
    handleChangeFormat = (e) => {
        this.props.formatChange(e.target.textContent);
    }

    render() {
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <Button
                        formatChange={this.props.formatChange}
                        type="b"
                    >
                        B
                    </Button>
                    <Button
                        formatChange={this.props.formatChange}
                        type="i"
                    >
                        I
                    </Button>
                    <Button
                        formatChange={this.props.formatChange}
                        type="u"
                    >
                        U
                    </Button>
                    <Button
                        formatChange={this.props.formatChange}
                        type="h1"
                    >
                        H1
                    </Button>
                    <Button
                        formatChange={this.props.formatChange}
                        type="h2"
                    >
                        H2
                    </Button>
                    <Button
                        formatChange={this.props.formatChange}
                        type="h3"
                    >
                        H3
                    </Button>
                    <Button
                        formatChange={this.props.formatChange}
                        type="h4"
                    >
                        H4
                    </Button>
                    <Button
                        formatChange={this.props.formatChange}
                        type="h5"
                    >
                        H5
                    </Button>
                    <Button
                        formatChange={this.props.formatChange}
                        type="h6"
                    >
                        H6
                    </Button>
                </div>
            </div>
        );
    }
}
