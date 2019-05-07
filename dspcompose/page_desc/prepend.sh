# command: find . -name "*.md" -print0 | xargs -0 -I file ./prepend.sh file

# command: find ~/Documents/frontMatter/*/*/*/ -name "*.md" -print0 | xargs -0 -I file ./prepend.sh file

filepath="$1"
file_name=$("basename" -a "$filepath")


# Getting the file name (title)
md='.md'
title=${file_name%$md}


heading=$(grep -r "^# \b" ~/Documents/frontMatter/*/*/*/$title.md)


heading1=${heading#*\# }


# Prepend front-matter to files
TEMPLATE="+++
title = '$heading1'
solution = 'Data Quality'
+++
"

 echo "$TEMPLATE" | cat - "$filepath" > temp && mv temp "$filepath"


# command to remove spaces from file names: find $1 -name "* *.md" -type f -print0 | \
#  while read -d $'\0' f; do mv -v "$f" "${f// /_}"; done