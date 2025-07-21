import './styles.css';
import Header from "../Header";
import SearchBar from "../SearchBar";
import Card from '../Card';

export default function HomePage() {
  return (
    <>
      <Header />
      <section id="section-main-container">
        <SearchBar />
        <main className="lm-catalog-cards">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </main>
      </section>
    </>
  );
}