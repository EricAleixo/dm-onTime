type InputRootProps = {
    text: string
}

export const InputRoot = ({text} : InputRootProps) => {
    return (
        <label className="input w-42 sm:w-72 md:w-80">
            <svg className="h-7 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                </g>
            </svg>
            <input type="search" className="grow" placeholder={text} />
            <kbd className="hidden md:inline-flex kbd kbd-sm">⌘</kbd>
            <kbd className="hidden md:inline-flex kbd kbd-sm">K</kbd>
        </label>
    )
}