import { useState } from 'react';
import { ThemeProvider } from 'styled-components'
import Router from '@/router';
import THEME, { GlobalStyle } from '@/util/theme'
import AppContext from '@/util/context';

const App = () => {
  const [data, setData] = useState({
    user: {
      "name": "Rocío",
      "lastName": "Miranda Díaz",
      "birthDay": "02-04-1990"
    },
    plan: {
      "name": "Plan en Casa y Clínica",
      "price": 99,
      "description": [
        "Consultas en clínica para cualquier especialidad.",
        "Medicinas y exámenes derivados cubiertos al 80%.",
        "Atención médica en más de 200 clínicas del país."
      ],
      "age": 70
    },
  });

  const updateData = currentData => {
    setData(prevData => ({
      ...prevData,
      ...currentData,
    }));
  };

  return (
    <div className='App'>
      <GlobalStyle />
      <ThemeProvider theme={THEME}>
        <AppContext.Provider value={{ data, updateData }}>
          <Router />
        </AppContext.Provider>
      </ThemeProvider>
    </div>
  )
};

export default App
