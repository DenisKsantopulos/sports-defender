import { useEffect, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [templates, setTemplates] = useState([])

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/search-application?q=${searchQuery}`);
      const templates = await response.json();
      setSearchResults(templates);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    axios.get('http://localhost:3001/get-templates')
     .then(templates => setTemplates(templates.data))
     .catch(err => console.log(err))
  }, [])

  const [questionId, setQuestionId] = useState(1);
	const [jsonData, setJsonData] = useState(null);

	// Делаем запрос на сервер с целью получить новый вопрос
	useEffect(() => {
		fetch(`http://localhost:3001/surveys/${questionId}`)
			.then(response => response.json())
			.then(json => setJsonData(json));
	}, [questionId]);

	if (jsonData === null) return <p>Загрузка данных...</p>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          {templates.map((template, index) => (
            <div key={index} className="card mb-3">
              <h5 className="card-title">{template.title}</h5>
              <p className="card-text">Type: {template.type}</p>
              <p className="card-text">Size: {template.size}</p>
              <a href={template.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open Link</a>
            </div>
          ))}
        </div>
    <div className="col-md-4">
    <div>
			{/* Вопрос */}
			{jsonData.text !== null && <h4>{jsonData.text}</h4>}

			{/* Примечание */}
			{jsonData.note !== null && <p>{jsonData.note}</p>}

			{/* Варианты ответа */}
			{jsonData.answers !== null &&
				jsonData.answers.map(answer => (
					<button
						key={answer.id}
						onClick={() => setQuestionId(answer.nextQuestionId)}
					>
						{answer.text}
					</button>
				))}

			{/* Ссылка на шаблон документа */}
			{jsonData.documentUrl !== null && <p>{jsonData.documentUrl}</p>}
		</div>
</div>
<div>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search templates"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map((template) => (
          <p>{template.title}</p>
        ))}
      </ul>
    </div>
      </div>
    </div>
  );
}

export default App;