
export type IconImageProps = {
  name: string;
  icon: string;
  linkTo: string;
  styleClasses?: string;
}

const IconImage = ({ name, icon, linkTo, styleClasses }) => (
  <a href={linkTo} target="_blank" rel="noopener noreferrer">
    <img
      className={`filter-grayscale hover:filter-none ${styleClasses}`}
      alt={name}
      src={icon}
    />
  </a>
)

export default IconImage;