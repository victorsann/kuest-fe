import type TextSyleEnum from "../../constants/enum/text-style.enum";

export interface TextStyleModel {
    text: string,
    style: TextSyleEnum,
    action: (() => void),
}