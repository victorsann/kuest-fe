import type QuestionAnswer from "../../constants/enum/question_answer.enum";
import type { AnswerStatusModel } from "../models/answer-status-model";
import type { QuestionModel } from "../models/question-model";

export interface QuestionState extends QuestionModel {
    answered: boolean,
    userAnswer: QuestionAnswer,
    answerStatus: AnswerStatusModel
}