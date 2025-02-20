'use client'

export const Main = () => {

    const apertaClick = () => {
        alert('Botão clicado!')
    }
    return (
        <div className="flex-grow bg-gray-200 flex-col items-center flex justify-center">
            <button onClick={apertaClick} className="bg-green-500 px-10 py-10 rounded-md"> Click aqui</button>
        </div>
    )
}