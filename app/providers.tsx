'use client'
// File: app/providers.tsx


// We can not useState or useRef in a server component, which is why we are
// extracting this part out into its own file with 'use client' on top
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface ProvidersProps {
  children: React.ReactNode;
}
export default function Providers({ children }: ProvidersProps) {
  // const [queryClient] = useState(
    //   () =>
    //     new QueryClient({
      //       defaultOptions: {
        //         queries: {
          //           // With SSR, we usually want to set some default staleTime
          //           // above 0 to avoid refetching immediately on the client
          //           staleTime: 60 * 1000,
          //         },
          //       },
          //     }),
          // );
  const queryClient=new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
