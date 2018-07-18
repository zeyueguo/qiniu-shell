
const qiniu = require('qiniu')
const CONFIG = require('../config')




// const srcBucket = CONFIG.qiniu.bucket;
// // const srcKey = "test-logo-pre-release.png";
// const destBucket = CONFIG.qiniu.bucket;

class Base {
    constructor(params, options) {
        this.params = params
        this.options = options
        
        this.config = new qiniu.conf.Config();

        this.config.zone = qiniu.zone[CONFIG.zone]
        
        const mac = new qiniu.auth.digest.Mac(CONFIG.accessKey, CONFIG.secretKey);

        this.bucketManager = new qiniu.rs.BucketManager(mac, this.config);
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
    static sayHello(name){
        this.para = name;
        return 'Hello, ' + name;
    }
}

module.exports = Base