document.addEventListener("DOMContentLoaded", () => {

  const cpfInput = document.getElementById("cpf");
  const telefoneInput = document.getElementById("telefone");
  const cepInput = document.getElementById("cep");

  function aplicarMascara(input, mascara) {
    input.addEventListener("input", () => {
      let valor = input.value.replace(/\D/g, "");
      let novoValor = "";
      let indice = 0;

      for (let i = 0; i < mascara.length && indice < valor.length; i++) {
        if (mascara[i] === "#") {
          novoValor += valor[indice];
          indice++;
        } else {
          novoValor += mascara[i];
        }
      }
      input.value = novoValor;
    });
  }

  if (cpfInput) aplicarMascara(cpfInput, "###.###.###-##");
  if (telefoneInput) aplicarMascara(telefoneInput, "(##) #####-####");
  if (cepInput) aplicarMascara(cepInput, "#####-###");

});


