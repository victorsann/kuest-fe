import type QuestionTypeEnum from "../../constants/enum/question-type.enum";
import type { QuestionOptionEntity } from "./question-option-entity";
import type { QuestionAnswerEntity } from "./question-answer-entity";
import type { SubjectEntity } from "./subject-entity";
import type { TopicEntity } from "./topic-entity";

export interface QuestionEntity {
    uuid: string,
    year: number,
    exam: string,
    examining_board: string,
    statement: string,
    prompt: string,
    options: Array<QuestionOptionEntity>,
    answer: QuestionAnswerEntity,
    question_type: QuestionTypeEnum,
    numberOfComments: number,
    subject: SubjectEntity,
    topic: TopicEntity
}
