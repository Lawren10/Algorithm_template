let string = "aababcabcdebb";

function getLongestSubstring(str, N) {
  let l = 0;
  let r = 0;
  let map = {};
  max = -1;
  let currlenstr = "";
  let allMatch = [];
  while (r < str.length) {
    // console.log(str[i]);
    // i = parseInt(i);
    str[r] in map ? (map[str[r]] += 1) : (map[str[r]] = 1);
    // r = i + 1;
    currlenstr += str[r];
    while (Object.keys(map).length > N) {
      // console.log("in loop", map);

      map[str[l]] -= 1;
      if (map[str[l]] <= 0) {
        delete map[str[l]];
      }

      l++;
      currlenstr = str.slice(l, r + 1);
    }

    // console.log(currlenstr, l, r);
    max = Math.max(max, r + 1 - l);
    // console.log(currlenstr.length, max);
    if (currlenstr.length >= max) {
      if (allMatch[0]) {
        allMatch[0].length < currlenstr.length
          ? (allMatch[0] = currlenstr)
          : allMatch.push(currlenstr);
      } else {
        allMatch.push(currlenstr);
      }
    }

    r++;
  }

  console.log(max);
  console.log(allMatch);
}

getLongestSubstring(string, 2);
