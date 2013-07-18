function load_content (){
    $(document).ready(function(){
        var nb_elem = $('div.content_to_load').length;
	$('div.content_to_load').each(function(){
            $(this).attr('class', 'content_loaded');
	    $(this).load($(this).attr('file'),
			 function(){ if (--nb_elem == 0){ load_content() } });
	});
    })
}

function expand_content(b){
 var expand = b.innerHTML == '+'?true:false;
 b.innerHTML = expand?'-':'+';
 var content_node = b.parentNode.lastElementChild.style.display = expand?'block':'none';
}

load_content();
$(document).ajaxStop(function(){ if (location.hash != '') location.hash = location.hash; });
