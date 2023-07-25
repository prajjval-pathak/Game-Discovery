import no_img from "../assets/no-image-placeholder.webp";
const Formatter = (url: string) => {
  if (url == null) {
    return no_img;
  }
  const index = url.indexOf("media/") + "media".length;
  return url.slice(0, index) + "/crop/600/400" + url.slice(index);
};
export default Formatter;
