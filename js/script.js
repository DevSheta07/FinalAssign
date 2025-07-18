/*Name this external file gallery.js*/
function upDate(previewPic) {
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
    const ele = document.getElementById("image");
    ele.style.backgroundImage = `url('${previewPic.src}')`;
    ele.innerHTML = previewPic.alt;

}

function unDo() {
    /* In this function you should 
   1) Update the url for the background image of the div with the id = "image" 
   back to the orginal-image.  You can use the css code to see what that original URL was
   
   
   2) Change the text  of the div with the id = "image" 
   back to the original text.  You can use the html code to see what that original text was
   */

    const ele = document.getElementById("image");
    ele.style.backgroundImage = 'none';
    ele.innerHTML = 'Hover over an image below to display here.';

}

function initGallery() {
    const previews = document.querySelectorAll(".preview");

    for (let i = 0; i < previews.length; i++) {
        previews[i].setAttribute("tabindex", "0");

        // previews[i].addEventListener("mouseover", function () {
        //     upDate(this);
        // });

        // previews[i].addEventListener("mouseout", function () {
        //     unDo();
        // });

        previews[i].addEventListener("focus", function () {
            upDate(this);
        });

        previews[i].addEventListener("blur", function () {
            unDo();
        });
    }

    console.log("Gallery initialized and event listeners attached.");
}