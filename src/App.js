import React, { Component } from 'react';
import './App.scss';
import ResultComponent from './components/AnswerComponent';
import KeyPadComponent from "./components/CalculatorKeyPadComponent";
import TitleComponent from "./components/TitleComponent";

class App extends Component {
    constructor(){
        super();
        this.state = { result: ""}
    }

    onClick = button => {

        if(button === "="){ this.calculate() }

        else if(button === "C"){ this.reset() }

        else if(button === "CE"){ this.backspace() }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else if(this.state.result.includes('^')){
            checkResult = this.state.result.replace('^','**')
        }

        else {
            checkResult = this.state.result
        }

        try {
            const cleanNum = (str) => str.replace(/\d*(\.\d+)?/g, n => n && +n);
            const clean = cleanNum(checkResult);
            console.log(clean);
            const result = new Function(`return (${clean})`)();

            this.setState({
                // eslint-disable-next-line
                result: result
            })
        } catch (e) {
            this.setState({ result: "error" })
        }
    };

    reset = () => { this.setState({ result: ""}) };

    backspace = () => { this.setState({ result: this.state.result.slice(0, -1) }) };

    cleanNum = () => { this.setState({ result: this.state.result.replace(/\d*(\.\d+)?/g, n => n && +n) }) };

    render() {
        return (
            <div className="calculator-body">
                <TitleComponent title={"Erika's Calculator"}/>
                <ResultComponent result={this.state.result}/>
                <KeyPadComponent onClick={this.onClick}/>
            </div>
        );
    }
}

export default App;