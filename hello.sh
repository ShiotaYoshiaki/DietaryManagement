#!bin/bash

echo "これからgitの差分を参照します"

STATUS=` git status`

echo $STATUS

grep modified $STATUS

echo $SERCH

