# aJIEw's Running Page

### 手动生成数据

年度数据：

```sh
python3 run_page/gen_svg.py --from-db --title "aJIEw's Running by Year" \
   --type github --athlete "aJIEw" \
   --min-distance 0.5 --special-distance 7 --special-distance2 10 \
   --special-color deepskyblue --special-color2 mediumblue \
   --output assets/github.svg --use-localtime
```

轨迹数据：

```sh
python3 run_page/gen_svg.py --from-db --title "aJIEw's Running Routes" \
  --type grid --athlete "aJIEw" --min-distance 0.5 \
  --special-distance 7 --special-distance2 10 \
  --special-color deepskyblue --special-color2 mediumblue \
  --output assets/grid.svg --use-localtime
```

年度环形数据：

```sh
python3 run_page/gen_svg.py --from-db --type circular \
  --min-distance 2 --special-distance 5 --special-distance2 7 \
  --special-color deepskyblue --special-color2 mediumblue \
  --use-localtime
```

