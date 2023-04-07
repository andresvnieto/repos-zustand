import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools  } from "@tanstack/react-query-devtools";

type Props = {
  children: React.ReactNode 
}

function ReactQuery({children}: Props) {
  const queryClient = new QueryClient;
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  )
}

export default ReactQuery