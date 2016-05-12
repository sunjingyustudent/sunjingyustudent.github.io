/*window.onload=function(){
	var $id = function(id){return document.getElementById(id);}
    var color_range=$id("color_range");
	var text_box=$id("test_box");
	var scale_range=$id("scale_range");
	var btn = $id("btn");
	var function_select=$id("function_select");
	var content_control_trandform=$id("content_control_trandform");
	var content_control_border=$id("content_control_border");
	var variant = {
		scale: 0,
		color: "#eee"
	}
	function_select.onchange=function(){
		switch(this.selectedIndex){
			case 0:content_control_trandform.style.display="block";
					content_control_border.style.display="none";break;
			case 1:content_control_trandform.style.display="none";
					content_control_border.style.display="block";break;		
	}
	scale_range.oninput = function (){
		variant.scale=scale_range.value;
	
	}
	
	color_range.onchange = function(){
		variant.color=color_range.value;
	}

	btn.onclick = function(){
		text_box.style.cssText="transform:scale("+variant.scale+") rotate(30deg);";
		text_box.style.backgroundColor=variant.color;
	}
	
}*/