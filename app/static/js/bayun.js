
//alert("Hello World!");

//$("img").click(funtion() {
//        let image_vs_novel = $(this).attr("src");
//        alert(image_vs_novel);
//        let path_prefix = "/bayun2novel/";
//        let novel_path = path_prefix + (image_vs_novel.split("/")[1]).split(".")[0];
//        alert(novel_path);
//
//        window.location.href = novel_path;
//});


$("img").click(function() {
        let image_vs_novel = $(this).attr("src");
<<<<<<< HEAD
        //alert(image_vs_novel);
        let path_prefix = "/bayun2novel/";
        let novel_path = path_prefix + (image_vs_novel.split("/")[1]);
        //alert(novel_path);
=======
        alert(image_vs_novel);
        let path_prefix = "/bayun2novel/";
        let novel_path = path_prefix + (image_vs_novel.split("/")[1]);
        alert(novel_path);
>>>>>>> 9cf750cf98193b23f0c1b3e741261c819ec9ce07

        window.location.href = novel_path;
});
