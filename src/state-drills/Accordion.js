import React from "react";

class Accordion extends React.Component {
    static defaultProps = { 
        sections: [] 
    };
    state = {
        currentButtonIndex: -1
    }
    handleButtonClick(index) {
        this.setState({ currentButtonIndex: index })
    }
    renderSections() {
        const currentSection = this.props.sections[this.state.currentButtonIndex]
        return this.props.sections.map((section, index) => (
            <li>
                <button key={index} onClick={() => this.handleButtonClick(index)}>{section.title}</button>
                {this.props.sections.length && this.renderContent(index)}
            </li>
        ))
    }
    renderContent(index) {
        if(index === this.state.currentButtonIndex) {
            return (
                <p>
                    {this.props.sections[index].content}
                </p>
            )
        } else {
            return (
                <p></p>
            )
        }
    }
    render() {
        
        return (
          <ul>
              {this.renderSections()}
          </ul>
        )
      }
}

export default Accordion;