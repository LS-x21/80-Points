interface Props {
    className: string;
}

const HamburgerMenu = ({ className }: Props) => {
    return (
        <svg className={className} viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
        </svg>
    )
}

export default HamburgerMenu