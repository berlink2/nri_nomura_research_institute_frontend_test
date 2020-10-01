export const processData = (response) => {
  let data = response;
  let processedResponse = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i + 1] && data[i].albumId !== data[i + 1].albumId) {
      processedResponse.push(data.slice(0, i + 1));
      data = data.slice(i + 1);
      i = 0;
    }
  }

  processedResponse.length = 10;

  return processedResponse.map((item, index) => {
    const albumTitle = item[0].title;
    const albumImage = item[0].thumbnailUrl;
    return { albumTitle, albumImage, item };
  });
};
