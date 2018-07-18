#!/usr/bin/env node

var program = require('commander');
var List = require('../lib/List')

program
    // 获得版本
    .version(require('../package').version)
    .usage('<command> [options]');

program
    // .command('list <bucket>', '列出bucket中所有的图片')
    .command('list <bucket>')
    .alias('l')
    .description('搜索图片')
    .option('-p, --prefix [prefix]', '列举的文件前缀')
    .option('-m, --marker [string]', '上一次列举返回的位置标记，作为本次列举的起点信息')
    .option('-l, --limit [number]', '列举的文件前缀')
    .option('-d, --delimiter [string]', '指定目录分隔符')
    .action((bucket, options) => {
       new List(bucket, options).listPrefix()
    });



program.parse(process.argv);

// 如果什么都没输，直接显示 帮助
if (!process.argv.slice(2).length) {
    program.outputHelp();
}

