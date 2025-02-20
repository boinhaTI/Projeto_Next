export const Footer = () => {
    return(
        <footer className="bg-black text-white pb-4">
            
            
            <div className="flex items-center justify-between p-5">
                <div className="pl-10 text-3xl font-bold ">
                    NextJS
                </div>
                <div className="text-center">
                    <h3 className="mb-3 font-bold ">Horário de Funcionamento</h3>
                    <div className="grid grid-cols-2 items-center text-justify">
                        <p> Segunda : <i> 7:00 - 22:00 </i> </p>
                        <p> Quinta : <i> 7:00 - 22:00 </i> </p>
                        <p> Terça : <i> 7:00 - 22:00 </i> </p>
                        <p> Sexta : <i> 7:00 - 22:00 </i> </p>
                        <p> Quarta : <i> 7:00 - 22:00 </i> </p>
                        <p> Sábado : <i> 7:00am - 10:30 </i> </p>
                        
                    </div>
                </div>

                <div className="text-center pr-10">
                    <h3 className="mb-3 font-bold">Nossos Contatos</h3>
                    <div>
                        <p> <i></i> +11 8222-3333 </p>
                        <p> <i></i> sejafit@gmail.com </p>
                        <p> <i></i> Florianópolis, Brazil</p>
                        <div>
                        <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}