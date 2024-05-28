import React,{useState} from 'react'
import { useField } from 'formik'


const ImageField = ({field,form,...props}) => {
    
    const [selectedImage, setSelectedImage] = useState(null);
    // const [field,meta]=useField(props);



    
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const filepath = event.currentTarget.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
                form.setFieldValue(field.name, filepath);
            };
            reader.readAsDataURL(file);
        }
    };
  return (
      <div className="AddUpImgBox">
                            <div className="imgInput">
                                <input
                                    type="file"
                                    accept="image/*"
                                    id='file'
                                    // className=x'd-none'
                                    {...props}
                                    onChange={handleImageChange}
                                />
                                <label htmlFor='file' className='toFile'>
                                    <div className="circle">
                                        <i class="fa-solid fa-plus"></i>
                                    </div>
                                </label>

                            </div>


                            {selectedImage && (
                                <div>
                                    <img src={selectedImage} />
                                </div>
                            )}
                        </div>
  )
}

export default ImageField
