import type QuestionActionsEnum from "../../constants/enum/question-options.enum";

export interface QuestionOptionModel {
    title: string,
    action: Function,
    type: QuestionActionsEnum
}