import { BotaoAtendimento } from "../ui/botaoAtendimento";

export const InitialSection = () => {
    return (
        <>
            <div className="bg-[url('/images/fundo.jpg')] h-auto bg-cover bg-center">
                <div className="flex flex-col items-center gap-6 h-full w-full bg-gradient-to-r from-red-800/40 to-red-950/20 ">
                    <div className="flex flex-col items-center lg:flex-row md:justify-center pt-52 px-10 lg:px-36 xl:px-[360px] md:gap-3">
                        <h1 className="text-left text-3xl font-semibold mb-8 md:text-4xl lg:w-1/2 xl-1/3 xl:text-5xl">Finalmente um Seguro com Benefícios para a sua Vida!</h1>
                        <h2 className="text-left text-xl lg:w-1/2 xl-1/3 xl:px-24">Seguros sem burocracia, com preços justos e benefícios para você, sua família e seu pet em vida.</h2>
                    </div>
                    <div className="w-52 text-sm pt-6">
                        <BotaoAtendimento name="SIMULE AGORA O SEU" />
                    </div>
                    <div className="py-10">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 lg:hidden cursor-pointer hover:animate-bounce">
                            <circle className="fill-none stroke-current stroke-1 stroke-linecap-round stroke-linejoin-round stroke-miterlimit-10" cx="16" cy="16" r="13"></circle>
                            <polyline className="fill-none stroke-current stroke-1 stroke-linecap-round stroke-linejoin-round stroke-miterlimit-10" points="21,14 16,19 11,14"></polyline>
                        </svg>
                        <svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" className="w-14 h-14 hidden cursor-pointer animate-[bounce_2s_ease-in-out_infinite] duration-1000 lg:flex stroke-gray-300 hover:stroke-white">
                            <path d="M12 9V7M12 21C8.68629 21 6 18.3137 6 15V9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9V15C18 18.3137 15.3137 21 12 21Z" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex justify-center w-full gap-8 pt-10 xl:px-80">
                <span className="w-1/4 xl:w-1/3 px-5 py-1 bg-neutral-400 font-bold text-xl xl:text-2xl">Mais de 160 colaboradores especializados</span>
                <span className="w-1/4 xl:w-1/3 px-5 py-1 bg-neutral-600 font-bold text-xl xl:text-2xl">Mais de 250 mil seguros de vida vendidos</span>
                <span className="w-1/4 xl:w-1/3 px-5 py-1 bg-neutral-400 font-bold text-xl xl:text-2xl">Presença em mais de 3 mil municípios brasileiros</span>
            </div>
        </>
    );
}