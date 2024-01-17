import { useState } from 'react'
import '../admin/Admin.scss'
const questions = [
	{
		title: 'React - это ... ?',
		variants: ['библиотека', 'фреймворк', 'приложение'],
		correct: 0
	},
	{
		title: 'Компонент - это ... ',
		variants: [
			'приложение',
			'часть приложения или страницы',
			'то, что я не знаю что такое'
		],
		correct: 1
	},
	{
		title: 'Что такое JSX?',
		variants: [
			'Это простой HTML',
			'Это функция',
			'Это тот же HTML, но с возможностью выполнять JS-код'
		],
		correct: 2
	},
	{
		title: 'Что такое парсинг?',
		variants: ['Хранилище данных', 'Анализ HTML кода', 'Анализ CSS кода'],
		correct: 1
	},
	{
		title: 'Интерпретатор это',
		variants: [
			'Это программа которая выполняет язык прог-я',
			'Не знаю',
			'Это разметка'
		],
		correct: 0
	}
	// {
	// 	title: '',
	// 	variants: ['', '', ''],
	// 	correct: 0
	// }
]

function Result({ answers }) {
	return (
		<div className='result'>
			<img src='' />
			<h2>
				Вы отгадали {answers.filter(el => el).length} ответа из {questions.length}
			</h2>
			<button>Попробовать снова</button>
		</div>
	)
}

function Game({ data, onClickTask, answers }) {
	return (
		<>
			<div className='progress'>
				<div
					style={{ width: `${(100 / questions.length) * answers.length}%` }}
					className='progress__inner'
				></div>
			</div>
			<h1>{data.title}</h1>
			<ul>
				{data.variants.map((el, idx) => (
					<li onClick={() => onClickTask()} key={idx}>
						{el.title}
					</li>
				))}
			</ul>
		</>
	)
}
function App() {
	const [currentTask, setCurrentTask] = useState(questions[0])

	const [answers, setAnswers] = useState([])

	const [resShow, setResShow] = useState(false)

	const [answersData, setAnswersData] = useState([])

	function onClickTask(index, data) {
		if (index === questions.length - 1) {
			console.log('end')
			setResShow(true)
		}
		if (index < questions.length) {
			console.log(index)
			setCurrentTask(questions[index + 1])

            if (data.) {
                setAnswers([...answers, true])
                setAnswersData([...answersData, currentTask[index]])
            }else{
                setAnswers([...answers, false])
            }
		}
	}

	return (
		<div className='App'>
			<Game data={currentTask} onClickTask={onClickTask} answers={answers} />
			<Result falsee={falsee} truee={truee} />
		</div>
	)
}

export default App
