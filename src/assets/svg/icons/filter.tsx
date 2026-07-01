import { c_grey_six } from "../../../app/constants/colors";

interface Props {
    color?: string;
}

const FilterSvg = (props: Props) => (
    <svg
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke={(props.color) ?? c_grey_six}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6.462 12h11.076M4 7h16m-9.846 10h3.692"
        />
    </svg>
);

export default FilterSvg;
