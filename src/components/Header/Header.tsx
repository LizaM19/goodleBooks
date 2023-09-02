import "./Header.css"

function Header() {
  return (
    <header>
      <div className="headerFilter">
        <h4>
          Поиск по книгам <input type="text" />
        </h4>
      </div>
    </header>
  );
}

export default Header;
