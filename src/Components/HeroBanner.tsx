import { HeroBannerProdutcCard } from "./HeroBanner_ProdutcCard";

import FotoProduto1 from '../Assets/images/produto-1.png';
import FotoProduto2 from '../Assets/images/produto-2.png';
import FotoProduto3 from '../Assets/images/produto-3.png';

export function HeroBanner() {
  return (
    <section className="bg-[#03FFA5] py-8 px-4 sm:py-12 sm:px-10 md:flex md:justify-around lg:justify-center">
      <div className="p-2 md:w-1/2 md:pr-8 md:self-center xl:w-5/12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:leading-tight">CRIAMOS <br/>LOJAS QUE <br/>VENDEM MAIS.</h1>
        <p className="mt-4 md:w-4/5 lg:w-3/5">
          A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?
        </p>

        <button className="py-3 px-6 my-6 border border-black rounded-md hover:bg-black hover:text-white transition-colors md:mt-8">Veja nossas soluções</button>
      </div>

      <div className="relative w-[240px] h-[250px] mx-auto sm:w-[360px] sm:h-[375px] md:mx-0 lg:w-[480px] lg:h-[500px]">
        <div className="absolute w-[480px] h-[500px] -translate-x-1/4 -translate-y-1/4 scale-50 sm:scale-75 sm:-translate-x-16 sm:-translate-y-16 lg:scale-100 lg:translate-x-0 lg:translate-y-0">
          <HeroBannerProdutcCard
            imageLink={FotoProduto1}
            buttonText="Comprar em 12x"
            className="firstButton-GA4 z-10 left-1/2 -translate-x-1/2 top-0"
            imgSize="max-h-36"
          />
          <HeroBannerProdutcCard
            imageLink={FotoProduto2}
            buttonText="Mais Detalhes"
            className="secondButton-GA4 translate-y-1/2 top-6 left-1.5"
          />
          <HeroBannerProdutcCard
            imageLink={FotoProduto3}
            buttonText="Adicionar à sacola"
            className="thirdButton-GA4 translate-y-1/4 bottom-16 right-4"
          />
        </div>
      </div>


    </section>
  );
}