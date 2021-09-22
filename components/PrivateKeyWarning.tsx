const PrivateKeyWarning = () => (
  <div className="mx-8 mt-16 font-thin md:flex md:justify-center">
    <div className="md:max-w-5xl">
      <div role="alert">
        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
          Never share your private key
        </div>
        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
          <p>
            Never give your private key or wallet seed words to anyone.
            WalletConnect apps do not ask for them. The WalletConnect team does
            not ask for them. If you share your private key or seed words you will
            lose everything in your wallet.
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default PrivateKeyWarning;
