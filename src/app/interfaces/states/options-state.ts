import type { OptionEntity } from "../entities/option-entity";

export interface OptionState extends OptionEntity {
    eliminated: boolean,
    showRightAnswer: boolean
}