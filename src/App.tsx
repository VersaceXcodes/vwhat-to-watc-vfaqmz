import React, { useEffect, Suspense } from '"'"'react'"'"';
import { BrowserRouter, Route, Routes } from '"'"'react-router-dom'"'"';
import { QueryClient, QueryClientProvider, QueryClientProviderProps } from '"'"'@tanstack/react-query'"'"';

const queryClient = new QueryClient();

const HomePage = React.lazy(() => import('"'"'./pages/HomePage'"'"'));
const MovieDetailsPage = React.lazy(() => import('"'"'./pages/MovieDetailsPage'"'"'));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:id" element={<MovieDetailsPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
