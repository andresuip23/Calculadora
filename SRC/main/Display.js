class Display{
    // constructor con los numeros
    constructor(displayValoractual,displayValoranterior){
        this.displayValoractual = displayValoractual;
        this.displayValoranterior= displayValoranterior;
        this.calc = new calculadora();
        this.tipoOperacion = "";
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos={
            multiplicar: '*',
            dividir: '%',
            sumar:'+',
            restar: '-'
        }
    }
    // metodo para barrar valor anterior
    borrar(){
        // se le hace un slice de 0 -1 que seria su ultimo valor
        this.valorActual = this.valorActual.toString().slice(0,-1);
        // igualmente se ejcuta para refrescar la impresion
        this.imprimirvalor();
    }
    // metodo para borrar todo
    borrarTodo(){
        this.valorActual =  this.valorActual.toString().substring(0,0);
        this.valorAnterior =  this.valorAnterior.toString().substring(0,0);
        this.tipoOperacion = "";
        this.imprimirvalor();


    }

    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual;
        this.valorActual = "";
        this.imprimirvalor();

    }
    // metodo para agregar un numero recibe como argumento num que es el innerhtml del event listener
    agregarNumero(num){
        // para no repetir el . mas de 1 vez
        if(num === "." && this.valorActual.includes('.'))return 
        // se le asigana a valor actual y para que se junten se suman concatenaciones
        this.valorActual = this.valorActual.toString() + num.toString();
        // se ejucuta el otro metodo que es para mostrar el valor
        this.imprimirvalor();
    }
    // metodo para imprimir los numeros
    imprimirvalor(){
        // el display actual se le asigna en su text content this valor actual  
      this.displayValoractual.textContent = this.valorActual;
      this.displayValoranterior.textContent = `${this.valorAnterior}${this.signos[this.tipoOperacion]||"" }`;
      
      
    }
    calcular(){
        const valoranterior = parseFloat(this.valorAnterior);
        const valoractual = parseFloat(this.valorActual);
        if( isNaN(valoractual) || isNaN(valoranterior)) return
        this.valorActual = this.calc[this.tipoOperacion](valoranterior,valoractual);

    }
}