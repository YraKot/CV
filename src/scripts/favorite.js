function rudr_favorite(a) {
    var pageTitle = document.title;
    var pageURL = document.location;
    
    try {
        eval("window.external.AddFa-vorite(pageURL, pageTitle)".replace(/-/g, ''));
    }
    catch (e) {
        try {
            // Mozilla Firefox solution
            window.sidebar.addPanel(pageTitle, pageURL, "");
        }
        catch (e) {
            // Opera solution
            if (typeof (opera) == "object") {
                a.rel = "sidebar";
                a.title = pageTitle;
                a.url = pageURL;
                return true;
            } else {
                // The rest browsers (i.e Chrome, Safari)
                alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D to bookmark this page.');
            }
        }
    }
    return false;
}

export default rudr_favorite;