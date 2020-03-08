const path = require('path')

module.exports = {
  render: function(data) {
    const template = `\
---
title: "${data.title}"
keywords: [${data.tags.join(',')}]
featuredImage: '${data.images[0].localPath}'
---

${data.body}
`;

    return template;
  },
  getOptions: function() {
    return {
      folderForEachSlug: true, // separate folder for each blog post, where index.md and post images will live
      imagePath: '/images2', // <img src="/images2/[filename]" >. Used in the markdown files.
      imageFolder: path.join(__dirname, 'static', 'media'),
      defaultCodeBlockLanguage: 'js', // code fenced by default will be ``` with no lang. If most of your code blocks are in a specific lang, set this here.
    };
  },
};