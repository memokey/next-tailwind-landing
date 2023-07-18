
export interface PrimaryButtonProps {
    caption: string
    icon?: string
    bordered?: boolean
    onClick: any
    styles?: string
    disabled?: boolean
}

const PrimaryButton = (props: PrimaryButtonProps) => {

    return (
        <button
            className={`bg-[#5B4EF1] font-semibold py-[20px] px-[48px] rounded-[12px] text-white text-[16px] sm:text-[18px] text-center tracking-wider inline-flex items-center justify-center ${
                props.bordered
                    ? 'text-[#7678ED] border-[#7678ED] border-2'
                    : ''
            } ${
                props.disabled
                    ? 'bg-[#1d1e20] button-disabled'
                    : 'hover:shadow-[0_0_20px_-5px_#29b080]'
            } ${props.styles}`}
            onClick={props.disabled ? null : props.onClick}
        >
            {props.icon ? (
                <i className="fa fa-chrome fa-lg pr-[10px]"></i>
            ) : (
                ''
            )}
            <span>{props.caption}</span>
        </button>
    )
}

export default PrimaryButton