import maxi from '../../../public/images/maxi.png'

const Testimonials = [
    {
        id:1,
        image: maxi,
        name: 'Fabricio Silva',
        source: 'Comentario do Google',
        description: 'Faz parte das nossas tradições. Estabelecimento dirigido por gente da nossa ilha, do lugar . Poucas que permanecem nesse estilo.'
    },
    {
        id:2,
        image: maxi,
        name: 'Fabricio Silva',
        source: 'Comentario do Google',
        description: 'Faz parte das nossas tradições. Estabelecimento dirigido por gente da nossa ilha, do lugar . Poucas que permanecem nesse estilo.'
    },
    {
        id:3,
        image: maxi,
        name: 'Fabricio Silva',
        source: 'Comentario do Google',
        description: 'Faz parte das nossas tradições. Estabelecimento dirigido por gente da nossa ilha, do lugar . Poucas que permanecem nesse estilo.'
    },
    {
        id:4,
        image: maxi,
        name: 'Fabricio Silva',
        source: 'Comentario do Google',
        description: 'Faz parte das nossas tradições. Estabelecimento dirigido por gente da nossa ilha, do lugar . Poucas que permanecem nesse estilo.'
    },
]

export const CarouselSection = () => {
    return (
        <div className="bg-[url('/images/fundoCarousel.jpg')] bg-cover bg-top overflow-x-hidden">
            <div className="flex flex-col gap-10 items-center bg-red-600/70 w-full h-full py-16 md:py-20">
                <h4 className="text-xl">DEPOIMENTOS: SOLIDEZ E CONFIABILIDADE</h4>
                <div className='flex flex-nowrap justify-center gap-8'>
                    {Testimonials.map((item) => 
                    <div key={item.id} className="flex flex-col w-[400px] md:w-[750px] bg-white rounded-md p-8">
                        <div className="flex w-full">
                            <img src={item.image.src} className='w-1/5' />
                            <div className="flex flex-col justify-center">
                                <h5 className="text-black">{item.name}</h5>
                                <p className="text-gray-500">{item.source}</p>
                            </div>
                        </div>
                        <p className="text-black italic py-6">
                            "{item.description}"
                        </p>
                    </div>
                    )}
                </div>
                <div className="flex w-full justify-center gap-5">
                    <span className="flex justify-center items-center w-10 h-10 bg-white text-black text-xl font-bold rounded-full">
                        ←
                    </span>
                    <span className="flex justify-center items-center w-10 h-10 bg-white text-black text-xl font-bold rounded-full">
                        →
                    </span>
                </div>
            </div>
        </div>
    );
}