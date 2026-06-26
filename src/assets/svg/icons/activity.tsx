interface Props {
    color?: string;
}

const ActivitySvg = (props: Props) => (
    <svg
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke={(props.color) ?? "#000"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 11.666h4L10.04 5l4.398 14 1.552-7.334H20"
        />
    </svg>
)
export default ActivitySvg
