async function push(pathname, options) {
    console.info(`pathname: ${pathname}, recursive: ${options.recursive}`);
}

module.exports = (...args) => {
    push(...args).catch(err => {
        error(err);
        process.exit;
    });
}