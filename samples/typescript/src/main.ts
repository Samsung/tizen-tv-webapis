import { productinfo, appcommon } from 'tizen-tv-webapis';

const { getFirmware, getDuid, getModelCode } = productinfo;
const { setScreenSaver, AppCommonScreenSaverState } = appcommon;

window.onload = () => {
    updateInformation('firmware', getFirmware());
    updateInformation('duid', getDuid());
    updateInformation('modelcode', getModelCode());

    setScreenSaver(AppCommonScreenSaverState.SCREEN_SAVER_ON, () => {
        updateInformation(
            'screensaver',
            `ScreenSaver has turned on, parameter value is ${AppCommonScreenSaverState.SCREEN_SAVER_ON}`
        );
    });
};

function updateInformation(id: string, content: string) {
    const valueElement = document.getElementById(id);
    if (!valueElement) {
        return;
    }
    valueElement.innerHTML = content;
    console.log(content);
}
