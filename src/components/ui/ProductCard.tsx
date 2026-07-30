import Image from "next/image";
import type { Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
  onSelect: (product: Product) => void;
};

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(product)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={product.images[0]}
          alt={`${product.name} importé depuis la Chine par Mamé Transport`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-xl font-bold text-text">
          {product.name}
        </h3>
        <p className="line-clamp-2 text-sm text-text-muted">
          {product.description}
        </p>
        <span className="mt-3 inline-block w-fit rounded-full border-2 border-primary px-5 py-2 text-sm font-semibold text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
          En savoir plus
        </span>
      </div>
    </button>
  );
}
