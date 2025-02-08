export type UserType = {
    id: string,
    name: string,
    date: Date,
    result: ResultType[],
}

export type ResultType = {
    questionId: number,
    answerId: number,
}