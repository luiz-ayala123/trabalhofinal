import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Bem vindo</h1>
        <a href='\produtos'>Abrir produtos</a>
      </div>
      <div className={styles.footer}>
        <p>Feito por Luiz Felipe Ayala Souza e João Pedro Assis Ozório</p>
      </div>
    </div>
  )
}
