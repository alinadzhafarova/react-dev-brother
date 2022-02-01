import {useState} from "react";


function CreateInput(props) {

    const [value, setValue] = useState("");

    return <input
        value={value}
        onChange={e => setValue(e.target.value)}

        name={props.name}/>
}


export default CreateInput



