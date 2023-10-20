type Prop = {
    name: string,
}

export const BotaoAtendimento = (name : Prop) => {
    return(
        <div className="bg-red-600 rounded-md text-center py-4 cursor-pointer transition-all hover:-translate-y-[2px] hover:shadow-2xl">
            {name.name}
        </div>
    );
}