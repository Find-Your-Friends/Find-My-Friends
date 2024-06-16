import { Button } from "@material-tailwind/react";
import { useRef, useEffect } from "react";

function UploadImage() {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dpl2zeokj',
            uploadPreset: 'ml_default'
        }, (error, result) => {
            if (!error && result && result.event === "success") {
                console.log('Upload successful:', result.info);
            } else if (error) {
                console.error('Upload error:', error);
            }
        });
    }, []);

    return <Button onClick={() => widgetRef.current.open()}>Upload Here</Button>;
}

export default UploadImage;
