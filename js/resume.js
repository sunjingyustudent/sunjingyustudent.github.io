window.onload=function(){
	var active_left_ul=document.getElementById("active_left_ul");
	var active_right=document.getElementById("active_right");
	var li=active_left_ul.getElementsByTagName("li");
	var div=active_right.getElementsByTagName("div");

	 for (var i =0; i<li.length; i++) {
	 	li[i].index=i;
	 	li[i].onclick=function(){
	 		for(var j=0;j<li.length;j++){
	 			li[j].className="";
	 			div[j].className="";
	 		}
	 		this.className="new";
	 		div[this.index].className="no";
	 	}
	 }
}
