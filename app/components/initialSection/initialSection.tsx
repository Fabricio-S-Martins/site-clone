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
                    <div className="flex items-center justify-center border-[1px] border-white w-10 h-10 rounded-full my-8 md:my-12">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
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