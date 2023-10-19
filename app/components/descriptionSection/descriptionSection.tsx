import png1 from '../../../public/images/png1.png'
import png2 from '../../../public/images/png2.png'
import png3 from '../../../public/images/png3.png'
import png4 from '../../../public/images/png4.png'
import { BotaoAtendimento } from '../ui/botaoAtendimento'

const descriptions = [
    {
        id:1,
        image: png1,
        title: 'Proteja seu futuro financeiro de imprevistos com Seguro de Invalidez por Acidente',
        description: 'Você receberá o valor total da cobertura, caso sofra alguma invalidez por acidente.'
    },
    {
        id:2,
        image: png2,
        title: 'Proteção para gastos inesperados de doenças graves',
        description: 'Cuide do seu presente e futuro financeiro caso receba o diagnóstico de alguma doença grave.'
    },
    {
        id:3,
        image: png3,
        title: 'Garanta o futuro dos seus benefíciarios com Cobertura de até 1 Milhão de Reais',
        description: 'Garanta que seus beneficiários recebam um valor em caso de Morte Natural ou Acidental.'
    },
    {
        id:4,
        image: png4,
        title: 'Assistência Funeral',
        description: 'Diante da perda, conte com um valor para ajudar no custeio de despesas funerárias.'
    }
]

export const DescriptionSection = () => {
    return (
        <div className="flex gap-10 w-full mb-44 pt-48">
            <div className="hidden lg:flex lg:flex-col lg:w-1/2 lg:gap-10 lg:px-20">
                <h4 className='text-gray-600'>SEGURO DE VIDA COM O MÁXIMO DE BENEFÍCIOS</h4>
                <h2 className='text-black text-4xl'>Proteja a sua Vida e o Futuro de Quem Você se Importa</h2>
                <p className='text-gray-600'>Os seguros de Vida da Maximídia são flexíveis e oferecem coberturas sob medida para você e sua família, proporcionando o máximo de benefícios. Além disso, incluem serviços de assistência modernos para simplificar o seu cotidiano.</p>
                <p className='text-gray-600'>Damos a você a liberdade de escolher as coberturas e assistências que melhor atendam às necessidades da sua família.</p>
                <div className='flex justify-center w-full'>
                    <div className='w-52 text-sm pt-6'>
                        <BotaoAtendimento name='SIMULE AGORA O SEU' />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center w-full lg:w-1/2 lg:px-20">
                <h4 className='text-gray-600'>SEGURO DE VIDA</h4>
                <h3 className='text-black text-3xl pb-10'>Coberturas para sua Tranquilidade</h3>
                {descriptions.map((item) =>
                    <div key={item.id} className='text-center'>
                        <img src={item.image.src} className='w-full px-20' />
                        <h4 className='text-black text-xl font-bold'>{item.title}</h4>
                        <p className='text-gray-600'>{item.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}