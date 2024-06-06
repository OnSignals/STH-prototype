/**
 * Get sorted vimeo sources array from vimeo API data
 *
 * @param {object} data data object from vimeo API
 */
function getVideoSources(data = {}) {
    let sources = [];

    if (!data?.files) {
        return sources;
    }

    sources = data.files;

    // sort sources by width ASC
    sources.sort((a, b) => (a.width > b.width ? 1 : -1));

    // filter out everything that is not mp4
    sources = sources.filter((source) => {
        return source.type === 'video/mp4';
    });

    // filter out hls video
    sources = sources.filter((source) => {
        return source.quality !== 'hls';
    });

    return sources;
}

function getVideoSourceByWidth(sources = {}, targetWidth = 0) {
    console.log('getVideoSourceByWidth()', sources, targetWidth);
    // get first image that width is > targetWidth
    let video = null;
    for (const source of sources) {
        if (parseInt(source.width) > targetWidth) {
            video = source;
            break;
        }
    }

    if (!video) video = sources[sources.length - 1];

    return video;
}

/**
 * Get thumbnail data from vimeo API data
 *
 * @param {object} data data object from vimeo API
 */
function getVideoThumbnails(data = {}) {
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    if (typeof data !== 'object') {
        return null;
    }

    return data.pictures;
}

function getVideoThumbnailByWidth(thumbnails = [], targetWidth = 0, uncropped = false) {
    if (uncropped) return getVideoThumbnailUncropped(thumbnails, targetWidth);

    console.log('getVideoThumbnailByWidth()', thumbnails, targetWidth);

    if (!thumbnails?.sizes?.length) return null;

    // get first image that width is > targetWidth
    let image = null;
    for (const source of thumbnails.sizes) {
        if (parseInt(source.width) > targetWidth) {
            image = source;
            break;
        }
    }

    if (!image) image = sources[sources.length - 1];

    return image;
}

function getVideoThumbnailUncropped(thumbnails = [], targetWidth = 0) {
    console.log('getVideoThumbnailUncropped()', thumbnails, targetWidth);

    if (!thumbnails?.sizes?.length) return null;

    let image = thumbnails.sizes[0];

    const ratio = image.height / image.width;

    image.width = targetWidth;
    image.height = targetWidth * ratio;
    image.link = image.link.replace(/\?r=pad/, '').replace(/(_[0-9]+x[0-9]+)/, `_${targetWidth}x.jpg`);

    return image;
}

/**
 * Get aspect ratio of vimeo video from vimeo API data
 *
 * @param {object} data data object from vimeo API
 */
function getVideoRatio(data = {}) {
    let ratio = 1;

    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    if (typeof data !== 'object') {
        return ratio;
    }

    if (!data.width || !data.height) {
        return ratio;
    }

    ratio = data.height / data.width;

    return ratio;
}

/**
 * Get media id from vimeo URL
 * @param {string} url
 * @returns {string} id
 */
function getVimeoIdFromUrl(url) {
    if (!url) return null;
    let id = null;

    let regEx = /(https?:\/\/)?(www\.)?(player\.)?vimeo\.com\/?(showcase\/)*([0-9))([a-z]*\/)*([0-9]{6,11})[?]?.*/;
    let match = url.match(regEx);

    if (match && match.length == 7) {
        id = match[6];
    }

    return id;
}

/**
 * Get type of media from vimeo URL
 *
 * @param {string} url
 * @returns {string} 'livestream'|'video'
 */
function getVimeoTypeFromUrl(url) {
    if (!url) return 'video';

    return url.indexOf('vimeo.com/event/') > -1 ? 'livestream' : 'video';
}

export {
    getVideoSources,
    getVideoSourceByWidth,
    getVideoThumbnails,
    getVideoThumbnailByWidth,
    getVideoRatio,
    getVimeoIdFromUrl,
    getVimeoTypeFromUrl,
};
