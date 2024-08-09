import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import store from './redux/store/store.js';
import { Provider } from 'react-redux';
import ThemeProvider from './components/ThemeProvider.jsx';
import { Toaster } from 'react-hot-toast';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import ScrollToTop from './components/ScrollToTop.jsx';




const App = () => {

  // React lazy loading for imporving the routes response time 
  const Home = lazy(() => import('./pages/Home'));
  const About = lazy(() => import('./pages/About'));
  const Contact = lazy(() => import('./pages/Contact'));
  const ViewPets = lazy(() => import('./pages/ViewPets'));
  const ViewPetDetails = lazy(() => import('./pages/ViewPetDetails'));


  return (
    <>
      <PersistGate persistor={persistStore(store)} >
        <Provider store={store}>
          <ThemeProvider>
            <BrowserRouter>
              <ScrollToTop />

              <Suspense fallback={<div>Loading..</div>}>
                <Routes>
                  <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/view-pets' element={<ViewPets />} />
                    <Route path='/pet-details/:id' element={<ViewPetDetails />} />
                  </Route>
                </Routes>
              </Suspense>
            </BrowserRouter>
          </ThemeProvider>
          <Toaster />
        </Provider>
      </PersistGate>
    </>
  )
}

export default App