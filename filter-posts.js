const path = require('path')
const fs = require('fs')
const cheerio = require('cheerio')

const INDEX_POST_NAME_PART = 'After-We-Finish-Listening'
const BOOKS_DIRECTORY = 'books_posts'
const POSTS_DIRECTORY = path.join(__dirname, 'posts')

const withoutLast = arr => arr.slice(0, arr.length - 1)

const cookPost = async (fileName, route) => {
  const oldPath = path.join(POSTS_DIRECTORY, fileName)
  const content = await fs.promises.readFile(oldPath, 'utf8')
  const $ = cheerio.load(content)
  $('figcaption').first().remove()
  $('.section--last').remove()
  $('figure').first().prevUntil('h3').remove()
  const link = $('.p-canonical')
  const href = link.attr('href')
  const [hash] = href.split('-').reverse()
  const newHref = `${withoutLast(href.split('/')).join('/')}/${route}-${hash}`
  link.attr('href', newHref)
  const newPath = path.join(__dirname, BOOKS_DIRECTORY, route)
  await fs.promises.writeFile(`${newPath}.html`, $.html())
}

const filterPosts = async () => {
  const postsFilesNames = await fs.promises.readdir(POSTS_DIRECTORY)
  const indexPostName = postsFilesNames.find(n => n.includes(INDEX_POST_NAME_PART))
  const indexPost = await fs.promises.readFile(path.join(POSTS_DIRECTORY, indexPostName), 'utf8')
  const $ = cheerio.load(indexPost)
  const stories = $('ol').find('a')
    .map((_, el) => {
      const name = $(el).text()
      const link = $(el).attr('href')
      const [hash] = link.split('-').reverse()
      const fileName = postsFilesNames.find(fn => fn.includes(hash))
      const route = name.toLowerCase().split('\n').join(' ').replace(/ +(?= )/g,'').split(' ').join('-').replace(/[^a-zA-Z0-9-_]/g, '')
      return {
        name,
        fileName,
        route
      }
    }).toArray()
    .filter(s => s.fileName)
  const directoryExists = fs.existsSync(BOOKS_DIRECTORY)
  if (!directoryExists) {
    await fs.promises.mkdir(BOOKS_DIRECTORY)
  }
  const indexJSON = JSON.stringify({
    books: stories.map(({ fileName, ...book }) => book)
  })
  const indexJSONPath = path.join(__dirname, 'content', 'blog', 'index.json')
  await fs.promises.writeFile(indexJSONPath, indexJSON)

  for ({ fileName, route } of stories) {
    await cookPost(fileName, route)
  }
}

filterPosts()