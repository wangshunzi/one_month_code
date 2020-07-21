window.onload = function () {
    let nav_ul = document.getElementsByClassName("nav")[0];
    let childrens = nav_ul.children;
    let content_ul = document.getElementsByClassName("content")[0];
    let content_boxs = content_ul.children;
    for(let i=0; i < childrens.length; i++) {
        let li = childrens[i];
        li.addEventListener("click", function () {
            document.getElementsByClassName("current_content")[0].className = '';
            content_boxs[i].className = "current_content";

            document.getElementsByClassName("current")[0].className = '';
            li.className = "current";

        })
    }
};