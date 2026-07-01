import { ListingOptionsEnum } from "../../constants/enum/filter/listing-options.enum";

function clearFormField(value: any) {
    if (typeof value === "string") {
        return '';
    } else if (Array.isArray(value)) {
        return [];
    } else {
        return ListingOptionsEnum.ALL;
    }
}

export default clearFormField;