const generateColor = () => {
  const r = Math.random() * (255 - 1) + 1;
  const g = Math.random() * (255 - 1) + 1;
  const b = Math.random() * (255 - 1) + 1;

  const color = `rgb(${r},${g},${b})`;

  return color;
};

export default generateColor;
