function check(){
	var flag=false;
		var nodes=document.getElementsByTagName("*");
		for (var i = 0; i<nodes.length; i++) {
			var node=nodes[i];
			var pattern=node.getAttribute("pattern");
			if(pattern!=null){
				var msg=node.getAttribute("msg");
				var reg=new RegExp(pattern,"gi");
				if(reg.test(node.value)){
					node.nextSibling.innerHTML="√";
					node.nextSibling.innerHTML.style.color="green";
					flag=true;
				}else{
						node.nextSibling.innerHTML=msg;
						node.nextSibling.innerHTML.style.color="red";
						flag=false;
				}
			}
		}
		return flag;
}