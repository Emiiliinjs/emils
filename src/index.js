import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  return (
    <div className="App">
      <h1>Kas ir prasības? Kas ir prasību specifikācija? Un ar ko viena atšķirās no otras?</h1>
      <p>
        Prasības un prasību specifikācija ir divi dažādi termini, kas tiek izmantoti programmatūras izstrādes procesā, un tiem ir atšķirīga nozīme.
      </p>
      <h2>1. Prasības:</h2>
      <p>
        Prasības ir vispārēji aprakstīti mērķi, uzdevumi vai vajadzības, kuras programmatūras sistēma ir jāizpilda. Prasības var būt dažādas – tās var būt funkcionālas (kas programmai ir jāspēj darīt), tehniskas (kā programma jāizstrādā) vai lietotāja (kā lietotājiem jāspēj izmantot sistēma).
      </p>
      <h2>2. Prasību specifikācija:</h2>
      <p>
        Prasību specifikācija ir detalizēts dokuments, kas apraksta prasības, kas jāizpilda sistēmai. Šī specifikācija parasti tiek izmantota kā līguma dokuments starp klientu un izstrādātājiem, un tajā ir skaidri definēts, kas ir jāizstrādā, kā tas būs jādara un kādi ir pieņemamie rezultāti.
      </p>
      <h2>3. Atšķirības starp prasībām un prasību specifikāciju:</h2>
      <ul>
        <li>Prasības ir vispārēji uzdevumi un vajadzības, kas jāizpilda, bet prasību specifikācija ir šo prasību detalizēts apraksts ar konkrētiem kritērijiem, kā tās būs jāīsteno.</li>
        <li>Prasības ir abstraktākas un var ietvert plašākas idejas, savukārt prasību specifikācija ir detalizēta un precīza dokumentācija, kas apraksta, kā konkrētās prasības tiks izpildītas.</li>
        <li>Prasības var mainīties un attīstīties izstrādes laikā, bet prasību specifikācija parasti tiek nofiksēta sākotnējā izstrādes stadijā un tiek izmantota kā ceļvedis projekta īstenošanai.</li>
      </ul>
      <h2>Rezumējums:</h2>
      <ul>
        <li>Prasības ir vispārējas idejas par to, kas jādara.</li>
        <li>Prasību specifikācija ir precīzs un detalizēts apraksts par to, kā prasības tiks īstenotas.</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
