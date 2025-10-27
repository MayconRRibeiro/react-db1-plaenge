import { createRoot } from "react-dom/client";
import { StrictMode, useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import "./global.scss";
import {
  ComponentGroupShowCase,
  ComponentGroupTitle,
  ComponentGroupDemo,
} from "./components/ui/component-group";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";

const App = () => {
  const [theme, setTheme] = useState("light");

  const onHandleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Galeria de componentes</h1>
        <button onClick={onHandleToggleTheme}>
          {theme === "light" ? "☀️" : "🌙"}
        </button>
      </header>

      <section className="section">
        <h2 className="section-title">Buttons</h2>
        <div className="component-grid">
          <ComponentGroupShowCase>
            <ComponentGroupTitle title="Variantes" />
            <ComponentGroupDemo>
              <div className="flex-row">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="outline">Outline</Button>
              </div>
            </ComponentGroupDemo>
          </ComponentGroupShowCase>

          <ComponentGroupShowCase>
            <ComponentGroupTitle title="Tamanhos" />
            <ComponentGroupDemo>
              <div className="flex-row">
                <Button size="sm">Small</Button>
                <Button>Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </ComponentGroupDemo>
          </ComponentGroupShowCase>

          <ComponentGroupShowCase>
            <ComponentGroupTitle title="Estados" />
            <ComponentGroupDemo>
              <div className="flex-row">
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
              </div>
            </ComponentGroupDemo>
          </ComponentGroupShowCase>
        </div>
      </section>
      <section className="section">
        <h2 className="section-title">Alerts</h2>
        <div className="component-grid">
          <ComponentGroupShowCase>
            <ComponentGroupTitle title="Variantes" />
            <ComponentGroupDemo>
              <div className="flex-row">
                <Alert>
                  <AlertTitle>Informação</AlertTitle>
                  <AlertDescription>
                    Este é um alerta informativo padrão com detalhes
                    importantes.
                  </AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <AlertTitle>Erro</AlertTitle>
                  <AlertDescription>
                    Deu erro interno! Por favor, tente novamente.
                  </AlertDescription>
                </Alert>
                <Alert variant="warning">
                  <AlertTitle>Atenção</AlertTitle>
                  <AlertDescription>
                    Você vai perder as alteraçoes que não foram salvas.
                  </AlertDescription>
                </Alert>
                <Alert variant="success">
                  <AlertTitle>Sucesso!</AlertTitle>
                  <AlertDescription>
                    Operação realizada com sucesso.
                  </AlertDescription>
                </Alert>
              </div>
            </ComponentGroupDemo>
          </ComponentGroupShowCase>
        </div>
      </section>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
