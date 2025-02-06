export enum QuestionType {
    Radio = 1,
    Checkbox = 2,
    Text = 3,
}

export type Answer = {
    id:number,
    answer: string,
    isCorrect: boolean,
    points: number
}

export type Question = {
    id: number,
    type: QuestionType,
    question: string,
    answers: Answer[]
}

export type QuestionPropsType = {
    order: number,
    question: Question,
    
}