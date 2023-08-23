$(document).ready(function(){
	// Primeiro Prduto
$("#produto01").mask('000000000000000000', {reverse: true});
	$("#produto01").keyup(function(){
		var qtd = $("#produto01").val();
		var result = parseInt(qtd) * 60;
		if (result > "0") {
			$("#preco01").text(result.toLocaleString()+",00");
		}else{
			$("#preco01").text("60,00");
		}
		
	});
	// Segundo Produto

	$("#produto02").mask('000000000000000000', {reverse: true});
	$("#produto02").keyup(function(){
		var qtd = $("#produto02").val();
		var result = parseInt(qtd) * 50;
		if (result > "0") {
			$("#preco02").text(result.toLocaleString()+",00");
		}else{
			$("#preco02").text("50,00");
		}
		
	});
	//Terceiro Produto

	$("#produto03").mask('000000000000000000', {reverse: true});
	$("#produto03").keyup(function(){
		var qtd = $("#produto03").val();
		var result = parseInt(qtd) * 70;
		if (result > "0") {
			$("#preco03").text(result.toLocaleString() +",00");
		}else{
			$("#preco03").text("70,00");
		}
		
	});
	//Quarto Produto

	$("#produto04").mask('000000000000000000', {reverse: true});
	$("#produto04").keyup(function(){
		var qtd = $("#produto04").val();
		var result = parseInt(qtd) * 180;
		if (result > "0") {
			$("#preco04").text(result.toLocaleString() +",00");
		}else{
			$("#preco04").text("180,00");
		}
		
	});
	// Quinto Produto
	$("#produto05").mask('000000000000000000', {reverse: true});
	$("#produto05").keyup(function(){
		var qtd = $("#produto05").val();
		var result = parseInt(qtd) * 190;
		if (result > "0") {
			$("#preco05").text(result.toLocaleString() +",00");
		}else{
			$("#preco05").text("190,00");
		}
		
	});

	$(document).keyup(function(){
		var pro01 = parseInt($("#produto01").val()) * 60;
		var pro02 = parseInt($("#produto02").val()) * 50;
		var pro03 = parseInt($("#produto03").val()) * 70;
		var pro04 = parseInt($("#produto04").val()) * 180;
		var pro05 = parseInt($("#produto05").val()) * 190;
		
		var tot = pro01+ pro02 + pro03 + pro03 + pro04 +pro05;

		if (tot > "0") {
			$("#valtot").text("Valor Total R$: " + tot.toLocaleString() + ",00");
		}
	});
	
});