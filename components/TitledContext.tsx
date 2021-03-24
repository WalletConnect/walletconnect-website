export type TitleContentProps = {
  title: string;
  children: React.ReactNode;
  maxwidth?: string;
}


const TitledContent = ({ title, children, maxwidth = 'md:max-w-5xl' }) => (
  <div className="mx-8 mt-16 font-thin md:flex md:justify-center">
    <div className={maxwidth}>
      <h3 className="flex justify-center text-3xl">{title}</h3>
      <div>
        {children}
      </div>
    </div>
  </div>
)
export default TitledContent;