

const TitledContent = ({ title, children }) => (
  <div className="mx-8 mt-16 font-thin md:flex md:justify-center">
    <div className="md:max-w-5xl">
      <h3 className="flex justify-center text-3xl">{title}</h3>
      <div>
        {children}
      </div>
    </div>
  </div>
)
export default TitledContent;