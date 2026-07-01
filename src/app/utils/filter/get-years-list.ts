import type { SelectItemModel } from "../../interfaces/models/select-item-model";

export default function getYearsList(range: number): Array<SelectItemModel> {
    const currentYear: number = new Date().getFullYear();
    const yearsRange: number = range;

    const pastYears: number[] = Array.from(
        { length: yearsRange },
        (_, index: number) => currentYear - index
    );

    let fomatedList: Array<SelectItemModel> = [];

    pastYears.forEach(element => {
        fomatedList.push({
            value: element.toString(),
            label: element.toString()
        })
    });

    return fomatedList;
}