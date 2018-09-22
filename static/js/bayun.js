$("img").click(function() {
        // image_vs_novel.src: /static/images/*.jpg
        let image_vs_novel = $(this).attr("src");
        let path_prefix = "/static/novels/";
        let novel_path = path_prefix + (image_vs_novel.split("/")[3]).split(".")[0];
        alert(novel_path);
        //$.get(novel_path);
        window.location.href = novel_path;
});
