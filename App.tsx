import AppNavigation from './src/navigation';
import { Provider as ReduxProvider, useDispatch } from 'react-redux';
import { store } from './src/servises/config-store';
import { Header } from './src/components/header';

export default function App() {

  return (
    <ReduxProvider store={store}>
      <Header />
      <AppNavigation />
    </ReduxProvider>
  )
}

