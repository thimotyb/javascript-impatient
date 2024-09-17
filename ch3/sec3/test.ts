const replace = (arr: number[], target: number | number[], replacement:\ number) => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(target) && target.includes(arr[i])
          || !Array.isArray(target) && target === arr[i]) {
        arr[i] = replacement
      }
    }
  }
  