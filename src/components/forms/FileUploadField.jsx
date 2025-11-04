import React, { useContext, useState, useEffect } from 'react';
import { Box, Button, Avatar, Typography } from '@mui/material';
import { PictureAsPdf as PdfIcon, Description as FileIcon, Movie as VideoIcon, ImageNotSupported as ImageNotSupportedIcon } from '@mui/icons-material';
import { FormContext } from './Form';

/**
 * @en A file upload component with a preview, designed to work within a `<Form>`. It handles the file selection and preview logic internally and registers the selected file with the parent form.
 * @ar مكون لرفع الملفات مع معاينة، مصمم للعمل داخل `<Form>`. يتعامل مع منطق اختيار الملف والمعاينة داخليًا ويسجل الملف المختار في النموذج الأب.
 *
 * @param {object} props - The component props.
 * @param {string} props.name - @en The name of the field. This is required to register the field with the parent Form. @ar اسم الحقل. هذا الحقل مطلوب لتسجيله في النموذج الأب.
 * @param {string} [props.label='Upload File'] - @en The label for the upload button. @ar التسمية لزر الرفع.
 * @param {string} [props.initialPreview] - @en An optional URL for an initial preview image, used in "edit" mode. @ar رابط اختياري لصورة معاينة أولية، يُستخدم في وضع "التعديل".
 * @param {string} [props.accept='image/*'] - @en The accepted file types for upload. Defaults to all file types. @ar أنواع الملفات المقبولة للرفع. الافتراضي هو جميع أنواع الملفات.
 */
export const FileUploadField = ({
  name,
  label = 'Upload File',
  initialPreview,
  accept = '*/*',
}) => {
  const formContext = useContext(FormContext);
  const [preview, setPreview] = useState(initialPreview || null);
  const [fileType, setFileType] = useState(null);

  if (!formContext) {
    throw new Error('FileUploadField must be used within a Form component');
  }

  const { setFieldValue, values } = formContext;
  const file = values[name];

  useEffect(() => {
    if (initialPreview) {
      setPreview(initialPreview);
    }
  }, [initialPreview]);

  useEffect(() => {
    if (!file) {
      setPreview(initialPreview || null);
      setFileType(null);
    }
  }, [file, initialPreview]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFieldValue(name, selectedFile);
      setFileType(selectedFile.type);

      if (selectedFile.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => setPreview(reader.result);
        reader.readAsDataURL(selectedFile);
      } else {
        setPreview(null);
      }
    }
  };

  const renderPreview = () => {
    if (fileType?.startsWith('image/') && preview) {
      return <Avatar src={preview} sx={{ width: 100, height: 100 }} />;
    }
    else if (fileType?.startsWith('image/') && !preview){
        <ImageNotSupportedIcon sx={{ fontSize: 60, color: 'text.disabled' }} />
    }

    if (fileType?.startsWith('video/')) {
      return (
        <video width="120" height="100" controls>
          <source src={URL.createObjectURL(file)} type={fileType} />
          Your browser does not support video preview.
        </video>
      );
    }

    if (fileType === 'application/pdf') {
      return <PdfIcon sx={{ fontSize: 60, color: 'error.main' }} />;
    }

    if (fileType) {
      return <FileIcon sx={{ fontSize: 60, color: 'text.secondary' }} />;
    }

    return <FileIcon sx={{ fontSize: 60, color: 'text.disabled' }} />;
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      {renderPreview()}
      {file && <Typography variant="body2">{file.name}</Typography>}

      <Button variant="outlined" component="label">
        {label}
        <input
          type="file"
          hidden
          accept={accept}
          onChange={handleFileChange}
          data-testid="file-upload-input"
        />
      </Button>
    </Box>
  );
};
