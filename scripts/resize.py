import os
from PIL import Image

dirname = os.path.dirname
abspath = os.path.abspath
data_image_root = os.path.join(abspath(dirname(dirname(__file__))), 'data/image')

def resize(file_path, width_size, height_size):
    image = Image.open(file_path)

    source_ratio = float(image.size[0]) / float(image.size[1])
    dest_ratio   = float(width_size) / float(height_size)

    if width_size <= 0 or width_size > image.size[0]:
        width_size = image.size[0]

    if height_size <= 0 or height_size > image.size[1]:
        height_size = image.size[1]

    dest_size = [0, 0]
    if dest_ratio > source_ratio:
        dest_size[1] = int(height_size)
        dest_size[0] = int(height_size * source_ratio)
    else:
        dest_size[0] = int(width_size)
        dest_size[1] = int(width_size / source_ratio)

    image.resize(tuple(dest_size), Image.ANTIALIAS).save(file_path)

    return "{0} -> {1}, {2}".format(file_path, dest_size[0], dest_size[1])

folders = [folder for folder in os.listdir(data_image_root) if folder[0] != '.']

for folder in folders:
    for image in os.listdir("{0}/{1}".format(data_image_root, folder)):
        if image[0] != "." and image[:6] != "thumb_":
            image_file_path = "{0}/{1}/{2}".format(data_image_root, folder, image)

            if image_file_path is not None:
                if image.split('.')[0] == "image":
                    width  = 900
                    height = 600
                else:
                    width  = 450
                    height = 285

                print("F: {0}".format(image_file_path))
                print("T: {0}".format(resize(image_file_path, width, height)))
                print("")
