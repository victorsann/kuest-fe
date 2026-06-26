import type AnswerStatusEnum from "../../constants/enum/answer_status.enum";

export interface AnswerStatusModel {
    status: AnswerStatusEnum,
    statement: string,
    color: string
}