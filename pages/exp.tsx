import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { CONNECTION_ERROR_MESSAGE, WALLET_REGISTRY_KEY, WALLET_REGISTRY_URI } from "../common/Constants";

const Exp = () => {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Display />
    </QueryClientProvider>
  )
}

export default Exp;



const Display = () => {
  const API_WALLETS_CALL = 'https://registry.walletconnect.org/api/registry/wallets';
  const { isLoading, isError, data, error } =
    useQuery(
      WALLET_REGISTRY_KEY,
      async () => {
        const resp = await fetch(API_WALLETS_CALL);
        return resp.json();
      });

  if (isLoading) return <span>Loading...</span>
  if (isError) return <span>{CONNECTION_ERROR_MESSAGE} {console.error(error)}</span>

  console.log('data:', data);


  return (
    <div>
      test display
    </div>
  )
}