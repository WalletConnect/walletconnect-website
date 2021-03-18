import { IMG_API_URL } from "../../common/constants";

const LogoDisplay = ({ data, ids }) => (
  <div className="flex justify-center">
    <div className="grid max-w-3xl grid-cols-2 gap-10 mt-6 sm:grid-cols-3 md:grid-cols-4">
      {ids.map(id => (
        <div className="flex flex-col" key={id}>
          <div className='flex justify-center'>
            <img className="inline-block w-20 md:w-32 sm:w-24 " src={`${IMG_API_URL}${id}.jpeg`} alt={data[id].name} />
          </div>
          <div className="flex justify-center mt-4 font-semibold text-cool-gray-600 hover:text-cool-gray-500">
            {data[id].name}
          </div>
        </div>
      ))}
    </div>
  </div>
)
export default LogoDisplay;