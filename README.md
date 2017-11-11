# The Internet

```
npm install nativefier
$(npm bin)/nativefier --inject inject.js --name "The Internet" -p darwin -a x64 \
    $(grep url: inject.js | awk -F"'" '{print $2}' | head -n 1)
```
