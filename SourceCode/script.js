const loaderElem = document.querySelector(".loader")

window.addEventListener("load", function () {
    //first way
    // loaderElem.classList.add("hidden")

    //second way
    // میاد یه کلاس رو اضافه میکنه به کلاس های المنت یعنی پریلودر
    // یه اسپیس و هیدن به کلاس المنت اضااافه میکنیم
    // کلاس لودر هم کلاس پیش فرض المنت هست
    loaderElem.className += " hidden" // => class = "loader hidden" 
})



