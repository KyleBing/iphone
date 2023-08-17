#!/bin/bash
cd /var/www/html/tools/ &&
rm -Rf iphone/* &&
mv iphone-*.zip iphone &&
cd iphone &&
unzip iphone-* &&
rm -f iphone-*.zip
echo 'iPhone deploy finished.'
