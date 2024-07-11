import { useEffect, useState } from "react";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [templates, setTemplates] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/getTemplates')
      .then(templates => setTemplates(templates.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="container">
      {templates.map((template, index) => (
        <div key={index} className="card mb-3">
          <h5 className="card-title">{template.title}</h5>
          <p className="card-text">Type: {template.type}</p>
          <p className="card-text">Size: {template.size}</p>
          <a href={template.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open Link</a>
        </div>
      ))}
    </div>
  );
}

export default App;