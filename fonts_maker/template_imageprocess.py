import cv2
import numpy as np
import imutils

## process pixel binarization
def binarize(img):
  # image = contrast(image)
  image = cv2.GaussianBlur(img, (5, 5), 0)

  # get a binary image - threshold for each area
  _, binary1 = cv2.threshold(image, 0, 255, cv2.THRESH_BINARY+cv2.THRESH_OTSU)
  binary2 = cv2.adaptiveThreshold(image, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 25, 7)
  
  return binary2


## draw and test contours
def draw(img, cnts):
  test = img.copy()
  test = cv2.cvtColor(test, cv2.COLOR_GRAY2RGB)

  for c in cnts:
    peri = cv2.arcLength(c, True)
    approx = cv2.approxPolyDP(c, 0.02*peri, True) # vertex point count
    cv2.drawContours(test, [approx], -1, (0, 0, 255), 10)

    # if len(approx) == 4:
    #   break
  
  show(test)


## test
def show(img):
  img = imutils.resize(img, height=500)
  cv2.imshow('test', img)
  cv2.waitKey(0)


## find and cut largest rectangle
def cut_edge(img):
  kernel = np.ones((3, 3), np.uint8)
  img = cv2.erode(img, kernel, iterations=1)

  # find contours(최고 가장자리 포함)
  contours, _ = cv2.findContours(img, cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)
  largest_contours = sorted(contours, key=cv2.contourArea)[-2:]

  # # get a Bounding Rect
  # x, y, w, h = cv2.boundingRect(largest_contours[0])

  # return img[y:y+h,x:x+w]

  return img, largest_contours


## fit to the edge
def fit_edge(img, cnts):
  test = img.copy()
  test = cv2.cvtColor(test, cv2.COLOR_GRAY2RGB)

  screenCnt = np.array([])
  for c in cnts:
    peri = cv2.arcLength(c, True)
    approx = cv2.approxPolyDP(c, 0.02*peri, True) # vertex point count\

    if len(approx) == 4:
      screenCnt = approx
      break

  if len(screenCnt) == 0:
    return test

  src_np = np.array(screenCnt, dtype=np.float32)

  width = max(np.linalg.norm(src_np[0] - src_np[1]), np.linalg.norm(src_np[2] - src_np[3]))
  height = max(np.linalg.norm(src_np[0] - src_np[3]), np.linalg.norm(src_np[1] - src_np[2]))

  dst_np = np.array([
    [0, 0],
    [width, 0],
    [width, height],
    [0, height]
  ], dtype=np.float32)

  M = cv2.getPerspectiveTransform(src=src_np, dst=dst_np)
  result = cv2.warpPerspective(test, M=M, dsize=(width, height))

  return result

def find_vertex(contours):
  hull_contours = []
  for c in contours:
    hull_contours.append(cv2.convexHull(c, clockwise=False))
  
  return np.array(hull_contours)

## save parts
def process(img_path):
  img = cv2.imread(img_path, flags=cv2.IMREAD_GRAYSCALE)

  binary = binarize(img)
  cut_img, contours = cut_edge(binary)
  hull = find_vertex(contours)
  fit_img = fit_edge(cut_img, hull)

  #
  # cut each other parts
  #

  cv2.imwrite('ImageProcess/results/cut_img.png', fit_img)


if __name__ == "__main__":
  process('ImageProcess/resources/test1.png')