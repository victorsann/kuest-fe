import type { QuestionOptionEntity } from "../entities/question-option-entity";

export interface OptionState extends QuestionOptionEntity {
    eliminated: boolean,
    showRightAnswer: boolean
}