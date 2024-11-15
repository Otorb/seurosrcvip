import { CLOUDINARY } from '../Constants/constants'


export async function getImageCloudinaryObject(name, file) {
    // console.log('file', file);
    
    const formData = new FormData();
    if (file) {
      formData.append(`${name}`, file);
    }
  
    // for (let [key, value] of formData.entries()) {
    //   console.log(`formData${key}:`, value);
    // }
  
  
    const response = await fetch('http://localhost:3002/cloudinary', {
      method: "POST",
      body: formData
    });
    // console.log('response', response);
  
    if (response.ok) {
      const cloudinaryObjectArray = await response.json();
      return cloudinaryObjectArray;
    } else {
      console.log("Oops! ", response.statusText);
    }
  }
  
  export async function deleteImageCloudinary(publicId, projectId) {
    try {
      // console.log('publicId', publicId);
      // console.log('projectId', projectId);
      const response = await fetch(CLOUDINARY, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ publicId, projectId })
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(`Failed to delete image: ${data}`);
      }
  
      return data;
    } catch (error) {
      console.error('Failed to delete image', error);
      throw error;
    }
  }