import type QuestionFieldsEnum from "../../constants/enum/question-fields-enum";

export interface EditQuestionModel {
    field: QuestionFieldsEnum,
    metadata?: any
}