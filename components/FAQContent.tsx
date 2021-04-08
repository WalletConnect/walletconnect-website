const FAQContent = ({ title, children }) => (
  <div className="mt-8">
    <h4 className="text-2xl">{title}</h4>
    <p className="mt-6 text-lg leading-6 text-gray-600">{children}</p>
  </div>
);

export default FAQContent;
