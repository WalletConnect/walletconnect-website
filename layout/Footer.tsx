const Footer = () => (
  <footer className="flex justify-center mt-24 mb-16 sm:mt-32">
    <div className="flex flex-col space-y-6 sm:space-y-0 sm:space-x-20 sm:flex-row">
      <FooterIcon name="Discord" iconPath='/discord.svg' />
      <FooterIcon name="Twitter" iconPath='/twitter.svg' />
      <FooterIcon name="Github" iconPath='/github.svg' />
    </div>
  </footer>
)

export default Footer;


const FooterIcon = ({ name, iconPath }) => (
  <div className="flex">
    <img className="w-6 sm:w-8" src={iconPath} alt={name} />
    <p className="ml-2 text-sm font-medium sm:text-lg text-cool-gray-600">{name}</p>
  </div>
)