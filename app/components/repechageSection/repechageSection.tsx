import fotoMaxi from '../../../public/images/fotoMaxi.png'
import { BotaoAtendimento } from '../ui/botaoAtendimento';

export const RepechageSection = () => {
    return (
        <div className="flex w-full">
            <div className="hidden lg:flex w-1/2">
                <img src={fotoMaxi.src} className='w-full' />
            </div>
            <div className="flex flex-col gap-8 lg:w-1/2 text-center p-20">
                <h2 className='text-gray-900 text-4xl lg:text-black lg:text-5xl'>Desfrute de um Seguro com Benefícios para a sua Vida agora mesmo.</h2>
                <h4 className='text-gray-700 text-xl'>Seguros sem burocracia, com preços justos e benefícios para você, sua família e seu pet em vida.</h4>
                <div className='flex justify-center w-full'>
                    <div className='w-1/3'>
                        <BotaoAtendimento name='SOLICITAR ATENDIMENTO' />
                    </div>
                </div>
            </div>
        </div>
    );
}