import axios from 'axios';
import styles from '../../styles/estilizacaomilindrosadoisoretorno.module.css';

function Profile({produto = {}}){
    return <div className={styles.patriaamada}>
        <div className={styles.palhadesoja}><img src={produto.image}/></div>
        <p className={styles.tituloo}>{produto.title}</p>
        <p className={styles.valor}>Descrição: {produto.description}</p>
        <p>Categoria: {produto.category}</p>
        <p>Estrelas: {produto.rating.rate} Avaliações: {produto.rating.count}</p>
        <p className={styles.preco}>Valor: ${produto.price}</p>
    </div>
}

export async function getStaticProps(context) {
    const response = await axios.get(
    ' https://fakestoreapi.com/products/' + context.params.id
    );
    const produto = await response.data;

    return {
        props: {produto},
    }
}

export async function getStaticPaths() {
    const response = await axios.get(
        ' https://fakestoreapi.com/products',
        );
    const produtos = await response.data;
    const paths = produtos.map((produto) => {
        return {params:{id:String(produto.id)}};
    });
    return {
        paths,
        fallback: true,
    };
}

export default Profile;