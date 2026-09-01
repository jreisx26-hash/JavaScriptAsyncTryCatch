function fazerLogin(email, senha){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(email === "admin@gmail.com" && senha === "1234"){
                resolve({id: 1, nome: "administrador", email: email});
            }else{
                reject(new Error("E-mail ou senha incorretos"));
            }
        },1500)
    })
}

async function entrar() {
    try{
        console.log("Realizando login....");
        const ususario = await fazerLogin("admin@gmail.com","1234");
        console.log("Login realizado com sucesso");
        console.log("Bem vindo, ",usuario.nome)
    } catch (error) {
        console.log("Não foi possivel entrar");
        console.log(error.message)
    }
}

entrar()