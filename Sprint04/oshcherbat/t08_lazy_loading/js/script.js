function observerFunction(elements, observer) {
  elements.forEach((element) => {
    if (element.isIntersecting) {
      console.log(element);
      element.target.src = element.target.dataset.src;
      counter++;
      observer.unobserve(element.target);
      text.innerHTML = counter + " / 20";
      if (counter == 20) {
        text.style.backgroundColor = "green";
        setTimeout(() => {
          text.remove();
        }, 3000);
      }
    }
  });
}

let counter = 0;

option = {
  threshold: 0.0,
};

const observer = new IntersectionObserver(observerFunction, option);

let my_img = document.querySelectorAll("img");
for (let i = 0; i < my_img.length; i++) {
  observer.observe(my_img[i]);
}
