var NBP = (function() {

    var NBP         = {},
        LZString    = function(){function o(o,r){if(!t[o]){t[o]={};for(var n=0;n<o.length;n++)t[o][o.charAt(n)]=n}return t[o][r]}var r=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",t={},i={compressToBase64:function(o){if(null==o)return"";var r=i._compress(o,6,function(o){return n.charAt(o)});switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(r){return null==r?"":""==r?null:i._decompress(r.length,32,function(e){return o(n,r.charAt(e))})},compressToUTF16:function(o){return null==o?"":i._compress(o,15,function(o){return r(o+32)})+" "},decompressFromUTF16:function(o){return null==o?"":""==o?null:i._decompress(o.length,16384,function(r){return o.charCodeAt(r)-32})},compressToUint8Array:function(o){for(var r=i.compress(o),n=new Uint8Array(2*r.length),e=0,t=r.length;t>e;e++){var s=r.charCodeAt(e);n[2*e]=s>>>8,n[2*e+1]=s%256}return n},decompressFromUint8Array:function(o){if(null===o||void 0===o)return i.decompress(o);for(var n=new Array(o.length/2),e=0,t=n.length;t>e;e++)n[e]=256*o[2*e]+o[2*e+1];var s=[];return n.forEach(function(o){s.push(r(o))}),i.decompress(s.join(""))},compressToEncodedURIComponent:function(o){return null==o?"":i._compress(o,6,function(o){return e.charAt(o)})},decompressFromEncodedURIComponent:function(r){return null==r?"":""==r?null:(r=r.replace(/ /g,"+"),i._decompress(r.length,32,function(n){return o(e,r.charAt(n))}))},compress:function(o){return i._compress(o,16,function(o){return r(o)})},_compress:function(o,r,n){if(null==o)return"";var e,t,i,s={},p={},u="",c="",a="",l=2,f=3,h=2,d=[],m=0,v=0;for(i=0;i<o.length;i+=1)if(u=o.charAt(i),Object.prototype.hasOwnProperty.call(s,u)||(s[u]=f++,p[u]=!0),c=a+u,Object.prototype.hasOwnProperty.call(s,c))a=c;else{if(Object.prototype.hasOwnProperty.call(p,a)){if(a.charCodeAt(0)<256){for(e=0;h>e;e++)m<<=1,v==r-1?(v=0,d.push(n(m)),m=0):v++;for(t=a.charCodeAt(0),e=0;8>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;h>e;e++)m=m<<1|t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=a.charCodeAt(0),e=0;16>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}l--,0==l&&(l=Math.pow(2,h),h++),delete p[a]}else for(t=s[a],e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;l--,0==l&&(l=Math.pow(2,h),h++),s[c]=f++,a=String(u)}if(""!==a){if(Object.prototype.hasOwnProperty.call(p,a)){if(a.charCodeAt(0)<256){for(e=0;h>e;e++)m<<=1,v==r-1?(v=0,d.push(n(m)),m=0):v++;for(t=a.charCodeAt(0),e=0;8>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;h>e;e++)m=m<<1|t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=a.charCodeAt(0),e=0;16>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}l--,0==l&&(l=Math.pow(2,h),h++),delete p[a]}else for(t=s[a],e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;l--,0==l&&(l=Math.pow(2,h),h++)}for(t=2,e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;for(;;){if(m<<=1,v==r-1){d.push(n(m));break}v++}return d.join("")},decompress:function(o){return null==o?"":""==o?null:i._decompress(o.length,32768,function(r){return o.charCodeAt(r)})},_decompress:function(o,n,e){var t,i,s,p,u,c,a,l,f=[],h=4,d=4,m=3,v="",w=[],A={val:e(0),position:n,index:1};for(i=0;3>i;i+=1)f[i]=i;for(p=0,c=Math.pow(2,2),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;switch(t=p){case 0:for(p=0,c=Math.pow(2,8),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;l=r(p);break;case 1:for(p=0,c=Math.pow(2,16),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;l=r(p);break;case 2:return""}for(f[3]=l,s=l,w.push(l);;){if(A.index>o)return"";for(p=0,c=Math.pow(2,m),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;switch(l=p){case 0:for(p=0,c=Math.pow(2,8),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;f[d++]=r(p),l=d-1,h--;break;case 1:for(p=0,c=Math.pow(2,16),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;f[d++]=r(p),l=d-1,h--;break;case 2:return w.join("")}if(0==h&&(h=Math.pow(2,m),m++),f[l])v=f[l];else{if(l!==d)return null;v=s+s.charAt(0)}w.push(v),f[d++]=s+v.charAt(0),h--,s=v,0==h&&(h=Math.pow(2,m),m++)}}};return i}();"function"==typeof define&&define.amd?define(function(){return LZString}):"undefined"!=typeof module&&null!=module&&(module.exports=LZString),
        bloom       = {
            initalized:         false,
            hashRounds:         null,
            bitArray:           null,
            bitArrayLength:     null
        },
        initState   = false;

    /*
     * Bloom filter functions
     */

    bloom.hashes = {
        djb2: function(str) {
            var hash = 5381;

            for (var len = str.length, count = 0; count < len; count++) {
                hash = hash * 33 ^ str.charCodeAt(count);   
            };

            return (hash >>> 0) % bloom.bitArrayLength;
        },
        sdbm: function(str) {
            var hash = 0;

            for (var len = str.length, count = 0; count < len; count++) {
                hash = str.charCodeAt(count) + (hash << 6) + (hash << 16) - hash;
            };

            return (hash >>> 0) % bloom.bitArrayLength;
        },
        getIndices: function(str) {

            var hashes = [];

            hashes.push(this.djb2(str));
            hashes.push(this.sdbm(str));

            for (var round = 2; round <= bloom.hashRounds; round++) {
                var new_hash = (hashes[0] + (round * hashes[1]) + (round^2)) % bloom.bitArrayLength;

                hashes.push(new_hash);
            };

            return hashes;

        }
    };

    bloom.init = function(contents, listLength) { 

        var raw_data = LZString.decompressFromUTF16(contents),
            data = raw_data.split(',');

            bloom.bitArrayLength = data.length * 8;

            bloom.hashRounds = Math.round(Math.log(2.0) * bloom.bitArrayLength / listLength);

            bloom.bitArray = new Uint8Array(data);

            bloom.initalized = true;

    };

    bloom.checkEntry = function(str) {

        if (!bloom.initalized) {
            throw new Error("[NBP] Bloom filter has not been initalized, cannot run.");
        };

        var indices = bloom.hashes.getIndices(str);

            for (var i = indices.length - 1; i >= 0; i--) {
                var extra_indices = indices[i] % 8,
                    index = (indices[i] - extra_indices) / 8;

                if (extra_indices != 0 && (bloom.bitArray[index] & (128 >> (extra_indices - 1))) == 0) {
                    return false;
                } else if (extra_indices == 0 && (bloom.bitArray[index] & 1) == 0) {
                    return false;
                }
            };

            return true;
    }

    /*
     * NBP functions
     */ 

    NBP.debug = {
        bloom: bloom
    };

    NBP.init = function(wordlist = "mostcommon_10000", path="collections/", cache = true) {

        var wordlistSplit = wordlist.split("_"),
            wordlistLength = wordlistSplit[wordlistSplit.length - 1];

        if (typeof wordlistLength === "number") {
            console.error('[NBP] Provided wordlist file must match the format [list description]_[list length]');
            console.error('i.e. mostcommon_10000');

            return false;
        };

        if (path.slice(-1) !== '/') {
            path += '/';
        };

        if (typeof localStorage[`NBP_${wordlist}`] !== "undefined" && cache) {
            bloom.init(localStorage[`NBP_${wordlist}`], wordlistLength);
        };

        var ajax = new XMLHttpRequest(),
            bloom_contents = "";

        ajax.onreadystatechange = function() {
            if (ajax.readyState === XMLHttpRequest.DONE) {
                if (ajax.status === 200) {

                    bloom_contents = ajax.responseText;

                    if (cache) {
                        localStorage[`NBP_${wordlist}`] = bloom_contents;
                    };

                    bloom.init(bloom_contents, wordlistLength);

                    initState = true;

                } else {
                    console.error(`[NBP] Error retrieving bloom contents. Error code: ${ajax.status}`);
                    console.error(`[NBP] Ensure that the word list is located at ${path}${wordlist}`);
                    console.error(`[NBP] Additionally, file must match the format [list description]_[list length]`);
                }
            };
        };

        ajax.open('GET', `${path}${wordlist}`, true);
        ajax.send(null);

    };

    NBP.isCommonPassword = function(password) {
        return bloom.checkEntry(password);
    };

    return NBP;

})();