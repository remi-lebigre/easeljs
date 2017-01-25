# SOURCES
- [video to sprite](http://stackoverflow.com/questions/9934735/convert-video-into-jpeg-sprite)
- [video to sprite 2](http://www.foxhop.net/create-a-sprite-sheet-from-video)


JPG
```
ffmpeg -i "infile.mp4" -f image2 -vf fps=fps=10 img%03d.jpg
files=$(ls img*.jpg | sort -t '-' -n -k 2 | tr '\n' ' ')
convert $files +append output.jpg
```

PNG
```
ffmpeg -i "bubble_conseil.mov" -f image2 -vf fps=fps=60 img%03d.png
files=$(ls img*.png | sort -t '-' -n -k 2 | tr '\n' ' ')
convert $files +append output.png
```


- `-append` : vertical
- `+append` : horizontal