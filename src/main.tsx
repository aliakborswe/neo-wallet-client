
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { Toaster } from './components/ui/sonner';
import {Provider as ReduxProvider} from 'react-redux'
import { store } from './redux/store';

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
    <RouterProvider router={router} />
    <Toaster richColors />
    </ReduxProvider>
  </React.StrictMode>
);
