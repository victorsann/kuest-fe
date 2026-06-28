import type QuestionAnswerEnum from "../../constants/enum/question-answer.enum";
import type { AnswerStatusModel } from "../models/answer-status-model";
import type { QuestionEntity } from "../entities/question-entity";

export interface QuestionState extends QuestionEntity {
    answered: boolean,
    userAnswer: QuestionAnswerEnum,
    answerStatus: AnswerStatusModel
}