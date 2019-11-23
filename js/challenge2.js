$("#useBilling").click(function(){

	if (this.checked){
		$("#home").val($("#billing").val());
		$("#home").attr("disabled", true);
		}
	else {
		$("#home").val("");
		$("#home").attr("disabled", false);
	}
	}
	)