import Home from './components/Home'
const App = () => {
  return (
    <>
      <Home />
      <div className="info">
        <h3>Aplikace pro plánování programování</h3>
        <p>PRVNÍ ČÁST (Programátoři) </p>
        <p>Interaktivní seznam programátorů - zde je možnost přidávat nebo odebírat programátory ze seznamu.</p>
        <br />
        <p>DRUHÁ ČÁST (Úkoly)</p>
        <p>Formulář pro naplánování úkolu (programování aplikace)</p>
        <br />
        <p>Podmínky</p>
        <p>
          Junior za 1 den napíše 100 řádků kódu, senior 200 řádků. Pro schválení plánu musíte mít dost programátorů na to, aby aplikaci dokončili řádně v termínu. Tlačítko "Naplánovat práci" bude červené, pokud podmínky nejsou splněny, zelené pokud
          ano.
        </p>
      </div>
    </>
  )
}

export default App
