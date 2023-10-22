const FavoritesPage = () => {
  console.log(localStorage.length);
  for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i));
  }

  return (
    <>
      <div></div>
      <div className="page">Избранные книги</div>
    </>
  );
};
export { FavoritesPage };
