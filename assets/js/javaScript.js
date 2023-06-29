function main(){
    function criaHora(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR',{
            hour12:false,
            timeZone: 'GMT'
        });
    }
    console.log(criaHora(10))


    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
}
main();