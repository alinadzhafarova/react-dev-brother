import React from "react";


class InputHooks2 extends React.Component {
    state = {
        placeholder: "Ввод",
        value: '',
        name: '',


    };

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }

    render() {
        return <div>
            <label>Введите Ваше имя</label><br/>
            <input
                placeholder={this.state.placeholder}
                name={this.props.name}
                value={this.state.value}
                onChange={this.handleChange}

            />
        </div>;
    }
}


export default InputHooks2