import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../FormikUse/TextError";
const CheckBoxGroup = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {( {field} ) => {
           //here field have name, onChange,onBlur methods...
           //And {...field} will use name
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value?.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>

              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name}  component={TextError} />
    </div>
  );
};

export default CheckBoxGroup;
