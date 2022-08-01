function Navigation({ setIndex }) {
  return (
    <div id="nav">
      <div id="list">
        <div onClick={() => setIndex(0)}>PROFILE</div>
        <div onClick={() => setIndex(1)}>PROJECTS</div>
        <div onClick={() => setIndex(2)}>EDUCATION</div>
        <div onClick={() => setIndex(3)}>CONTACT</div>
      </div>
    </div>
  );
}

export default Navigation;
