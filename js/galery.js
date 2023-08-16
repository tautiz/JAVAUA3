function randomNumberGenerator(){
    return Math.ceil(Math.random() * 30);
}

const randomNumber = randomNumberGenerator();
const fullUrl = 'https://picsum.photos/v2/list?page=' + randomNumber;
const gallery = document.querySelector('.gallery');

fetch(fullUrl)
.then(response => response.json())
.then(rezult => {

    rezult.forEach(img => {
        // Create a <div class="placeholder"> which should act as a placeholder / wrapper.
        const placeholder = document.createElement('div');
        placeholder.classList.add('placeholder');
        placeholder.setAttribute('title', img.author)
        
        // Create the image based on the Image value.
        // Whenever the image is loaded, add it to the placeholder.
        const src = img.download_url;
        preloadImage(src).then(image => {
            placeholder.append(image);
        });

        // Immediately add the placeholder.
        // This line doesn't wait for preloadImage to finish because preloadImage is asynchronous. Look into Promises if that is new to you.
        gallery.append(placeholder);

    });


});

const preloadImage = src =>
    new Promise(resolve => {
        const image = new Image();
        const onLoad = () => {
            resolve(image);
        };
        image.addEventListener('load', onLoad, {once: true});
        image.src = src;
        image.style.width = '200px';
        image.style.height = '200px';
        image.style.objectFit  = 'cover';
    });