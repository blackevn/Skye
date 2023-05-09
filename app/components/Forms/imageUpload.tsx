import React from "react";

interface ImageUploadProps {
    onChange: (base64: string) => void
    label: string
    value?: string
    disabled?: boolean
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, label, value, disabled = false}) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        onChange(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (disabled) {
    return <div>{value}</div>;
  }

  return (
    <div>
      <label>{label}</label>
      <input type="file" onChange={handleChange} />
    </div>
  );
}


export default ImageUpload;
