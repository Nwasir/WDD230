//get all images with date source attribute
const imageToLoad = document.querySelectorAll("img[data-src]");

//optional observer being set for the intersectionobserver
const imageOption = {
  threshold: 1,
  rootmargin: "0px 0px 50px 0px",
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};
//first check to see if intersection obersver is supported
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
        if(item.isIntersecting){
            loadImages(item.target);
            observer.unobserve(item.target);
        }
    });
  }, imageOption);

  //loop trough image on check status
  imageToLoad.forEach((img) => {
    loadImages(img);
  });
} else {
  imageToLoad.forEach((img) => {
    loadImages(img);
  });
}
