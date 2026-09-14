#!/bin/bash
# 部署到线上 /var/www/html/tools/iphone
cd /var/www/html/tools/ &&
if compgen -G "./iphone-*.zip" > /dev/null; then
    rm -Rf iphone/* &&
    mv iphone-*.zip iphone &&
    cd iphone &&
    unzip iphone-* &&
    rm -f iphone-*.zip
    echo 'iPhone deploy finished.'
else
    echo "iphone-*.zip 不存在"
fi
