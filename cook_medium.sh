unzip medium-export.zip -d medium-export
mv medium-export/posts/ posts
rm -rf medium-export
rm -rf medium-export.zip
node filter-posts.js
medium2gatsby books_posts -o content/blog -t template.js -d