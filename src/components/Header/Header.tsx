import { useRef, useState } from "react";
import "./Header.css";
import HomePage from "../../page/HomePage";



function Header() {
  
  const [showPrompt, setShowPrompt] = useState(false);

  const search = () => {
    
    let input = document.querySelector('input');
    
    return (
      <>

      </>
    );
    }



  return (
    <header>
      <div className="headerFilter">
        <h4>
          Поиск по книгам 
          <input 
            type="text"
          />
          <button onClick={search}> Найти </button>
        </h4>
      </div>
    </header>
  );
};

export default Header;
