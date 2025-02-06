import { Question, QuestionType } from "../types/question";

export const list:Question[] = [
    {
        id: 1,
        question: "What is the capital of France?",
        type: QuestionType.Radio,
        answers: [
            { id: 11, answer: "Paris", isCorrect: true, points: 5 },
            { id: 12, answer: "London", isCorrect: false, points: 0 },
            { id: 13, answer: "Berlin", isCorrect: false, points: 0 },
            { id: 14, answer: "Madrid", isCorrect: false, points: 0 },
        ],
    },
    {
        id: 2,
        question: "Чи можна заливати свої дані в інтернет?",
        type: QuestionType.Radio,
        answers: [
            { id: 21, answer: "Можна", isCorrect: true, points: 5 },
            { id: 22, answer: "Не можна", isCorrect: false, points: 0 },
            { id: 23, answer: "Можна але обережно", isCorrect: false, points: 0 },
        ],
    },
    {
        id: 3,
        question: "Як знайти свій паспорт?",
        type: QuestionType.Checkbox,
        answers: [
            { id: 31, answer: "Користуватися мобільним телефоном", isCorrect: true, points: 5 },
            { id: 32, answer: "Знати тільки число та місто", isCorrect: false, points: 0 },
            { id: 33, answer: "Користуватися читальником", isCorrect: false, points: 0 },
            { id: 34, answer: "Користуватися паспортом-печаткою", isCorrect: false, points: 0 },
        ],
    },
    {
        id: 4,
        question: "Чи можна заливати свої дані в інтернет?",
        type: QuestionType.Radio,
        answers: [
            { id: 41, answer: "Можна", isCorrect: true, points: 5 },
            { id: 42, answer: "Не можна", isCorrect: false, points: 0 },
            { id: 43, answer: "Можна але обережно", isCorrect: false, points: 0 },
        ],
    },
    {
        id: 5,
        question: "Як знайти свій паспорт?",
        type: QuestionType.Checkbox,
        answers: [
            { id: 51, answer: "Користуватися мобільним телефоном", isCorrect: true, points: 5 },
            { id: 52, answer: "Знати тілько число та місто", isCorrect: false, points: 0 },
            { id: 53, answer: "Користуватися читальником", isCorrect: false, points: 0 },
            { id: 54, answer: "Користуватися паспортом-печаткою", isCorrect: false, points: 0 },
        ],
    }
]
