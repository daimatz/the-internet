# The Internet

[![Build Status](https://travis-ci.org/daimatz/the-internet.svg?branch=master)](https://travis-ci.org/daimatz/the-internet)

```
npm install nativefier@7.5.4
$(npm bin)/nativefier \
    --internal-urls '"('$(grep url: inject.js | awk -F"'" '{print $2}' | tr '\n' '\|')')"' \
    --inject inject.js --name "The Internet" -p darwin -a x64 \
    $(grep url: inject.js | awk -F"'" '{print $2}' | head -n 1)
```
