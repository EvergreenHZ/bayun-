$("img").click(function() {
        // image_vs_novel.src: /static/images/*.jpg
        let image_vs_novel = $(this).attr("src");
        let path_prefix = "/static/novels/";
        let novel_path = path_prefix + (image_vs_novel.split("/")[3]).split(".")[0];
        alert(novel_path);
        //$.get(novel_path);
        /* Send a post here, and get the url
         * use window.location.href and jump
         */
        window.location.href = novel_path;
});

//$("H2").click(function() {
        //$.get("/static/res/hello");
//});

//$("a").click(function() {
//        let $img_element = $(this).children();
//        let image_vs_novel = $img_element.attr("src");
//        let path_prefix = "/static/novels/";
//        let novel_path = path_prefix + (image_vs_novel.split("/")[3]).split(".")[0];
//        alert(novel_path);
//        $(this).attr("href" . novel_path); 
//});
