import React from "react";


class InputHooks2 extends React.Component {
    state = {
        placeholder: "Ваше имя",
        value: '',
        name: '',
    };

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }

    render() {
        return <div>
            <input
                placeholder={this.props.placeholder}
                name={this.props.name}
                value={this.state.value}
                onChange={this.handleChange}
            />
        </div>;
    }
}


export default InputHooks2