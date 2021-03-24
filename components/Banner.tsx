export type BannerProps = {
  title: string;
  children: React.ReactNode;
}

const Banner = ({ title, children }) => (
  <div className="flex justify-center">
    <div className="max-w-3xl">
      <h1 className="text-4xl font-medium text-cool-gray-500">
        {title}
      </h1>
      <p className="mt-10 text-lg font-thin leading-6 text-gray-700">
        {children}
      </p>
      <div className="mt-2" />
    </div>
  </div>
)
export default Banner;