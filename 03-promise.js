function prepararPedido(){
return new Promise((resolve, reject)=>{
    console.log("Preparando pedido ...........");

    setTimeout(()=>{
        const deuBom = false;
        if(deuBom){
            resolve("Hambúguer pronto!");
        }else{
            PromiseRejectionEvent("Deu erro ao preparar o hambúrguer")
        }

    },3000);
})
}

prepararPedido().then((resultado)=>{
console.log(resultado)
}).catch((erro)=>{
    console.log(erro)
})