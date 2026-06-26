import type { OptionModel } from "../models/option-model";

export interface OptionState extends OptionModel {
    eliminated: boolean,
    showRightAnswer: boolean
}