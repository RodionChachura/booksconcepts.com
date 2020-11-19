const path = require('path')
const readingTime= require('reading-time')

const render = (data) => `\
---
minutes: ${Math.round(readingTime(data.body).minutes)}
title: "${data.title}"
keywords: [${data.tags.join(',')}]
featuredImage: '.${data.images[0].localPath}'
---

${data.body}
`

const getOptions = () => ({
  folderForEachSlug: true,
  imagePath: '/images2',
  imageFolder: path.join(__dirname, 'static', 'media')
})

module.exports = {
  render,
  getOptions
};