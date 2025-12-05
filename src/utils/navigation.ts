export const smoothScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export const updatePageTitle = (title: string) => {
  document.title = title;
};

export const getFormattedPrice = (price: number): string => {
  return `Rs. ${price.toLocaleString()}`;
};
