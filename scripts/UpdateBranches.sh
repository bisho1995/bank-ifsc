#!/bin/bash
# Script written by Bisvarup Mukherjee 10/03/2019

array=(react angular)

# First push to master branch
git push origin master

# Then for all the branches. Merge the branch with
# master and push it to the respective branch
# at last checkout to master
for item in ${array[*]}
do
    git checkout $item
    git merge master --no-edit
    git push origin $item
done

git checkout master
