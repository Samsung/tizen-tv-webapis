const { widgetdata } = window.webapis;

const { getVersion, read, write, remove } = widgetdata;

module.exports = {
    getVersion,
    read,
    write,
    remove
};
