
import { c_grey_six } from "../../../app/constants/colors";

interface Props {
    color?: string;
}

const ChevroUpSvg = (props: Props) => (
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
            d="M7 14.583 12 10l5 4.583"
        />
    </svg>
);

export default ChevroUpSvg;

