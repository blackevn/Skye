import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

interface ImageUploadProps {
  onChange: (base64: string) => void;
  label: string;
  value?: string
  disabled?: boolean;
  name?: string
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  label,
  value,
  disabled = false,

}) => {
  const [base64, setBase64] = useState(value);

  const handleChange = useCallback(
    (base64: string) => {
      onChange(base64);
    },
    [onChange]
  );

  const handleDrop = useCallback((files: any) => {
    const file = files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const base64Result = e.target?.result;
      setBase64(base64Result);
      handleChange(base64Result);
    };

    reader.readAsDataURL(file);
  }, [handleChange]);


  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 4,
    onDrop: handleDrop,
    disabled,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'video/mp4': [],
      'video/mkv': [],
      'video/avi': [],
    },
  });

  return (
    <div {...getRootProps({ className: 'w-full p-4 grid place-items-center' })}>
      <input {...getInputProps()} />

      {base64 ? (
        <div>
          <Image src={base64} width='300' height='100' alt="Upload image" />
        </div>
      ) : (
        <p className="border-1">{label}</p>
      )}
    </div>
  );
};

export default ImageUpload;
