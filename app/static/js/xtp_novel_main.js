var image_vs_novel = $("img").attr("src");
var path_prefix = "/novels/";
var novel_path = path_prefix + (image_vs_novel.split("/")[1]).split(".")[0];
//alert(novel_path);

$("img").click(function() {
        let image_vs_novel = $(this).attr("src");
<<<<<<< HEAD
        //alert(image_vs_novel);
        let path_prefix = "/novels/";
        let novel_path = path_prefix + (image_vs_novel.split("/")[1]).split(".")[0];
        //alert(novel_path);
        //alert("YOU Click The Picture");
=======
        alert(image_vs_novel);
        let path_prefix = "/novels/";
        let novel_path = path_prefix + (image_vs_novel.split("/")[1]).split(".")[0];
        alert(novel_path);
        alert("YOU Click The Picture");
>>>>>>> 9cf750cf98193b23f0c1b3e741261c819ec9ce07
});

$("select").click(function(){
        let chap_branch = $(this).find(":selected").text();
        novel_path = novel_path + "-" + chap_branch;
<<<<<<< HEAD
        //alert(novel_path);
=======
        alert(novel_path);
>>>>>>> 9cf750cf98193b23f0c1b3e741261c819ec9ce07
        window.location.href = novel_path;
        //window.location.href = "http://www.baidu.com";
});
