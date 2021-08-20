import React from "react";
import Input from "./Input";
import RadioButtons from "./RadioButtons";
import Select from "./Select";
import TextArea from "./TextArea";
import CheckBoxGroup from './CheckBoxGroup';
function FormikControl(props) {
  const { control, ...rest } = props;
  console.log(rest);
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
        return <Select {...rest} />
    case "radio":
      return <RadioButtons {...rest} /> 
    case "checkbox": 
        return <CheckBoxGroup {...rest} />
    case "date":
    default:
      return null;
  }
}

export default FormikControl;
