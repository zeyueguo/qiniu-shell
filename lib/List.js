const Base = require('./Base')
const { filterParameters, log, to } = require('../utils')

class List extends Base {
    constructor(params, options) {
        super(params, options)

        this.options = filterParameters(options, ["prefix", "marker", "limit", "delimiter"])
    }

    fetch() {
        return new Promise((resolve, reject) => {
            this.bucketManager.listPrefix(this.params, this.options, function (err, respBody, respInfo) {
                if (err) {
                    return reject[err]
                }

                if (respInfo.statusCode == 200) {

                    resolve([null, {
                        marker: respBody.marker,
                        commonPrefixes: respBody.commonPrefixes,
                        data: respBody.items.map(item => item.key),
                    }])

                } else {
                    // console.log(respInfo.statusCode);
                    // console.log(respBody);
                    reject[err, respBody];
                }
            })
        })
    }


    async listPrefix() {

        /**
         * @param options 列举操作的可选参数
         *          prefix    列举的文件前缀
         *          marker    上一次列举返回的位置标记，作为本次列举的起点信息
         *          limit     每次返回的最大列举文件数量
         *          delimiter 指定目录分隔符
         */

        const [error, result] = await to(this.fetch())

        if (error) {
            log(error, 'error')
            return false
        }

        console.log(result);
        return [ error, result ]

    }
}

module.exports = List