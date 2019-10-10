/**
 * 正则匹配url search
 */
export function expSearch() {
    const searchStr = window.location.search.substr(1).split('&')
    if (searchStr == "") return {};
    var val = {};
    for (let i = 0; i < searchStr.length; ++i) {
        let p = searchStr[i].split('=');
        if (p.length != 2) continue;
        val[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return val;
}