import React, { useState,useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import  EditorToolbar, { modules, formats } from "./EditToolbar";
import { Multiselect } from 'multiselect-react-dropdown';
import category from '../Data/multiValue';



const Form = ({ formData }) => {

  const[multivalues]=useState(category);
  const [value, setValue] = useState({
    BlogTitle: "",
    ShortDescription: "",
  });

  const [content, setContent] = useState("");
  const [isDirty, setIsDirty] = useState(false);

 
  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem("formData"));
  //   if (storedData) {
  //     setValue(storedData);
  //   }
  //   const storedContent = JSON.parse(localStorage.getItem("content"));
  //   if (storedContent) {
  //     setContent(storedContent);
  //   }
  // }, []);
  

  // useEffect(() => {
  //   if (isDirty) {
  //     localStorage.setItem("formData", JSON.stringify(value));
  //   }
  // }, [value, isDirty]);

  useEffect(() => {
    if (isDirty) {
      localStorage.setItem("content", JSON.stringify(content));
    }
  }, [content, isDirty]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setValue((prev) => {
      return { ...prev, [name]: value };
    });
    setIsDirty(true);
  };

  const handleChangerich = (e) => {
    setContent(e);
    setIsDirty(true);
  };

  const handleCancel = () => {
    setValue({
      BlogTitle: "",
      ShortDescription: "",
    });
    setContent("");
    setIsDirty(false);
    localStorage.removeItem("formData");
    localStorage.removeItem("content");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    console.log(content);
    setIsDirty(false);
    localStorage.removeItem("formData");
    localStorage.removeItem("content");
  };

  const renderInput = (fieldName, fieldData) => {
    switch (fieldData.type) {
      case "text":
      case "email":
      case "password":
      case "tel":
      case "number":
        return (
          <div key={fieldName} className="mb-4">
            <input
              className="appearance-none border placeholder:text-darkblue text-sm rounded w-full py-2 px-3 text-black leading-tight focus:outline-none caret-[#879cf1] bg-slate-600"
              type={fieldData.type}
              name={fieldData.Name}
              required={fieldData.required}
              placeholder={fieldData.placeholder}
              value={value[fieldData.Name]}
              onChange={handleChange}
            />
          </div>
        );
      case "textarea":
        return (
          <div key={fieldName} className="mb-2">
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={fieldData.Name}
              rows="2"
              placeholder={fieldData.placeholder}
              name={fieldData.Name}
              value={value[fieldData.Name]}
              onChange={handleChange}
            ></textarea>
          </div>
        );
      case "Richtext":
        return (
          <div key={fieldName}>
            <EditorToolbar toolbarId={'t2'} />
            <ReactQuill
              
              modules={modules('t2')}
              formats={formats}
              className='h-[15rem] border rounded-sm'
              value={content}
              onChange={handleChangerich}
            />
          </div>
        );
      case 'multivalue':
          return <Multiselect options={multivalues} displayValue="category" placeholder='select category' className='my-2'/>
      default:
        return null;
    }
  };

  const renderFormFields = () => {
    return Object.entries(formData).map(([fieldName, fieldData]) => {
      return renderInput(fieldName, fieldData);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {renderFormFields()}
      <div className='flex justify-end'>
        <button
          type="button"
          onClick={handleCancel}
          className="mt-1 container w-20 h-8 rounded-2xl content-center justify-center font-bold bg-gray-300 text-slate-900 bold"
        >
          Cancel
        </button>
        <button
          type="submit"
          className=" mt-1 container w-20 h-8 rounded-2xl content-center justify-center font-bold bg-[#879cf1] text-slate-900 bold"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
