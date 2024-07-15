import { useEffect, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [templates, setTemplates] = useState([])
  const [surveys, setSurveys] = useState([])
  const [form, setForm] = useState({
    currentQuestion: 0,
    answers: []
  })
  
  useEffect(() => {
    axios.get('http://localhost:3001/get-templates')
     .then(templates => setTemplates(templates.data))
     .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    axios.get('http://localhost:3001/surveys')
      .then(surveys => setSurveys(surveys.data))
      .catch(err => console.log(err));
  }, []);

  const templat = templates.find(template => template.title === "Требование о ремонте ТСТ")
  const pr211 = templates.find(template => template.title === "Требование о ремонте ТСТ")
  const pr212 = templates.find(template => template.title === "Требование о возврате некач. товара")
  const pr213 = templates.find(template => template.title === "Требование о возврате некач. товара (ст.12)")
  const pr214 = templates.find(template => template.title === "Заявление о возврате кач. товара")

  const q1 = surveys.find(survey => survey.id === 1)
  const q2 = surveys.find(survey => survey.id === 2)
  const q3 = surveys.find(survey => survey.id === 3)
  const q4 = surveys.find(survey => survey.id === 4)
  const q5 = surveys.find(survey => survey.id === 5)
  const q6 = surveys.find(survey => survey.id === 6)
  const q7 = surveys.find(survey => survey.id === 7)
  const q8 = surveys.find(survey => survey.id === 8)
  const q9 = surveys.find(survey => survey.id === 9)
  const q10 = surveys.find(survey => survey.id === 10)
  const q11 = surveys.find(survey => survey.id === 11)
  const q12 = surveys.find(survey => survey.id === 12)
  const q13 = surveys.find(survey => survey.id === 13)
  const q14 = surveys.find(survey => survey.id === 14)
  const q15 = surveys.find(survey => survey.id === 15)
  const q16 = surveys.find(survey => survey.id === 16)
  const q17 = surveys.find(survey => survey.id === 17)
  const q18 = surveys.find(survey => survey.id === 18)
  const q19 = surveys.find(survey => survey.id === 19)
  const q20 = surveys.find(survey => survey.id === 20)


  const handleAnswer = (answer) => {
    setForm({
     ...form,
      answers: [...form.answers, answer],
      currentQuestion: getNextQuestion(form.currentQuestion, answer)
    })
  }

  const questions = [
    {
      id: 11,
      text: q1?.question ,
      answers: [
        { id: 1, text: 'У меня травма' },
        { id: 2, text: 'Хочу вернуть товар' },
        { id: 3, text: 'Хочу вернуть деньги за услуги спортивной организации' }
      ],
      nextQuestions: [
        { id: 1, condition: 'У меня травма' },
        { id: 12, condition: 'Хочу вернуть товар' },
        { id: 26, condition: 'Хочу вернуть деньги за услуги спортивной организации' }
      ]
    },
    {
      id: 1,
      text: 'Травма была получена во время тренировки?',
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 6, condition: 'Да' },
        { id: 3, condition: 'Нет' }
      ]
    },
    {
      id: 2,
      text: 'Есть ли заключение врача о травме?',
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 111, condition: 'Да' },
        { id: 5, condition: 'Нет' }
      ]
    },
    {
      id: 3,
      text: 'Травма была получена из-за небрежности персонала и несоответствия нормам безопасности?',
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' } 
      ],
      nextQuestions: [
        { id: 2, condition: 'Да' },
        { id: 101, condition: 'Нет' } //end
      ]
    },
    {
      id: 4,
      text: 'Есть ли заключение врача о травме?', // second
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' },
      ],
      nextQuestions: [
        { id: 8, condition: 'Да' },
        { id: 5, condition: 'Нет' },
      ]
    },
    {
      id: 5,
      text: 'Есть ли другие доказательства, что травма была получена именно на тренировке?',
      answers: [
        { id: 1, text: 'Да' },
        { id: 101, text: 'Нет' } //end
      ],
      nextQuestions: [
        { id: 11, condition: 'Да' },
        { id: 101, condition: 'Нет' } // end
      ]
    },
    {
      id: 6,
      text: 'Есть ли заключение врача о травме?', // second
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 8, condition: 'Да' },
        { id: 7, condition: 'Нет' }
      ]
    },
    {
      id: 7,
      text: 'Есть ли другие доказательства, что травма была получена именно на тренировке?',
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 9, condition: 'Да' },
        { id: 101, condition: 'Нет' } // end
      ]
    },
    {
      id: 8,
      text: 'Вы выполняли указания тренера?',
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 111, condition: 'Да' }, //h end
        { id: 9, condition: 'Нет' }
      ]
    },
    {
      id: 9,
      text: 'Оборудование было неисправно?',
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 111, condition: 'Да' }, // h end
        { id: 10, condition: 'Нет' }
      ]
    },
    {
      id: 10,
      text: 'Фитнес-клуб иным образом нарушил технику безопасности?',
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 111, condition: 'Да' }, // h end
        { id: 101, condition: 'Нет' } // end
      ]
    },

    // tovar--------------------------tovar

    {
      id: 12,
      text: q2?.question,
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 13, condition: 'Да' },
        { id: 14, condition: 'Нет' }
      ]
    },
    {
      id: 13,
      text: q3?.question,
      info: q3?.info,
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 101, condition: 'Да' }, // end
        { id: 15, condition: 'Нет' }
      ]
    },
    {
      id: 14,
      text: q4?.question,
      info: q4?.info,
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 20, condition: 'Да' },
        { id: 24, condition: 'Нет' }
      ]
    },
    {
      id: 15,
      text: q5?.question,
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 16, condition: 'Да' },
        { id: 17, condition: 'Нет' }
      ]
    },
    {
      id: 16,
      text: q6?.question,
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 19, condition: 'Да' },
        { id: 220, condition: 'Нет' } // h end
      ]
    },
    {
      id: 17,
      text: q7?.question,
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 214, condition: 'Да' }, // h end
        { id: 18, condition: 'Нет' }
      ]
    },
    {
      id: 18,
      text: q8?.question,
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 201, condition: 'Да' }, // end
        { id: 213, condition: 'Нет' } // h end
      ]
    },
    {
      id: 19,
      text: q9?.question,
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 201, condition: 'Да' }, // end
        { id: 221, condition: 'Нет' } // h end
      ]
    },
    {
      id: 20,
      text: q10?.question,
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 24, condition: 'Да' },
        { id: 21, condition: 'Нет' } 
      ]
    },
    {
      id: 21,
      text: q11?.question,
      info: q11?.info,
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 22, condition: 'Да' }, 
        { id: 212, condition: 'Нет' } // h end
      ]
    },
    {
      id: 22,
      text: q12?.question,
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 23, condition: 'Да' },
        { id: 212, condition: 'Нет' } // h end
      ]
    },
    {
      id: 23,
      text: q13?.question,
      info: q13?.info,
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 212, condition: 'Да' }, // h end
        { id: 211, condition: 'Нет' } // h end
      ]
    },
    {
      id: 24,
      text: q14?.question,
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 201, condition: 'Да' }, // end
        { id: 25, condition: 'Нет' } 
      ]
    },
    {
      id: 25,
      text: q15?.question,
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 21, condition: 'Да' }, 
        { id: 201, condition: 'Нет' } // end
      ]
    },

    //uslugi------------------------------------uslugi

    {
      id: 26,
      text: 'Хотите совсем прекратить пользоваться этими услугами?',
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 27, condition: 'Да' }, 
        { id: 32, condition: 'Нет' }
      ]
    },
    {
      id: 27,
      text: 'Уже обращались к администрации?',
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 27, condition: 'Да' }, 
        { id: 29, condition: 'Нет' }
      ]
    },
    {
      id: 32,
      text: 'Уже обращались к администрации?',
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 28, condition: 'Да' }, 
        { id: 29, condition: 'Нет' }
      ]
    },
    {
      id: 28, // ------------------------!!!!
      text: 'Если администрация игнорирует ваши требования, то вы можете защитить свои права, обратившись в суд. Для начала ей лучше направить официальную досудебную претензию. Пожалуйста, ответьте на несколько вопросов',
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 21, condition: 'Да' }, 
        { id: 101, condition: 'Нет' }
      ]
    },
    {
      id: 29, // same 
      text: 'Были ли нарушены сроки оказания услуги? Например, тренировки должны были начаться в мае, а начались только в июле. Или вам пообещали, что к концу месяца с вами проведут 10 занятий, а успели провести только 7',
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 30, condition: 'Да' }, 
        { id: 31, condition: 'Нет' }
      ]
    },
    {
      id: 30,
      text: 'Хотите согласовать новый срок? Например, выбрать удобные вам даты занятий в качестве компенсации',
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 21, condition: 'Да' }, // h end
        { id: 101, condition: 'Нет' } // h end
      ]
    },
    {
      id: 31,
      text: 'Есть ли у вас претензии к качеству услуги? Например, тренер не подобрал вам подходящую программу. Или на занятиях по аэробике инструктор поясняет ошибки только нескольким людям из группы, а остальных игнорирует.',
      answers: [
        { id: 1, text: 'Да' },
        { id: 2, text: 'Нет' }
      ],
      nextQuestions: [
        { id: 21, condition: 'Да' }, 
        { id: 101, condition: 'Нет' }
      ]
    },
    {
      id: 111, // h end
      text: 'h end'
    },
    {
      id: 101, // end
      text: 'end'
    },
    {
      id: 211, // h end
      text: 'h end'
    },
    {
      id: 212, // end
      text: 'end'
    },
    {
      id: 213, // end
      text: 'end'
    },
    {
      id: 214, // end
      text: 'end'
    },
    {
      id: 220, // end
      text: 'end'
    },
    {
      id: 221, // end
      text: 'end'
    },
    {
      id: 201, // end
      text: 'end'
    }
    
    // Add more questions here...
  ]

  const getNextQuestion = (currentQuestion, answer) => {
    const nextQuestionId = questions[currentQuestion].nextQuestions.find((nextQuestion) => nextQuestion.condition === answer).id
    return questions.findIndex((question) => question.id === nextQuestionId)
  }

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
  {form.currentQuestion < questions.length && (
    questions[form.currentQuestion].id === 101 ? (
      <div>
        <h5>К сожалению, компенсацию истребовать не получится</h5>
      </div>
    ) : questions[form.currentQuestion].id === 111 ? (
      <div>
        <div>
      <h5>{q1.question}</h5>
      <a href={templat.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open Link</a>
    </div>
      </div>
    ) : questions[form.currentQuestion].id === 211 ? (
      <div>
        <div>
          <p>Вы можете требовать только устранения недостатков (ремонта товара) или уменьшения покупной цены. Возврат или обмен невозможен
          (ст. 18 Закона о защите прав потребителей)
          </p>
      <h5>{pr211.title}</h5>
      <a href={pr211.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open Link</a>
    </div>
      </div>
    ) : questions[form.currentQuestion].id === 212 ? (
      <div>
        <div>
          <p>Вы можете требовать  или устранения недостатков, или уменьшения покупной цены, или возврата (обмена) товара
          (ст. 18 Закона о защите прав потребителей)
          </p>
      <h5>{pr212.title}</h5>
      <a href={pr212.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open Link</a>
    </div>
      </div>
    ) : questions[form.currentQuestion].id === 201 ? (
      <div>
      <h5>К сожалению, ваши требования не удовлетворят</h5>
      </div>
    ) : questions[form.currentQuestion].id === 213 ? (
      <div>
      <div>
          <p>Можно отказаться от исполнения договора, потребовать обратно деньги за товар и возмещения убытков
          </p>
      <h5>{pr213.title}</h5>
      <a href={pr213.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open Link</a>
    </div>
      </div>
    ) : questions[form.currentQuestion].id === 214 ? (
      <div>
      <div>
          <p>Возможен обмен. Если аналогичного товара в день обращения не будет, то можно
          вернуть товар и потребовать деньги обратно
          </p>
      <h5>{pr214.title}</h5>
      <a href={pr214.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open Link</a>
    </div>
      </div>
    ) : questions[form.currentQuestion].id === 220 ? (
      <div>
      <div>
      <h5>Возврат возможен</h5>
      <p>Качественный товар можно просто отнести обратно в пункт выдачи, если купили на маркетплейсе.
Если приобрели его в ином интернет-магазине, напишите по контактам магазина, что хотите вернуть такой-то товар. Причину указывать необязательно. У вас уточнят реквизиты заказа и подскажут дальнейшие действия.
          </p>
    </div>
      </div>
    ) : questions[form.currentQuestion].id === 221 ? (
      <div>
      <div>
      <h5>Тогда товар можно вернуть в течение 3 месяцев</h5>
      <p>Качественный товар можно просто отнести обратно в пункт выдачи, если купили на маркетплейсе.
Если приобрели его в ином интернет-магазине, напишите по контактам магазина, что хотите вернуть такой-то товар. Причину указывать необязательно. У вас уточнят реквизиты заказа и подскажут дальнейшие действия.
          </p>
    </div>
      </div>
    ) : (
      <div>
        <>
          {questions[form.currentQuestion].info && <p>{questions[form.currentQuestion].info}</p>} {/* Render the info property if it exists */}
          <h5>{questions[form.currentQuestion].text}</h5>
          {questions[form.currentQuestion].answers.map((answer) => (
            <button key={answer.id} onClick={() => handleAnswer(answer.text)} className="btn btn-primary">{answer.text}</button>
          ))}
        </>
      </div>
    )
  )}
</div>
      </div>
    </div>
  );
}

export default App;

// import { useEffect, useState } from "react";
// import { BrowserRouter, Route, Link } from 'react-router-dom';
// import axios from 'axios'
// import 'bootstrap/dist/css/bootstrap.min.css'

// function App() {
//   const [templates, setTemplates] = useState([])
//   useEffect(() => {
//     axios.get('http://localhost:3001/getTemplates')
//       .then(templates => setTemplates(templates.data))
//       .catch(err => console.log(err))
//   }, [])

  

//   return (
    
//     <div className="container">
//       <a href="/form" className="btn btn-secondary">Go to Survey</a>
//       {templates.map((template, index) => (
//         <div key={index} className="card mb-3">
//           <h5 className="card-title">{template.title}</h5>
//           <p className="card-text">Type: {template.type}</p>
//           <p className="card-text">Size: {template.size}</p>
//           <a href={template.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open Link</a>
//         </div>
//       ))}
//     </div>
    
//   );
// }

// export default App;