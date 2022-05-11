import { X } from "phosphor-react"

type Props = { onClickButton: React.MouseEventHandler<HTMLButtonElement> }

export function CloseButton({ onClickButton }: Props) {  

    return (
        <div>    
            <button
                onClick={onClickButton}
                className='top-5 right-5 absolute text-zinc-400 hover:text-zinc-100'
                title="Fechar formulário de feedback"
            >   
                <X weight="bold" className="w-4 h-4" />
            </button>
        </div>
    )
}

