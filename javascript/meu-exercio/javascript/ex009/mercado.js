  // Esta area executará sempre que a página for carregada
  document.getElementById('resultado').style.visibility = "hidden"
  // Esta função só executará quando clicarmos no botão submit
  function reajuste(){
      let nome = document.getElementById('produto').value
      let pre = Number(document.getElementById("preco").value)
      let dezporc = (pre * 10)/100
      let novopre = pre - dezporc

      let saida = document.getElementById("saida")
      saida.innerHTML = `O produto ${nome} vai custar R$${novopre} na promoção de aniversário `
      document.getElementById('resultado').style.visibility = "visible"
      return false
  }