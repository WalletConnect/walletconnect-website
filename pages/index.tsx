
const Home = () => (
  <main>
    <Banner />
    <div className="flex flex-col items-center mx-20 mt-20 space-y-10">
      What is WalletConnect?
    </div>
  </main>
)

export default Home;



const Banner = () => (
  <>
    <h1 className="flex justify-center mt-20 text-4xl font-semibold text-cool-gray-500">
      WalletConnect
      </h1>
    <div className="mx-8 mt-8">
      <h2 className="flex justify-center text-3xl font-thin text-center text-cool-gray-500">
        Open protocol for connecting Wallets to Dapps
      </h2>
      <div className="mt-12">
        <img src='banner-main.png' alt='wallet connect banner diagram' />
      </div>
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