import png5 from '../../../public/images/png5.png'
import png6 from '../../../public/images/png6.png'
import png7 from '../../../public/images/png7.png'

const descriptions = [
    {
        id:1,
        image: png5,
        title: 'Assistência Residencial e mais benefícios para sua família',
        description: 'Serviços para a sua residência e para você, nós temos as melhores assistências. Oferecemos desde chaveiro, encanador e eletricista à nutricionista, atendimento psicológico e personal fitness.'
    },
    {
        id:2,
        image: png6,
        title: 'Tenha o Consultório Médico na palma da sua mão – Ilimitado!',
        description: 'Com a Telemedicina, onde aproximadamente 70% dos atendimentos são resolvidos em uma única consulta, você nem precisa sair de casa para ter um atendimento médico de qualidade.'
    },
    {
        id:3,
        image: png7,
        title: 'Seu Pet, nossa Prioridade.',
        description: 'Em caso de emergência para seu pet, nossa assistência oferece consulta veterinária, exames e medicamentos essenciais com nossa rede credenciada.'
    }
]

export const PetSection = () => {
    return (
        <div className='hidden xl:flex xl:flex-col xl:w-full xl:px-72 xl:mb-20'>
            <h3 className='text-black text-4xl text-center px-28'>Além das coberturas do seguro, você pode contar com serviços de assistência para o seu dia a dia e para o seu pet.</h3>
            <div className='flex gap-6'>
                {descriptions.map((item) =>
                    <div key={item.id} className=' flex  flex-col gap-3 w-1/3'>
                        <img src={item.image.src} className='w-full' />
                        <h4 className='text-black text-2xl font-bold'>{item.title}</h4>
                        <p className='text-gray-600 text-lg'>{item.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}