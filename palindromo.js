function ehpalindromo(text){    
    text = text.replace(/ /g, "");
    console.log(text);
    for(let i=0; i<text.length; i++){
        if(text[i] !== text[text.length -1 -i]){
            return 'Nao eh palindromo';
        }
    }
   return 'Eh palindromo';
}
console.log(ehpalindromo('socorram me subi no onibus em marrocs'));