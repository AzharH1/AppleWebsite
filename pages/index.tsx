import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import Landing from '@/components/Landing'
import { GetServerSideProps } from 'next'
import { fectchCategories } from '@/utils/fetchCategories'
import { Tab } from '@headlessui/react'
import { fetchProducts } from '@/utils/fetchProducts'
import category from '@/appleredesign/schemas/documents/category'
import Product from '@/components/Product'

interface Props {
  categories: Category[];
  products: Products[];
}

const Home = ({categories, products}: Props) => {
  
  // console.log(products)
  const showProducts = (category: number) => {
    return products
    .filter((product)=> product.category._ref === categories[category]._id)
    .map(product => (<Product product={product} key={product._id}/>))
  }
  return (
    <>
      <Head>
        <title>Apple Redesign</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative h-[200vh] bg-[#E7ECEE] ">
        <Landing />
      </main>
      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            New Promos
          </h1>
          <Tab.Group>
            <Tab.List className="flex justify-center">
              {categories.map((category) => (
                <Tab
                  key={category._id}
                  id={category._id}
                  className={({ selected }) =>
                    `whitespace-nowrap rounded-t-lg px-5 py-3 text-sm font-light outline-none md:px-6 md:py-4 md:text-base ${
                      selected
                        ? "borderGradient bg-[#35383C] text-white"
                        : "border-b-2 border-[#35383C] text-[#747474]"
                    }`
                  }
                >
                  {category.title}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mx-auto max-w-fit pb-24 pt-10 sm:px-4">
              <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const categories = await fectchCategories()
  const products = await fetchProducts()

  return {
    props: {
      categories,
      products,
    },
  }
}