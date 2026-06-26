interface Props {
    height?: number;
    width?: number;
    color?: string;
}

const LogoSvg = (props: Props) => (
    <svg
        width={(props.width) ?? 46}
        height={(props.height) ?? 40}
        fill="none"
        {...props}
    >
        <path
            fill={(props.color) ?? "#0F2C8D"}
            stroke={(props.color) ?? "#0F2C8D"}
            strokeWidth={3}
            d="M32.203 1.69 3.133 38.31l5.536-.145 12.453-16.03 10.03 15.436 5.59-.147-12.75-18.833 15.683-.414 2.864-3.355-15.947.421 11.2-13.701-5.589.147Z"
        />
    </svg>
)
export default LogoSvg;
