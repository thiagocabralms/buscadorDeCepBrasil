
function verificarCep() {

    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;


    const requisicao = new XMLHttpRequest();
    requisicao.open('GET', 'https://viacep.com.br/ws/' + input1 + input2 + '/json/');
    requisicao.send();

    requisicao.onload = function () {
        let obj = JSON.parse(this.responseText)

        let cep = obj.cep;
        let rua = obj.logradouro;
        let bairro = obj.bairro;
        let cidade = obj.localidade;
        let uf = obj.uf;

        if(cep === undefined){
            document.getElementById('text').innerHTML = "<h1>Por favor, digite um CEP válido!</h1>";
        return;
        }

        document.getElementById('text').innerHTML = "<h1>Encontramos o endereço solicitado!</h1>" + "CEP: " + cep + "<br>Rua: " + rua + "<br>Bairro: " + bairro + "<br> Cidade: " + cidade + "<br>UF: " + uf;
    }

    requisicao.onerror=function(){
        document.getElementById('text').innerHTML = "<h1>Não conseguimos encontrar o CEP</h1>"
    }
}   