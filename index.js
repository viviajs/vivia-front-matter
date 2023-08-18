const matter = require('gray-matter')

module.exports = config => {
  return context => {
    const result = matter(context.content)
    context.metadata = result.data
    context.content = result.content
  }
}
