function clicoubotao(){
    let input_nome = document.querySelector('#nome');
    let input_idade = document.querySelector('#idade');
    if(input_nome.value==0 || input_idade.value==0){
        alert('Campo vazio!')
    }
    else{
    let text = document.createTextNode(`Olá ${input_nome.value}, que legal você por aqui!! Ao longo dos seus ${input_idade.value} anos você já se deu conta que a Matemática é a codificação da realidade? Olhe a sua volta, ela está em tudo.`);
    let h1 = document.querySelector('#bemvindo');
    h1.innerHTML="";
    h1.appendChild(text);
    
    }   

}