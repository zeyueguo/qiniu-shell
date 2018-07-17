#!/usr/bin/env node

var program = require('commander');

program
    // 获得版本
    .version(require('../package').version)
    .usage('<command> [options]');

program
    .command('download <pathname>')
    .description('下载图片')
    .option('-r, --recursive', '扫描当前文件下所有图片')
    .action((pathname, cmd) => {
        require('../lib/push')(pathname, cmd)
    });

program.parse(process.argv);

// 如果什么都没输，直接显示 帮助
if (!process.argv.slice(2).length) {
    program.outputHelp();
}

