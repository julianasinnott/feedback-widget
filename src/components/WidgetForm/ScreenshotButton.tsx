import html2canvas from "html2canvas";
import { backgroundPosition } from "html2canvas/dist/types/css/property-descriptors/background-position";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

type Props = {
    onScreenshotTook:(screenshot:string | null) => void;
    screenshot: string | null;
}

export function ScreenshotButton ({ screenshot, onScreenshotTook }: Props) {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

    async function handleTakeScreenhot() {
        setIsTakingScreenshot(true)

        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL('image/png');

        onScreenshotTook(base64image)
        setIsTakingScreenshot(false)
    }

    if (screenshot) {
        return (
            <button
            type="button"
            className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
            onClick={() => onScreenshotTook(null)}
            style={{
                backgroundImage:`url(${screenshot})`,
                backgroundPosition:'right bottom',
                backgroundSize:180,
            }}
            >
                <Trash weight="fill" />
            </button>
        )
    }

    return (
        <button
        type="button"
        onClick={handleTakeScreenhot}
        className="p-2 bg-zinc-700 rounded-md border-transparent hover:bg-zinc-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-[#8257e6]"
        >
        { isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" /> }
        </button>
    )
    }