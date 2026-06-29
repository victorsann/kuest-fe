import type QuestionAnswerKeyEnum from "../../constants/enum/question-answer-key.enum";
import type { AnswerStatusModel } from "../models/answer-status-model";
import type { QuestionEntity } from "../entities/question-entity";

export interface QuestionState extends QuestionEntity {
    answered: boolean,
    userAnswer: QuestionAnswerKeyEnum,
    answerStatus: AnswerStatusModel
}