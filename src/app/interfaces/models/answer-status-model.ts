import type AnswerStatusEnum from "../../constants/enum/answer-status.enum";

export interface AnswerStatusModel {
    status: AnswerStatusEnum,
    statement: string,
    color: string
}