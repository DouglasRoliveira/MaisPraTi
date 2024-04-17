const prompt = require("prompt-sync")()

// 01: Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.
function converterTemperatura() {
    let tempAConverter = parseInt(prompt("Digite a temperatura a converter: "))
    
    if(tempAConverter !== tempAConverter) {
        console.log("Deves digitar apenas numeros.")
        return
    }
    
    tempAConverter = (tempAConverter * (9/5)) + 32
    
    console.log(tempAConverter)
}
// converterTemperatura()


// 02: Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.
function infoEleicao() {
    debugger
    let totalEleitores = parseInt(prompt("Digite a quantidade de eleitores: "))
    let totalBrancos = parseInt(prompt("Digite a quantidade de votos branco: "))
    let totalNulos = parseInt(prompt("Digite a quantidade de votos nulo: "))
    let totalValidos = parseInt(prompt("Digite a quantidade de votos validos: "))

    if(totalEleitores !== totalEleitores || totalBrancos !== totalBrancos || totalNulos !== totalNulos || totalValidos !== totalValidos) {
        console.log("Todos os campos de entrada de dados devem conter apenas numeros.")
        let novamente = prompt("Quer tentar novamente? (s / n)")
        if(novamente == "s") {
            infoEleicao()
            return
        } else {
            return
        }
    }

    let percValidos = (totalValidos / totalEleitores) * 100
    let percBrancos = (totalBrancos /totalEleitores) * 100
    let percNulos = (totalNulos / totalEleitores) * 100

    console.log(`${percValidos}% dos votos foram validos.`)
    console.log(`${percBrancos}% votaram branco.`)
    console.log(`${percNulos}% votaram nulo.`)
}
// infoEleicao()


// 03: Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações: I - Some 25 ao primeiro inteiro; II - Triplique o valor do segundo inteiro; III - Modifique o valor do terceiro inteiro para 12% do valor original; IV - Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou) dos primeiros três inteiros.
function operacoesEmNumeros() {
    let n0 = parseInt(prompt("Digite o primeiro numero: "))
    let n1 = parseInt(prompt("Digite o segundo numero: "))
    let n2 = parseInt(prompt("Digite o terceiro numero: "))
    let n3

    n3 = n0 + n1 + n2

    n0 += 25
    n1 *= 3
    n2 = (n2 / 100) * 12

    console.log("Somado 25 ao primeiro numero: ", n0)
    console.log("Triplicado o segundo numero: ", n1)
    console.log("12% do terceiro numero:", n2)
    console.log("Soma dos 3 numeros originais: ", n3)
}
// operacoesEmNumeros()


// 04: Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre, calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação).
function notaMedia() {
    let nota0 = parseInt(prompt("Digite a primeira nota do aluno: "))
    let nota1 = parseInt(prompt("Digite a segunda nota do aluno: "))
    let media = (nota0 + nota1) / 2

    if(media !== media) {
        console.log("Deves digitar apenas numeros")
    } else if(media >= 6) {
        console.log("PARABÉNS! Você foi aprovado. 🎉🎉🎉")
    } else {
        console.log("Infelizmente você não foi aprovado. Estude mais.")
    }
}
// 05: Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a média calculada seja menor que 6,0

// notaMedia()


// 06: Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero. Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B; I - Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C); II - Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C); III - Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
function verificaTriângulo() {
    // Recebe os dados
    let lado1 = parseInt(prompt("Digite o lado 1: "))
    let lado2 = parseInt(prompt("Digite o lado 2: "))
    let lado3 = parseInt(prompt("Digite o lado 3: "))

    // Verifica se todos são numeros
    if(lado1 !== lado1 || lado2 !== lado2 || lado3 !== lado3) {
        console.log("Deves digitar apenas numeros.")
        return
    }

    let eTriangulo
    let tipoTriangulo

    // Verifica se é um triângulo
    if(lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
        eTriangulo = true
    } else {
        eTriangulo = false
    }
    
    // Se for triãngulo, verifica qual tipo é.
    if(eTriangulo == true) {
        if(lado1 == lado2 && lado2 == lado3) {
            tipoTriangulo = "equilátero"
        } else if((lado1 < lado2 || lado1 > lado2) && (lado2 < lado3 || lado2 > lado3)) {
            tipoTriangulo = "escaleno"
        } else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
            tipoTriangulo = "isósceles"
        }
        console.log(`É um triângulo do tipo ${tipoTriangulo}.`)
    } else {
        console.log("Não é um triângulo.")
    }
}
// verificaTriângulo()


// 07: As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
function macasComprada() {
    let nMacasCompradas = parseInt(prompt("Quantas maçãs deseja comprar? "))
    let precoTotal

    if(nMacasCompradas < 12 && nMacasCompradas > 0) {
        precoTotal = nMacasCompradas * 0.30
    } else if(nMacasCompradas >= 12) {
        precoTotal = nMacasCompradas * 0.25
    } else {
        console.log("Impossivel comprar 0 ou quantidade negativa.")
    }
    if(precoTotal) {
        console.log(`O preço total da compra de ${nMacasCompradas} maçãs é de R$${precoTotal}`)
    }
}
// macasComprada()


// 08: Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.
function ordemCrescente() {
    let n1 = parseInt(prompt("Digite o valor 1: "))
    let n2 = parseInt(prompt("Digite o valor 2: "))

    if(n1 > n2) {
        console.log(n2, n1)
    } else {
        console.log(n1, n2)
    }
}
// ordemCrescente()


// 09: 9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região do mesmo, conforme a tabela abaixo:
// 1 - Sul; 2 - Norte; 3 - Leste; 4 - Oeste; 5 ou 6 - Nordeste; 7, 8 ou 9 - Sudeste; 10 até 20 - Centro-Oeste; 25 até 50 - Nordeste; Fora dos intervalos - Produto Importado.
function regiaoProduto() {
    let codigoRegiao = parseInt(prompt("Digite o código da região: "))

    let regiao
    if(codigoRegiao == 1) {
        regiao = "Sul"
    } else if(codigoRegiao == 2) {
        regiao = "Norte"
    } else if(codigoRegiao == 3) {
        regiao = "Leste"
    } else if(codigoRegiao == 4) {
        regiao = "Oeste"
    } else if(codigoRegiao == 5 || codigoRegiao == 6) {
        regiao = "Nordeste"
    } else if(codigoRegiao >= 7 && codigoRegiao <= 9) {
        regiao = "Sudeste"
    } else if(codigoRegiao >= 10 && codigoRegiao <= 20) {
        regiao = "Centro-Oeste"
    } else if(codigoRegiao >= 25 && codigoRegiao <= 50) {
        regiao = "Nordeste"
    } else {
        regiao = "Produto importado."
    }
    console.log(regiao)
}
// regiaoProduto()


// 10: Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
function escreve10() {
    let n = parseInt(prompt("Digite um numero: "))

    for(let i = 0; i <= 9; i++) {
        console.log(n)
    }
}
// escreve10()


// 11: Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou NEGATIVO.
function imparpar() {
    let val = parseInt(prompt("Digite um numero: "))
    while(val) {
        if(val < 0) {
            break
        } else if(val % 2 == 0) {
            console.log("É par!")
        } else {
            console.log("É impar!")
        }
        val = parseInt(prompt("Digite um numero: "))
    }
}
// imparpar()


// 12: Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que, divididos por 11, dão resto igual a 5.
function por_que() {
    for(let i = 1000; i < 2000; i++) {
        if(i % 11 === 5) {
            console.log(i)
        }
    }
}
// por_que()


// 13: Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles, calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma: I - 1 x N = N; II - 2 x N = N; III - 3 x N = N.
function tabuada() {
    for(let i = 0; i < 5; i++) {
        let n = parseInt(prompt("Digite um numero: "))
        if(n !== n) {
            console.log("Deves digitar apenas numeros. Pulou para a proxima repetição.")
        }
        for(let j = 0; j <= n; j++) {
            console.log(`${j} x ${n} = ${j * n}`)
        }
    }
}
// tabuada()


// 14: Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
function mediaN() {
    let n = parseInt(prompt("Digite um numero: "))
    let somaTudo = 0
    let qtdN = 0
    let media = 0

    if(n !== n || n == undefined) {
        console.log("Deves digitar apenas numeros")
        console.log("A media até o erro era de: ", media)
        return
    }
    while(n > 0) {
        somaTudo += n
        qtdN++
        media = somaTudo / qtdN

        n = parseInt(prompt("Digite um numero: "))
        if(n !== n || n == undefined) {
            console.log("Deves digitar apenas numeros")
            break
        }
    }
    console.log(`A media dos ${qtdN} numeros passados é ${media}`)
}
// mediaN()


// 15: Fazer um algoritmos para receber um número decimal e o peso de cada número até que o usuário digite o número 0. Fazer a média ponderada desses números e pesos respectivos.
function mediaPonderada() {
    console.log("Digite 0 para sair do loop.")
    let n = parseFloat(prompt("Digite um numero: "))
    let peso = parseFloat(prompt("Digite o peso daquele numero: "))
    let divisor = 0
    let dividendo = 0
    let media = 0
    
    while(n > 0 || peso > 0) {
        dividendo += n * peso
        divisor += peso
        media = dividendo / divisor
        
        n = parseFloat(prompt("Digite um numero: "))
        
        if((n !== n || n == undefined)) {
            console.log("Deves digitar apenas numero.")
            break
        } else if(n == 0) break

        peso = parseFloat(prompt("Digite o peso daquele numero: "))
        
        if(peso !== peso || peso == undefined) {
            console.log("Deves digitar apenas numero.")
            break
        } else if(n == 0) break
    }
    console.log(`A média aritmetica ponderada é ${media}`)
}
// mediaPonderada()


// 16: Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100. Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
function imprimirPrimo() {
    let qtdPrimo = 0
    let i = 100

    while(qtdPrimo <= 5000) {
        let ePrimo = true

        let j = 2
        while(j <= (i / 2) + 1) {
            if(i % j == 0) {
                ePrimo = false
            }
            j++
        }
        if(ePrimo === true) {
            console.log(i)
            qtdPrimo++
        }
        i++
    }
}
// imprimirPrimo()
