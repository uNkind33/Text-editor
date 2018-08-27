import React, { Component } from 'react'

import './Button.css';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
    }

    handleChangeFormat = () => {
        const { formatChange, type } = this.props;
        this.setState(prevState => {
            return {
                active: !prevState.active
            }
        }, () => {
            formatChange(type, this.state.active);
        });
    }

    render() {
        const { active } = this.state;
        const activeClass = active ? 'active' : '';
        return (
            <button 
                className={`format-action ${activeClass}`} 
                type="button" 
                onClick={this.handleChangeFormat}
            >
                {this.props.children}
            </button>
        )
    }
}
