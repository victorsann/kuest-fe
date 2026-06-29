import type QuestionAnswerKeyEnum from "../../constants/enum/question-answer-key.enum";

export interface QuestionAnswerEntity {
    key: QuestionAnswerKeyEnum,
    reason: string,
    numberOfLikes: number
}
