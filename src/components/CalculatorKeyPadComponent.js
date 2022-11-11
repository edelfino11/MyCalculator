import React, {Component} from 'react';

class CalculatorKeyPadComponent extends Component {
    constructor(props) {
        super(props)
    };
    render() {
        const symbols = ["(", ")", "CE", "C", "1", "2", "3","+", "4", "5", "6","-","7","8","9","*", ".", "0", "=", "/"];
        return (
            <div className="button">
                {symbols.map((object, _) => (
                    <button
                        name={object}
                        onClick={ e => this.props.onClick(e.target.name)}
                    >
                        {object}
                    </button>
                ))}
            </div>
        );
    }
}
    
export default CalculatorKeyPadComponent;