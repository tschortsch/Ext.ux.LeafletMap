#!/bin/bash
cd ..
version=`git describe --abbrev=0`
targetdir="build/"
if [ -z $version ]; then
    echo -n "Enter version number: "
    read version
fi
targetfile=$targetdir"Ext.ux.LeafletMap-"$version"-incl_docs.zip"

echo "deleting last build"
rm -f $targetfile
echo "creating $targetfile"
zip -r -x@scripts/exclude.lst $targetfile .
echo "done!"