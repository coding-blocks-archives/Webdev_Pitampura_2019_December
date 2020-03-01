
function slugify(title) {
    return title.toLowerCase().split(' ').join('-')
}

module.exports = {
    slugify
}