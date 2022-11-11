import React, {Component} from 'react';

class TitleComponent extends Component {

    render() {
        let {title} = this.props;
        return(
            <div className = "title">
                <h1>{title}</h1>
            </div>
        )
    }
};

export default TitleComponent;