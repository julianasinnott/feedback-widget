import { useState } from "react";
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        },
    },

    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lampada'
        },
    },

    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        },
    },
}

export type FeedbackType = keyof typeof feedbackTypes;

type Props = {
    onClickButton: React.MouseEventHandler<HTMLButtonElement>
}

export function WidgetForm ({ onClickButton }: Props) {

    const [feedbackType, setFeedbackType]= useState<FeedbackType|null>(null)
    const [feedbackSent, setFeedbackSent]= useState(false)

    function handleRestartFeedback() {
        setFeedbackSent(false)
        setFeedbackType(null)
    }

    return (
        <div className="bg-zinc-800 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem) md:w-auto]">

           { feedbackSent ? (
               <FeedbackSucessStep
                    onFeedbackRestarRequest={handleRestartFeedback}
                    onClickButton={onClickButton}
               />
           ) : (
            <>
             {!feedbackType ? (
                <FeedbackTypeStep
                    onFeedbackTypeChanged={setFeedbackType}
                    onClickButton={onClickButton}
                />
            ) : (
                <FeedbackContentStep
                    onClickButton={onClickButton} 
                    feedbackType={feedbackType}
                    onFeedbackRestarRequest={handleRestartFeedback}
                    onFeedbackSent={() => setFeedbackSent(true)}
                />
            )}
            </>
           )}

           

            <footer className="text-xs text-neutral-400">
                <p>Feito com ♥ por <a
                        className="underline underline-offset-2 hover:text-zinc-100 rounded-sm focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-zinc-900 focus:ring-[#8257e6]"
                        href="https://www.linkedin.com/in/julianasinnott/"
                        target="_blank">
                            Juliana Sinnott
                    </a>
                </p>
            </footer>
        </div>
    );
}