import React from 'react';
import GlobalStyle from './style/global';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Flavio' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
