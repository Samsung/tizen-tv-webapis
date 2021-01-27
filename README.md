# tizen-tv-webapis

`tizen-tv-webapis` package is for supporting [Samsung TV Product API](https://developer.samsung.com/smarttv/develop/api-references/samsung-product-api-references.html) as `commonjs` style.
Now we are supporting it for Typescript developers.
Please note that, In order to use this pacakge, `@types/tizen-tv-webapis` is required.

## Supported APIs

-   [WebApi](https://developer.samsung.com/smarttv/develop/api-references/samsung-product-api-references/webapi-api.html)
-   [Adinfo](https://developer.samsung.com/smarttv/develop/api-references/samsung-product-api-references/adinfo-api.html)
-   [AppCommon](https://developer.samsung.com/smarttv/develop/api-references/samsung-product-api-references/appcommon-api.html)
-   [AVInfo](https://developer.samsung.com/smarttv/develop/api-references/samsung-product-api-references/avinfo-api.html)
-   [AVPlay](https://developer.samsung.com/smarttv/develop/api-references/samsung-product-api-references/avplay-api.html)
-   [AVPlayStore](https://developer.samsung.com/smarttv/develop/api-references/samsung-product-api-references/avplaystore-api.html)
-   [Billing](https://developer.samsung.com/smarttv/develop/api-references/samsung-product-api-references/billing-api.html)
-   [Network](https://developer.samsung.com/smarttv/develop/api-references/samsung-product-api-references/network-api.html)
-   [ProductInfo](https://developer.samsung.com/smarttv/develop/api-references/samsung-product-api-references/productinfo-api.html)
-   [Sso](https://developer.samsung.com/smarttv/develop/api-references/samsung-product-api-references/sso-api.html)
-   [TvInfo](https://developer.samsung.com/smarttv/develop/api-references/samsung-product-api-references/tvinfo-api.html)
-   [WidgetData](https://developer.samsung.com/smarttv/develop/api-references/samsung-product-api-references/widgetdata-api.html)

## How to use

-   Common js

```sh
npm install tizen-tv-webapis
```

```html
<!-- html -->
<script type="text/javascript" src="$WEBAPIS/webapis/webapis.js"></script>
```

```js
// js
const avinfo = require('tizen-tv-webapis');
const { getVersion, getDolbyDigitalCompMode, isHdrTvSupport } = avinfo;

getVersion();
```

-   Typescript

```sh
npm install tizen-tv-webapis
npm install @types/tizen-tv-webapis
```

```html
<!-- html -->
<script type="text/javascript" src="$WEBAPIS/webapis/webapis.js"></script>
```

```ts
// ts
import { avinfo } from 'tizen-tv-webapis';
const { getVersion, getDolbyDigitalCompMode, isHdrTvSupport } = avinfo;

getVersion();
```

## Enum usage

### v1.0.0

Modules were separated. Enums must have been imported from the each modules.

```ts
import {
    setScreenSaver,
    AppCommonScreenSaverState
} from 'tizen-tv-webapis/appcommon';

setScreenSaver(AppCommonScreenSaverState.SCREEN_SAVER_ON);
```

### v2.0.0

Modules have been integrated in index.d.ts. Enums can be simply imported from the 'tizen-tv-webapis'.

```ts
import { appcommon, AppCommonScreenSaverState } from 'tizen-tv-webapis';
const { setScreenSaver } = appcommon;

setScreenSaver(AppCommonScreenSaverState.SCREEN_SAVER_ON);
```

## Samples

We offer two samples for common js and typescript.

### Common js (webpack + babel-loader)

-   Path : `/samples/commonjs`
-   How to Run

1. Move to the path
2. npm install
3. npm run wits-init (To use WITs **Live reload feature**)
4. npm run start

### typescript (webpack + ts-loader)

-   Path : `/samples/typescript`
-   How to Run

1. Move to the path
2. npm install
3. npm run wits-init (To use WITs **Live reload feature**)
4. npm run start

```

```
