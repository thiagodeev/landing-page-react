interface HeroBannerProdutcCardProps {
  imageLink: string;
  buttonText: string;
  className ?: string;
  imgSize ?: string;
}

export function HeroBannerProdutcCard(props:HeroBannerProdutcCardProps) {
  return (
    <div className={`bg-white w-52 h-72 rounded-lg overflow-hidden absolute shadow-products ${props.className} select-none`}>
      <div className="h-56 py-3 flex justify-center items-center">
        <img src={props.imageLink} className={`${props.imgSize} pointer-events-none`}/>
      </div>

      <div className="flex h-16 justify-center">
        <p className="inline-block fixed bottom-4 mt-3 py-3 px-6 text-myPink border border-myPink rounded-3xl hover:bg-myPink hover:text-white transition-colors">
          {props.buttonText}
        </p>
      </div>
    </div>
  );
}
