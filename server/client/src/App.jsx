import { useEffect, useState } from "react";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [templates, setTemplates] = useState([])
  const [survey, setSurvey] = useState({
    currentQuestion: 0,
    answers: []
  })
  
  useEffect(() => {
    axios.get('http://localhost:3001/getTemplates')
     .then(templates => setTemplates(templates.data))
     .catch(err => console.log(err))
  }, [])

  const templat = templates.find(template => template.title === "Претензия_Устранение недостатков ТСТ")
  const pr211 = templates.find(template => template.title === "Претензия_Устранение недостатков ТСТ")
  const pr212 = templates.find(template => template.title === "Претензия_Возврат (обмен) некачественного товара")
  const pr213 = templates.find(template => template.title === "Претензия_Возврат некачественного товара (ст.12)")
  const pr214 = templates.find(template => template.title === "Заявление о возврате товара")


  const handleAnswer = (answer) => {
    setSurvey({
     ...survey,
      answers: [...survey.answers, answer],
      currentQuestion: getNextQuestion(survey.currentQuestion, answer)
    })
  }

  const questions = [
    {
      id: 11,
      text: 'С чем нужна помощь?',
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
      text: 'Товар качественный?',
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
      text: 'Проверим: товар продовольственный или входит в Перечень товаров, не подлежащих обмену?',
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
      text: 'Гарантийный срок установлен?',
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
      text: 'Товар был куплен дистанционно?',
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
      text: 'Прошло 7 дней с передачи товара?',
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
      text: 'Соблюдено ли каждое из этих условий:1)  С момента покупки не прошло 15 дней (либо не кончился иной срок, установленный продавцом). 2) Товар не был в употреблении, полностью сохранен, пломбы и/или ярлычки на месте. 3) Есть чек или получится сослаться на свидетельские показания о покупке товара. (ст. 25 Закона о защите прав потребителей)',
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
      text: 'При покупке была возможность незамедлительно получить информацию о товаре? (ст. 12 Закона о защите прав потребителей)',
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
      text: 'В момент доставки вам предоставили письменную информацию о порядке и сроках возврата качественного товара?',
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
      text: 'Гарантийный срок прошел?',
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
      text: 'Проверим: товар входит в Перечень технически сложных товаров No 924?',
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
      text: 'С момента покупки прошло 15 дней?',
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
      text: 'Недостаток существенный?',
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
      text: 'С момента покупки прошло 2 года?',
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
      text: 'Недостатки или их причины возникли до передачи товара?',
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
  {survey.currentQuestion < questions.length && (
    questions[survey.currentQuestion].id === 101 ? (
      <div>
        <h5>К сожалению, компенсацию истребовать не получится</h5>
      </div>
    ) : questions[survey.currentQuestion].id === 111 ? (
      <div>
        <div>
      <h5>{templat.title}</h5>
      <a href={templat.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open Link</a>
    </div>
      </div>
    ) : questions[survey.currentQuestion].id === 211 ? (
      <div>
        <div>
          <p>Вы можете требовать только устранения недостатков (ремонта товара) или уменьшения покупной цены. Возврат или обмен невозможен
          (ст. 18 Закона о защите прав потребителей)
          </p>
      <h5>{pr211.title}</h5>
      <a href={pr211.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open Link</a>
    </div>
      </div>
    ) : questions[survey.currentQuestion].id === 212 ? (
      <div>
        <div>
          <p>Вы можете требовать  или устранения недостатков, или уменьшения покупной цены, или возврата (обмена) товара
          (ст. 18 Закона о защите прав потребителей)
          </p>
      <h5>{pr212.title}</h5>
      <a href={pr212.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open Link</a>
    </div>
      </div>
    ) : questions[survey.currentQuestion].id === 201 ? (
      <div>
      <h5>К сожалению, ваши требования не удовлетворят</h5>
      </div>
    ) : questions[survey.currentQuestion].id === 213 ? (
      <div>
      <div>
          <p>Можно отказаться от исполнения договора, потребовать обратно деньги за товар и возмещения убытков
          </p>
      <h5>{pr213.title}</h5>
      <a href={pr213.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open Link</a>
    </div>
      </div>
    ) : questions[survey.currentQuestion].id === 214 ? (
      <div>
      <div>
          <p>Возможен обмен. Если аналогичного товара в день обращения не будет, то можно
          вернуть товар и потребовать деньги обратно
          </p>
      <h5>{pr214.title}</h5>
      <a href={pr214.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open Link</a>
    </div>
      </div>
    ) : questions[survey.currentQuestion].id === 220 ? (
      <div>
      <div>
      <h5>Возврат возможен</h5>
      <p>Качественный товар можно просто отнести обратно в пункт выдачи, если купили на маркетплейсе.
Если приобрели его в ином интернет-магазине, напишите по контактам магазина, что хотите вернуть такой-то товар. Причину указывать необязательно. У вас уточнят реквизиты заказа и подскажут дальнейшие действия.
          </p>
    </div>
      </div>
    ) : questions[survey.currentQuestion].id === 221 ? (
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
        <h5>{questions[survey.currentQuestion].text}</h5>
        {questions[survey.currentQuestion].answers.map((answer) => (
          <button key={answer.id} onClick={() => handleAnswer(answer.text)} className="btn btn-primary">{answer.text}</button>
        ))}
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
//       <a href="/survey" className="btn btn-secondary">Go to Survey</a>
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