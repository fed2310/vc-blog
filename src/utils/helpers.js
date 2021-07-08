export const filterLazyLoading = (post) => {
    const regex = /loading="lazy"/ig
    return post.html.replace(regex, '')
}

export const addLazyLoading = (post) => {
    const regexImg = /<img/ig
    const regexVid = /<iframe/ig
    var post1 = post.html.replace(regexImg, '<img loading="lazy"')
    var post2 = post1.replace(regexVid, '<iframe loading="lazy"')
    // console.log(post2)
    return post2
}