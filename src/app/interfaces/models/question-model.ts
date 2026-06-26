import type QuestionType from "../../constants/enum/question_type.enum";

import type { OptionModel } from "./option-model";
import type { SubjectModel } from "./subject-model";
import type { TopicModel } from "./topic-model";

export interface QuestionModel {
    uuid: string,
    year: number,
    exam: string,
    examining_board: string,
    statement: string,
    prompt: string,
    options: Array<OptionModel>,
    answer: string,
    question_type: QuestionType,
    numberOfComments: number,
    subject: SubjectModel,
    topic: TopicModel
}
