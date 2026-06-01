'use client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions : {
        queries : {
            retry : 3,
        }
    }
});

const TanstackQueryProvider = ({ children }) => {
    return <QueryClientProvider client = { queryClient }>{ children }</QueryClientProvider>
};

export default TanstackQueryProvider;