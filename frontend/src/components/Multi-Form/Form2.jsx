import React from "react";
import { Input, Radio } from "@material-tailwind/react";

export default function Form2({ formData, setFormData }){
    return (
        <div className="flex flex-col gap-5">
        <Radio name="type" label="HTML" disabled />
        <Radio name="type" label="React" disabled defaultChecked />
        <Input label="Username2" />
        <Input label="Username2" />
        <Input label="Username2" />
        <Input label="Username2" />
        <Input label="Username2" />
        <Input label="Username2" />
      </div>
    )
}