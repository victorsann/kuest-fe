import { ListingOptionsEnum } from "../../constants/enum/filter/listing-options.enum";

const emptyForm = {
    keyWord: '',
    subjects: [],
    topics: [],
    boards: [],
    roles: [],
    exams: [],
    years: [],
    exceptions: [],
    listOption: ListingOptionsEnum.ALL
}

export default emptyForm;