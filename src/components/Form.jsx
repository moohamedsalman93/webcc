import React, { useState,useEffect} from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ImageTooltip = () => {
  return (
    <div className="ql-tooltip ql-image-tooltip">
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file && /^image\//.test(file.type)) {
            const reader = new FileReader();
            reader.onload = () => {
              const range = Quill.getSelection().index;
              Quill.insertEmbed(range, 'image', reader.result);
            };
            reader.readAsDataURL(file);
          }
        }}
      />
      <button
        className="px-2 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white"
        onClick={() => {
          const input = document.createElement('input');
          input.setAttribute('type', 'file');
          input.setAttribute('accept', 'image/*');
          input.click();
        }}
      >
        Insert Image
      </button>
    </div>
  );
};

const modules = {
  toolbar: {
    container: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
    handlers: {
      'image': () => {
        const input = document.querySelector('.ql-image-tooltip input');
        if (input) {
          input.click();
        }
      }
    }
  },
  clipboard: {
    matchVisual: false,
  },
  imageTooltip: {
    component: ImageTooltip,
  },
};

const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'color', 'background',
];


const Form = ({ formData }) => {

  const [value, setValue] = useState({
    BlogTitle:"",
    ShortDescription:"",
    Richtext:"",
  });

  const [content, setContent] = useState("");

  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
      setValue(storedData);
    }
  }, []);

  useEffect(() => {
    if (isDirty) {
      localStorage.setItem("formData", JSON.stringify(value));
    }
  }, [value,isDirty]);

  useEffect(() => {
    if (isDirty) {
      localStorage.setItem("content", content);
    }
  }, [content,isDirty]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "Richtext") {
      setContent(value);
    }
    setValue((prev) => {
      return { ...prev, [name]: value };
    });
    setIsDirty(true);
  };

  const handleCancel = () => {
    setValue({
      BlogTitle:"",
      ShortDescription:"",
      Richtext:"",
    });
    setContent("");
    setIsDirty(false);
    console.log( localStorage.getItem("formData"));
    console.log( localStorage.removeItem("content"));
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
                      className="shadow appearance-none rounded w-full py-2 px-3 text-black leading-tight focus:outline-1 caret-[#879cf1] bg-slate-600"
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
              <textarea key={fieldName}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="full-description"
                  rows="2"
                  placeholder={fieldData.placeholder}
                  name={fieldData.Name}
                  value={value[fieldData.Name]}
                  onChange={handleChange}
               ></textarea>
            );
      case "richtext":
        return <ReactQuill modules={modules} key={fieldName}
      formats={formats} value={value[fieldData.Name]} name={fieldData.Name} onChange={handleChange} className=" h-[20rem]" />;
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
      <div>
        <button
          type="button"
          onClick={handleCancel}
          className="m-16 container w-20 h-8 rounded-2xl content-center justify-center font-bold bg-gray-300 text-slate-900 bold"
        >
          Cancel
        </button>
        <button
          type="submit"
          className=" m-16 container w-20 h-8 rounded-2xl content-center justify-center font-bold bg-[#879cf1] text-slate-900 bold"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
