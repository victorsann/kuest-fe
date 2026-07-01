import type { ExceptionOptionsEnum } from "../../constants/enum/filter/exception-options.enum";
import type { ListingOptionsEnum } from "../../constants/enum/filter/listing-options.enum";

import type { BoardEntity } from "../entities/board-entity";
import type { ExamEntity } from "../entities/exam-entity";
import type { RoleEntity } from "../entities/role-entity";
import type { SubjectEntity } from "../entities/subject-entity";
import type { TopicEntity } from "../entities/topic-entity";

export interface FilterFormState {
    keyWord: string;
    subjects: Array<SubjectEntity>;
    topics: Array<TopicEntity>;
    boards: Array<BoardEntity>;
    roles: Array<RoleEntity>;
    exams: Array<ExamEntity>;
    years: Array<any>;
    exceptions: Array<ExceptionOptionsEnum>;
    listOption: ListingOptionsEnum;
}