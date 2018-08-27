import React, { Component } from 'react'

import ControlPanel from '../ControlPanel';
import FileZone from '../FileZone';
import { getSynonyms } from '../../api';

import './MyEditor.css'

export default class MyEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            html: '',
            formatActions: [],
            synonyms: [],
            showError: false
        }
    }

    componentDidMount() {
        const { value } = this.state;
        if (!value) {
            return false;
        }
        this.fetchSynonyms();
    }

    handleChange = (value) => {
        this.setState({
            value,
        })
    }

    errorHanlder = () => {
        const { value, synonyms } = this.state;
        if(!value) {
            if (synonyms.length > 0 ) {
                this.setState({
                    synonyms: [],
                })
            }
            this.setState({
                showError: true,
            })
            return false;
        }
        this.setState({
            showError: false,
        })
    }

    fetchSynonyms = () => {
        const { value } = this.state;
        this.errorHanlder();
        getSynonyms(value).then(data => {
            const newData = data.slice(0,40);
            this.setState({synonyms: newData})
        });
    }

    handleFormatChange = (format, isActive) => {
        const { formatActions, value } = this.state;
        if (!isActive) {
            const filteredFormats = formatActions.filter(item => item !== format);
            const updatedString = this.preceedText(filteredFormats, value);

            this.setState({
                formatActions: filteredFormats,
                html: updatedString,
            })
        } else {
            const newFormats = [
                ...formatActions,
                format,
            ];
            const updatedString = this.preceedText(newFormats, value);

            this.setState({
                formatActions: [...formatActions, format],
                html: updatedString,
            })
        }
    }
    
    preceedText = (formats, initialString) => {
        return formats.reduce((accum, el) => {
            accum = `<${el}>${accum}</${el}>`;
            return accum;
        }, initialString);
    }

    handleTextChange = (e) => {
        this.setState({
            value:  e.target.textContent,
        }, () => {
            this.htmlChange();
        })
    }

    htmlChange = () => {
        const { formatActions, value } = this.state;
        const updatedString = this.preceedText(formatActions, value);
        this.setState({
            html: updatedString,
        })
    }

    render() {
        const { synonyms, showError } = this.state;
        const isShowError = showError && <p className="error">Your text is empty!</p>;
        const wordSynonyms = synonyms.map(item => (
            <li key={item.word} 
                onClick={this.handleTextChange}>
                {item.word}
            </li>
        ));
        return (
            <div>
                <ControlPanel 
                    formatChange={this.handleFormatChange}
                />
                <FileZone 
                    value={this.state.value}
                    newHtml={this.state.html}
                    handleChange={this.handleChange}
                />
                <div className="synonyms-wrapper">
                    <button 
                        onClick={this.fetchSynonyms}
                        className="get-synonyms-btn"
                    >
                        Get synonyms
                    </button>
                    {isShowError}
                    <ul className="synonyms-list">{wordSynonyms}</ul>
                </div>
            </div>
        )   
    }
}
