import logo from '../../../public/images/logoVermelho.png'

export const Footer = () => {
    return (
        <footer className="bg-zinc-800 p-8 text-gray-300">
            <div className='flex flex-col lg:flex-row py-14'>
                <div className='flex flex-col w-full lg:w-3/6'>
                    <img src={logo.src} className='w-36'/>
                    <p className='w-2/3 leading-loose py-10 xl:w-3/6'>Somos uma corretora especializada na venda de Seguros de Vida. Desde 1996, oferecemos um modelo único de comercialização: focado, simples, direto e prático, e que nos possibilitou conquistar clientes nos quatro cantos do Brasil.</p>
                </div>
                <div className='flex w-full gap-5 pt-20 lg:w-3/6 lg:pt-0'>
                    <div className='flex flex-col w-1/2 gap-4'>
                        <span className='text-gray-500'>LGPD e Privacidade</span>
                        <span>Politica de Privacidade</span>
                    </div>
                    <div className='flex flex-col w-1/2 gap-4'>
                        <span>Endereço: Avenida Júlio de Castilhos, 505, 14º Andar - Centro Histórico - Porto Alegre/RS</span>
                        <span>Telefone: (51)3123-3100</span>
                        <span>Email: atendimento@maximidia.com</span>
                    </div>
                </div>
            </div>
            <p className='text-gray-500'>© 2023 Maximídia. Maximídia</p>
        </footer>

    );
}