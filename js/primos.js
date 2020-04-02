primos();

function primos() {
    let tres = [false, false, false, false,
        true, false, true, false,
        false, true, false, true
    ];
    let sete = [false, false, false, false,
        true, false, false, false,
        false, false, false, false,
        false, false, false, true,
        false, false, false, false,
        false, true, false, false,
        false, false, true, false
    ];

    let primosList = [];
    let primosMultiplicado = [];
    let count3 = -1;
    let count7 = -1;
    let logCount = 1;
    let logText = "";
    var ultimoLog = "";

    //x é dezena
    dezena: for (let x = 1; x < 100; x++) {
        //final 1, 3, 7 e 9
        let final = [1, 3, 7, 9];
        unidade: for (let i = 0; i < final.length; i++) {
            //incrementa primeiro para evitar sair no if de comparacao
            if (++count3 >= tres.length) {
                count3 = 0;
            }
            if (++count7 >= sete.length) {
                count7 = 0;
            }
            if (tres[count3] || sete[count7]) {
                continue;
            }
            let primo = x * 10 + final[i];
            if (primosMultiplicado[x]) {
                for (let z = 0; z < primosMultiplicado[x].length; z++) {
                    if (primo == primosMultiplicado[x][z]) {
                        continue unidade;
                    }
                }
            }
            addPrimo(primo, x);
        }
        logResto();
    }

    logUltimo();

    function addPrimo(primo) {
        primosList.push(primo);
        addPrimoMultiplicado(primo * primo);
        
        for (let i = 0; i < primosList.length; i++) {
            if (primosList[i] == primo) {
                continue;
            }
            addPrimoMultiplicado(primo * primosList[i]);
        }
        log(primo);
    }

    function addPrimoMultiplicado(primoM) {
        let dezena = Math.floor(primoM / 10);
        if (!primosMultiplicado[dezena]) {
            primosMultiplicado[dezena] = [];
        }
        primosMultiplicado[dezena].push(primoM);
        // if (primosMultiplicado[dezena].indexOf(primoM) == -1) {
        //     primosMultiplicado[dezena].push(primoM);
        // }
    }
    
    function log(texto) {
        logText += texto + ", ";
    }

    function logResto() {
        logCount++;
        // console.log("[" + logCount + "] => " + logText.substr(0, logText.length - 2));
        if (logText.length > 0) {
            ultimoLog = "[" + logCount + "] => " + logText.substr(0, logText.length - 2);
        }
        logText = "";
    }

    function logUltimo() {
        logCount++;
        console.log(ultimoLog);
        logText = "";
    }
}