{(function(){if(!window.seznam_dispatchedRetargetingIds){window.seznam_dispatchedRetargetingIds=[];}var rtgId="";var category="";var itemId="";var pageType="";if(window.seznam_retargeting_id){rtgId=window.seznam_retargeting_id;}if(window.seznam_retargetingId){rtgId=window.seznam_retargetingId;}if(window.seznam_dispatchedRetargetingIds.indexOf(rtgId)>=0){return;}if(window.seznam_category){category=window.seznam_category;}if(window.seznam_itemId){itemId=window.seznam_itemId;}if(window.seznam_pagetype){pageType=window.seznam_pagetype;}if(rtgId){var src="//c.seznam.cz/retargeting?"+"id="+rtgId+"&category="+encodeURIComponent(category)+"&itemId="+encodeURIComponent(itemId)+"&url="+encodeURIComponent(location.href);if(pageType){src+="&pageType="+encodeURIComponent(pageType);}document.createElement("img").src=src;window.seznam_dispatchedRetargetingIds.push(rtgId);}})();}