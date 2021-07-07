export const filterLazyLoading = (post) => {
    const regex = /loading="lazy"/ig
    return post.html.replace(regex, '')
}

export const addLazyLoading = (post) => {
    const regex = /<img/ig
    const newPost =  post.html.replace(regex, '<img loading="lazy"')
    return newPost
}

