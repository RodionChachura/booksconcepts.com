export const registerListener = (eventName, handler) => {
  window.addEventListener(eventName, handler)
  return () => window.removeEventListener(eventName, handler)
}

export const parseBookName = (name) => {
  const [title, author] = name.split(' by ')
  const subtitleStart = title.indexOf(':')
  const shortTitle = subtitleStart > 0 ? `${title.slice(0, subtitleStart)}${title.slice(title.length - 1)}` : title
  return {
    title: shortTitle.replace('\“', '').replace('\”', ''),
    author
  }
}