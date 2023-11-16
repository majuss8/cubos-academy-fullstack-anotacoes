{
const ingresso = false;
const censura = 16;
const idade = 16;

if (ingresso === true){
    if(idade >= censura){
        console.log("Pode entrar");
    }else{
        console.log("Não pode entrar devido a censura");
    }
}else{
    console.log("Não pode entrar devida a falta de ingresso");
}
}

{
const ingresso = true;
const censura = 16;
const idade = 18;

if(ingresso === true && idade >= censura){
    console.log("Pode entrar");
}else{
    console.log("Não pode entrar");
}

}

{

const ingresso = true;
const censura = 16;
const idade = 15;
const autorizacao = true;

if(ingresso && idade >= censura || autorizacao){
    console.log("Pode entrar");
}else{
    console.log("Não pode entrar");
}

}