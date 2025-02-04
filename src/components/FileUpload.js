//import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';

export default function FileUpdate({ onChange, accept }){
    // const [file, setFile] = useState(null);

    const handleChange = (event) => {
        const file = event.target.files[0];
    
        if (!file) return;
    
        // Check file extension
        if (!file.name.endsWith(accept )) {
          alert(`Only ${accept} files are allowed!`);
          return;
        }
    
        // Read file content as text
        const reader = new FileReader();
        reader.readAsText(file);
    
        reader.onload = () => {
            onChange(reader.result, file); // Pass file content to parent
        };
    
        reader.onerror = () => {
          console.error("Error reading file:", reader.error);
        };
    };

    return (<>
        <div className="input-group">
            <Form.Control id="file" type="file" onChange={handleChange} accept={accept}></Form.Control>
        </div>
    </>)
}