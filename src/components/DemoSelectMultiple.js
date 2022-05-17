import React, { Component, Fragment, useState } from "react";
import Select from "react-select";

const options = [
    { value: "rojo", label: "rojo" },
    { value: "azul", label: "azul" },
    { value: "verde", label: "verde" },
    { value: "blanco", label: "blanco" }
];



export default function DemoSelectMultiple() {
    const [value, setValue] = useState(null)

    const handleChange = selectedOption => {
        setValue(selectedOption)
        console.log("Option selected:", selectedOption);
    };


    return (
        <Fragment>
            <Select
                isMulti
                options={options}
                value={value}
                onChange={handleChange}
                closeMenuOnSelect={false}
            />
        </Fragment>
    )

}
