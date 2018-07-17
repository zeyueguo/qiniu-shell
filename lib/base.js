
const qiniu = require('qiniu')
const CONFIG = require('../../config')
const config = new qiniu.conf.Config();

// // 空间对应的机房
config.zone = qiniu.zone[CONFIG.qiniu.zone]

const mac = new qiniu.auth.digest.Mac(CONFIG.qiniu.accessKey, CONFIG.qiniu.secretKey);

const bucketManager = new qiniu.rs.BucketManager(mac, config);

// const srcBucket = CONFIG.qiniu.bucket;
// // const srcKey = "test-logo-pre-release.png";
// const destBucket = CONFIG.qiniu.bucket;

class QiNiu {
    constructor() {
       
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
    static sayHello(name){
        this.para = name;
        return 'Hello, ' + name;
    }
}