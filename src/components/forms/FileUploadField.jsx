
import React, { useContext, useState, useEffect } from 'react';
import { Box, Button, Avatar } from '@mui/material';
import { ImageNotSupported as ImageNotSupportedIcon } from '@mui/icons-material';
import { FormContext } from './Form';

/**
 * @en A file upload component with a preview, designed to work within a `<Form>`. It handles the file selection and preview logic internally and registers the selected file with the parent form.
 * @ar مكون لرفع الملفات مع معاينة، مصمم للعمل داخل `<Form>`. يتعامل مع منطق اختيار الملف والمعاينة داخليًا ويسجل الملف المختار في النموذج الأب.
 *
 * @param {object} props - The component props.
 * @param {string} props.name - @en The name of the field. This is required to register the field with the parent Form. @ar اسم الحقل. هذا الحقل مطلوب لتسجيله في النموذج الأب.
 * @param {string} [props.label='Upload File'] - @en The label for the upload button. @ar التسمية لزر الرفع.
 * @param {string} [props.initialPreview] - @en An optional URL for an initial preview image, used in "edit" mode. @ar رابط اختياري لصورة معاينة أولية، يُستخدم في وضع "التعديل".
 */
export const FileUploadField = ({ name, label = 'Upload File', initialPreview }) => {
    const formContext = useContext(FormContext);
    const [preview, setPreview] = useState(initialPreview || null);

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
        // If the file is cleared externally, clear the preview
        if (!file) {
            setPreview(initialPreview || null);
        }
    }, [file, initialPreview]);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFieldValue(name, selectedFile);

            // Create a preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Avatar src={preview} sx={{ width: 100, height: 100 }}>
                {!preview && <ImageNotSupportedIcon sx={{ width: '70%', height: '70%' }} />}
            </Avatar>
            <Button variant="outlined" component="label">
                {label}
                <input type="file" hidden accept="image/*" onChange={handleFileChange} data-testid="file-upload-input" />
            </Button>
        </Box>
    );
};
