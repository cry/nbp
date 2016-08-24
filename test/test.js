var assert = require('assert'),
    NBP = require('../build/nbp.min.js'),
    fs = require('fs');

NBP.testInit();

describe('NBP.isCommonPassword', function() {
    it('should always return true for list mostcommon_100000', function() { this.timeout(0);
        var wordlist = fs.readFileSync('build_collection/top100000', 'utf8'),
            processed_wordlist = wordlist.split('\n');

        for (var i = processed_wordlist.length - 1; i >= 0; i--) {
            assert.equal(NBP.isCommonPassword(processed_wordlist[i]), true);
        };
    });

    it('should return less than 0.1%/0.001 false positives for randomly generated passwords', function() { this.timeout(0);
        var uuid = function() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0,v=c=='x'?r:r&0x3|0x8;return v.toString(16);});
        },
            false_count = 0,
            iterations = 10000;

        for (var i = iterations; i >= 0; i--) {
            var gen = uuid(),
                res = NBP.isCommonPassword(gen);

            if (res) {
                false_count++;

                //console.log(gen);

                if (false_count < iterations * 0.001) {
                    res = false;
                };

                //console.log(false_count);
            };
            assert.equal(res, false);
        };
    })
})