
// No caso dando o comando     node .\           no terminal ele dara erro    

                //Aqui temos qu tormar cuidado Poeque queroemos enganar o TypeScript com esse ipo de converção
namespace casting {
    let idade: any = 25;
    (idade as number).toFixed();  // toFixed   adiciona casas decimais 
    (idade as string).length;
    (idade as string[]).forEach(x => {
        console.log(x);
    })

    let nome: string = 35 as unknown as String;   // Primeiro tem que convert para o    unknown    que signifca desconhecido
}