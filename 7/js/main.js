import { generatePhotos } from './data';
import { renderThumbnails } from './thumbnails';

const pictures = generatePhotos();
renderThumbnails(pictures);

window.console.log(pictures);
