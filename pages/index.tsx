
const Home = () => (
  <main>
    <div className="flex flex-col items-center mx-20 mt-20 space-y-10">
      <Banner />
    </div>
  </main>
)

export default Home;



const Banner = () => (
  <>
    <h1 className="text-3xl font-semibold text-cool-gray-600">
      WalletConnect
      </h1>
    <h2 className="text-2xl font-thin">
      Open protocol for connecting Wallets to Dapps
    </h2>
    <div>
      <img src='banner-main.png' alt='wallet connect banner diagram' />
    </div>
  </>
)


const NewBanner = () => (
  <div className="flex flex-col p-4">
    <h2 className="text-2xl font-thin">
      Open protocol for connecting Wallets to Dapps
    </h2>
    <div>
      <img src='banner-main.png' alt='wallet connect banner diagram' />
    </div>
  </div>
)