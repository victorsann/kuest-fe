import type QuestionTypeEnum from "../../constants/enum/question-type.enum";
import type { OptionEntity } from "./option-entity";
import type { SubjectEntity } from "./subject-entity";
import type { TopicEntity } from "./topic-entity";

export interface QuestionEntity {
    uuid: string,
    year: number,
    exam: string,
    examining_board: string,
    statement: string,
    prompt: string,
    options: Array<OptionEntity>,
    answer: string,
    question_type: QuestionTypeEnum,
    numberOfComments: number,
    subject: SubjectEntity,
    topic: TopicEntity
}
