import { c_grey_six } from "../../../app/constants/colors";

interface Props {
    color?: string;
}

const ScissorsSvg = (props: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={15}
        height={15}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                stroke={(props.color) ?? c_grey_six}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5.872 1.5 10.5m0-6L12 9.128M11.25 6a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm0 7.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0v15h15V0z" />
            </clipPath>
        </defs>
    </svg>
);

export default ScissorsSvg;
