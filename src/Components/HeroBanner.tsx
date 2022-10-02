import { HeroBannerProdutcCard } from "./HeroBanner_ProdutcCard";
import { breakpoint } from "../Assets/utilities";


import FotoProduto1 from '../Assets/images/produto-1.png';
import FotoProduto2 from '../Assets/images/produto-2.png';
import FotoProduto3 from '../Assets/images/produto-3.png';

export function HeroBanner() {
  let originalWidth = 480;
  let originalHeight = 500;
  

  return (
    <section className="bg-[#03FFA5] py-8 px-4">
      <h1 className="text-4xl">CRIAMOS <br/>LOJAS QUE <br/>VENDEM MAIS.</h1>
      <p className="mt-4">
        A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?
      </p>

      <button className="py-3 px-6 my-6 border border-black rounded-md">Veja nossas soluções</button>

      <div className={`products-container relative w-[240px] h-[250px] mx-auto`}>
        <div className={`products absolute w-[480px] h-[500px] -translate-x-1/4 -translate-y-1/4 scale-50 ${breakpoint('sm', 'scale-75')}`}>
          <HeroBannerProdutcCard
            imageLink={FotoProduto1}
            buttonText="Comprar em 12x"
            className="z-10 left-1/2 -translate-x-1/2 top-0"
            imgSize="max-h-36"
          />
          <HeroBannerProdutcCard
            imageLink={FotoProduto2}
            buttonText="Mais Detalhes"
            className="translate-y-1/2 top-6 left-1.5"
          />
          <HeroBannerProdutcCard
            imageLink={FotoProduto3}
            buttonText="Adicionar à sacola"
            className="translate-y-1/4 bottom-16 right-4"
          />
        </div>
      </div>


    </section>
  );
}