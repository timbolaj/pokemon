export const assignClassName = (id, page) => {
  if (page === 1) {
    if (id <= 25) {
      return 'entry show';
    }
    return 'hide';
  }

  if (page === 2) {
    if (id > 25 && id <= 50) {
      return 'entry show';
    }
    return 'hide';
  }

  if (page === 3) {
    if (id > 50 && id <= 75) {
      return 'entry show';
    }

    return 'hide';
  }

  if (page === 4) {
    if (id > 75 && id <= 100) {
      return 'entry show'
    }
    return 'hide'
  }

  if (page === 5) {
    if (id > 100 && id <= 125) {
      return 'entry show'
    }
    return 'hide';
  }

  if (page === 6) {
    if (id <= 150 && id > 125) {
      return 'entry show';
    }
    return 'hide';
  }
}

export const capitalizeFirstLetter = word => {
  return word?.replace(word?.charAt(0), word?.charAt(0)?.toUpperCase());
}