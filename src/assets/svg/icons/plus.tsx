interface Props {
    color?: string;
}

const PlusSvg = (props: Props) => (
    <svg
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke={(props.color) ?? "#000"}
            strokeLinecap="round"
            strokeWidth={2}
            d="M12 6v12m6-6H6"
        />
    </svg>
)
export default PlusSvg;
