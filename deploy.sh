#!/bin/bash
cd /usr/share/nginx/html/tools/ &&
rm -Rf iphone/* &&
mv iphone-* iphone &&
cd iphone &&
unzip iphone-* &&
rm -f iphone-*
echo 'iPhone deploy finished.'
