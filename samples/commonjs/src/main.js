import { productinfo } from 'tizen-tv-webapis';

const { getFirmware, getDuid, getModelCode } = productinfo;

window.onload = () => {
    updateInformation('firmware', getFirmware());
    updateInformation('duid', getDuid());
    updateInformation('modelcode', getModelCode());
};

function updateInformation(id, content) {
    if (typeof id !== 'string' && typeof content !== 'string') {
        return;
    }
    document.getElementById(id).innerText = content;
    console.log(content);
}
