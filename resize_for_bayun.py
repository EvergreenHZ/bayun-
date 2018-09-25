import os
import numpy as np
import cv2
import glob
from os.path import isfile, join

# read all images
standard_jpg_images = [cv2.imread(file) for file in glob.glob("/home/huaizhi/images/*.jpg")]
standard_png_images = [cv2.imread(file) for file in glob.glob("/home/huaizhi/images/*.png")]
standard_images = standard_jpg_images + standard_png_images

candidate_images = [cv2.imread(file) for file in glob.glob("/home/huaizhi/novel_images/*.jpg")]

# get image names
standard_images_names = glob.glob("/home/huaizhi/images/*.jpg")
standard_images_names = standard_images_names + glob.glob("/home/huaizhi/images/*.png")
names = [image_name.split("/")[-1] for image_name in standard_images_names]

path_prefix = "/home/huaizhi/output/"

target_images = []

for i in range(len(standard_images)):
    height, width, channel = standard_images[i].shape
    target_images.append(cv2.resize(candidate_images[i], (width, height)))

for i in range(len(names)):
    saved_name = path_prefix + names[i]

    #cv2.namedWindow('hello', cv2.WINDOW_NORMAL)
    #cv2.imshow("hello", target_images[i])
    #cv2.waitKey(0)

    cv2.imwrite(saved_name, target_images[i])
    print("save image " + saved_name)
