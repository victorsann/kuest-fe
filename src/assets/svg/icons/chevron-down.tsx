import { c_grey_six } from "../../../app/constants/colors";

interface Props {
    color?: string;
}

const ChevroDownSvg = (props: Props) => (
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
            d="m7 10 5 4.58L17 10"
        />
    </svg>
);

export default ChevroDownSvg;
