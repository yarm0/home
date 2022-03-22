var manifestUri = 'https://watch.hoichoi.stream/movies/Chaya-Surya/hls/CHAYA_SURYA.m3u8'

function initApp() {
    shaka.polyfill.installAll();

    if (shaka.Player.isBrowserSupported()) {
        initPlayer();
    } else {
        console.error('Browser not supported!');
    }
}

function initPlayer() {
    // Create a Player instance.
    var video = document.getElementById('video');

    // shaka.media.ManifestParser.registerParserByExtension("m3u8", shaka.hls.HlsParser);
    // shaka.media.ManifestParser.registerParserByMime("Application/vnd.apple.mpegurl", shaka.hls.HlsParser);
    // shaka.media.ManifestParser.registerParserByMime("application/x-mpegURL", shaka.hls.HlsParser);

    var player = new shaka.Player(video);

    window.player = player;

    player.addEventListener('error', onErrorEvent);

    player.load(manifestUri).then(function () {
        console.log('The video has now been loaded!');
    }).catch(onError);
}

function onErrorEvent(event) {
    onError(event.detail);
}

function onError(error) {
    console.error('Error code', error.code, 'object', error);
}

document.addEventListener('DOMContentLoaded', initApp);