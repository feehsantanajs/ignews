import {GetStaticProps} from 'next'
import { stripe } from '../services/stripe'

import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'

import styles from './home.module.scss'

interface homeProps{
  product:{
    priceId: string;
    amount:number;

  }
}

export default function Home({product}:homeProps) { 
  
  return (
    <>
      <Head>
        <title>Home | ig.news </title>
      </Head>
      <main className={styles.contentContainer}>
        
        <section className={styles.hero}>
          <span> 👏 Hey, Welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>Get access to all the publications<br /> 
            <span>for {product.amount} per mounth</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        
        <img src="/images/avatar.svg" alt="Girl coding"  />
      
      </main>
    </>
  )
}
//getServerSideProps : GetServerSideProps
export const getStaticProps:GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KaOKXEdfIFGsUAmgEqeTOd1',{
   expand:['product']
  })

  const amountFormatted =  new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'USD',
  }).format((price.unit_amount / 100));

  const product ={
   priceId: price.id,
   amount:amountFormatted,
  }
  return{
    props:{
      product
    },
    /*time to carry another page in back-end Next*/
    revalidate:60 * 60 * 24, // 24 hours
  }
}