import { Toaster } from 'react-hot-toast';
import { QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { queryClient } from './context/QueryClient/QueryClient';
import { router } from './Routes/Routes';

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider
          router={router}
        ></RouterProvider>
        <Toaster></Toaster>
      </QueryClientProvider>
    </div>
  );
}

export default App;
