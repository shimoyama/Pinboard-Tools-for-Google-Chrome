var pinboardUrl = "http://pinboard.in/add?";
var url;
var title;

function add_bookmark() {
	chrome.tabs.getSelected( null , function(tab) {
 		url = (tab.url);
 		title = (tab.title);
 		window.open(pinboardUrl + 'url=' + url + '&title=' + title +' ','Pinboard','toolbar=no,width=700,height=350');
	});
}

function add_later() {
	chrome.tabs.getSelected( null , function(tab) {
 		url = (tab.url);
 		title = (tab.title);
 		window.open(pinboardUrl + 'later=yes&noui=yes&jump=close&url=' + url + '&title=' + title +' ','Pinboard','toolbar=no,width=100,height=100');
	});
}

//sample popup URL from Pinboard:
//javascript:q=location.href;if(document.getSelection){d=document.getSelection();}else{d='';};p=document.title;void(open('http://pinboard.in/add?url='+encodeURIComponent(q)+'&description='+encodeURIComponent(d)+'&title='+encodeURIComponent(p),'Pinboard',%20'toolbar=no,width=700,height=350'));

//sample read later URL from Pinboard:
//javascript:q=location.href;p=document.title;void(t=open('http://pinboard.in/add?later=yes&noui=yes&jump=close&url='+encodeURIComponent(q)+'&title='+encodeURIComponent(p),'Pinboard','toolbar=no,width=100,height=100'));t.blur();