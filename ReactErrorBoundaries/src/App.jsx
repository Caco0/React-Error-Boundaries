import { Component, useEffect, useState } from 'react';
import './App.css';

const s = {
  style: {
    fontSize: '80px',
  },
};

class MyErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Atualiza o state para que a próxima renderização mostre a UI alternativa.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Você também pode registrar o erro em um serviço de relatórios de erro
    // console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Você pode renderizar qualquer UI alternativa
      return <p {...s}>Ferrou Cooorre Maluco!</p>;
    }

    return this.props.children;
  }
}

const ItWillThrowError = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (counter > 3) {
      throw new Error('Que Chato!!!');
    }
  }, [counter]);

  return (
    <div>
      <button onClick={() => setCounter((s) => s + 1)}>
        Click to Increase {counter}
      </button>
    </div>
  );
};

function App() {
  return (
    <>
      <div>
        <h1 {...s}>Olá</h1>
        <MyErrorBoundary>
          <ItWillThrowError />
        </MyErrorBoundary>
        <MyErrorBoundary>
          <ItWillThrowError />
        </MyErrorBoundary>
      </div>
    </>
  );
}

export default App;
